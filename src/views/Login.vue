<template>
  <div>
    <div class="login-logo-container">
      <img src="../assets/img/login-logo.svg" alt="">
    </div>
    <h1 class="h1 text-registro">Ingresar</h1>
    <form class="formLogin" action="">
      <label for="input-email" class="body loginLabel">Correo electrónico:</label>
      <input type="email" v-model="email" name="input-email" class="body loginInput" autocomplete="username" placeholder="foodaneo@ucol.mx">
      <label for="input-password" class="body loginLabel">Contraseña:</label>
      <input type="password" v-model="password" name="input-password" class="body loginInput" autocomplete="current-password" placeholder="Contraseña">
      <p v-show="error !== ''" class="medium-body login-invalid-field-error">{{error}}</p>
      <input v-on:click="signin" type="submit" class="button loginInput loginSubmit" value="Ingresar" :disabled="isDisabled">
      <p class="medium-body text-switch-register">¿No tienes una cuenta? <a class="btn-switch-register" href="./#/signup">Regístrate</a></p>
    </form>
    <div class="navigation-space"></div>
    <Nav activeWindow="profile"></Nav>
  </div>
</template>

<script>
// Components
import Nav from '../components/Nav.vue'

// Services
import { signin } from '@/services/users'

export default {
  name: 'LoginView',
  data: function () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  computed: {
    isDisabled () {
      if (this.email !== '' && this.password !== '') {
        return false
      }
      return true
    }
  },
  methods: {
    signin: function (e) {
      e.preventDefault()
      let params = {
        'email': this.email,
        'password': this.password
      }
      signin(params).then((res) => {
        if (typeof (res.data) === 'number') {
          localStorage.user_id = res.data
          this.$router.push({name: 'HomeView'})
        } else {
          switch (res.data['error_code']) {
            case 'signinerror1':
              this.error = 'Usuario o contraseña incorrecto'
              break
          }
        }
      }).catch(err => console.log(err))
    }
  },
  components: {
    Nav
  }
}
</script>

<style lang="scss" src="../scss/Login/_skeleton.scss"></style>
<style lang="scss" src="../scss/Login/_skin.scss"></style>
