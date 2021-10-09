<template>
  <div>
    <div class="login-logo-container">
      <img src="../assets/img/login-logo.svg" alt="">
    </div>
    <h1 class="h1 text-registro">Registro</h1>
    <form class="formLogin" action="">
      <label for="input-first-name" class="body loginLabel">Nombre:</label>
      <input type="text" v-model="user_data.first_name" name="input-first-name" class="log-in-text loginInput" autocomplete="firstname" placeholder="Ramón Alejandro">
      <p v-show="first_name_error !== ''" class="medium-body login-invalid-field-error">{{first_name_error}}</p>
      <label for="input-last-name" class="body loginLabel">Apellidos:</label>
      <input type="text" v-model="user_data.last_name" name="input-last-name" class="log-in-text loginInput" autocomplete="lastname" placeholder="Hernández García">
      <p v-show="last_name_error !== ''" class="medium-body login-invalid-field-error">{{last_name_error}}</p>
      <label for="input-email" class="body loginLabel">Correo electrónico:</label>
      <input type="text" v-model="user_data.email" name="input-email" class="log-in-text loginInput" autocomplete="email" placeholder="foodaneo@ucol.mx">
      <p v-show="email_error !== ''" class="medium-body login-invalid-field-error">{{email_error}}</p>
      <label for="input-password" class="body loginLabel">Contraseña:</label>
      <input type="password" v-model="user_data.password" name="input-password" class="log-in-text loginInput" autocomplete="password" placeholder="Contraseña">
      <p v-show="password_error !== ''" class="medium-body login-invalid-field-error">{{password_error}}</p>
      <label for="input-passwordconfirm" class="body loginLabel">Confirmar contraseña:</label>
      <input type="password" v-model="user_data.passwordconfirm" name="input-passwordconfirm" class="log-in-text loginInput" autocomplete="passwordconfirm" placeholder="Contraseña">
      <p v-show="passwordconfirm_error !== ''" class="medium-body login-invalid-field-error">{{passwordconfirm_error}}</p>
      <input v-on:click="signup" type="submit" class="button loginInput loginSubmit" value="Continuar" :disabled="isDisabled">
      <p class="medium-body text-switch-login">¿Ya tienes una cuenta? <a class="btn-switch-login" href="./#/login">Inicia sesión</a></p>
    </form>
    <div class="navigation-space"></div>
    <Nav activeWindow="profile"></Nav>
  </div>
</template>

<script>
// Components
import Nav from '../components/Nav.vue'

// Services
import { signup } from '@/services/users'

export default {
  name: 'Signup2View',
  data: function () {
    return {
      user_data: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        passwordconfirm: ''
      },
      first_name_error: '',
      last_name_error: '',
      email_error: '',
      password_error: '',
      passwordconfirm_error: ''
    }
  },
  computed: {
    isDisabled () {
      if (this.user_data.first_name !== '' && this.user_data.last_name !== '' && this.user_data.email !== '' && this.user_data.password !== '' && this.user_data.passwordconfirm !== '') {
        return false
      }
      return true
    }
  },
  methods: {
    signup: function (e) {
      e.preventDefault()

      this.first_name_error = ''
      this.last_name_error = ''
      this.email_error = ''
      this.password_error = ''
      this.passwordconfirm_error = ''

      if (this.user_data.password === this.user_data.passwordconfirm) {
        this.user_data.phone = localStorage.phone
        signup(this.user_data).then((res) => {
          if (!Array.isArray(res.data)) {
            localStorage.user_id = res.data['id']
            this.$router.push({name: 'HomeView'})
          } else {
            res.data.forEach(error => {
              switch (error.error_code) {
                case 'signuperror1':
                  this.first_name_error = 'Introduce un nombre válido.'
                  break
                case 'signuperror2':
                  this.last_name_error = 'Introduce un apellido válido.'
                  break
                case 'signuperror3':
                  this.email_error = 'Introduce un correo electrónico válido.'
                  break
                case 'signuperror6':
                  this.email_error = 'Esta dirección de correo electrónico ya ha sido registrada'
                  break
                case 'signuperror5':
                  this.password_error = 'Contraseña inválida. Asegúrate que tenga entre 8 y 20 caracteres y que incluya una minúcula, una mayúscula y un número.'
                  break
              }
            })
          }
        }).catch(err => console.log(err))
      } else {
        this.passwordconfirm_error = 'Las contraseñas no coinciden.'
      }
    }
  },
  components: {
    Nav
  }
}
</script>

<style lang="scss" src="../scss/Signup/_skeleton.scss"></style>
<style lang="scss" src="../scss/Signup/_skin.scss"></style>
