<template>
  <div>
    <div class="login-logo-container">
      <img src="../assets/img/login-logo.svg" alt="">
    </div>
    <h1 class="h1 text-registro">Ingresar</h1>
    <form class="formLogin" action="">
      <label for="input-email" class="body loginLabel">Correo electrónico:</label>
      <input type="email" v-model="email" name="input-email" class="log-in-text loginInput" autocomplete="username" placeholder="foodaneo@ucol.mx">
      <label for="input-password" class="body loginLabel">Contraseña:</label>
      <input type="password" v-model="password" name="input-password" class="log-in-text loginInput" autocomplete="current-password" placeholder="Contraseña">
      <input type="submit" class="button loginInput loginSubmit" value="Ingresar" :disabled="isDisabled">
      <p class="medium-body text-switch-register">¿No tienes una cuenta? <a class="btn-switch-register" href="./#/signup">Regístrate</a></p>
    </form>
    <Nav activeWindow="profile"></Nav>
  </div>
</template>

<script>
// Components
import Nav from '../components/Nav.vue'

// Services
// import { signin } from '@/services/users'

export default {
  name: 'LoginView',
  data: function () {
    return {
      email: '',
      password: ''
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
  components: {
    Nav
  }
}
</script>

<style lang="scss" src="../scss/Login/_skeleton.scss"></style>
<style lang="scss" src="../scss/Login/_skin.scss"></style>
