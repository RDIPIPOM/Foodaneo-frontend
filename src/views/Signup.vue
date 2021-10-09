<template>
  <div>
    <div class="login-logo-container">
      <img src="../assets/img/login-logo.svg" alt="">
    </div>
    <h1 class="h1 text-registro">Registro</h1>
    <form class="formLogin" action="./#/signup2">
      <label for="input-phone" class="body loginLabel">Para comenzar, escribe tu número de teléfono:</label>
      <input type="number" v-model="phone" name="input-phone" class="body loginInput" autocomplete="phone" placeholder="XXX-XXX-XXXX">
      <input type="submit" class="button loginInput loginSubmit" value="Continuar" :disabled="isDisabled">
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
// import { signin } from '@/services/users'

export default {
  name: 'SignupView',
  data: function () {
    return {
      phone: ''
    }
  },
  computed: {
    isDisabled () {
      if (this.phone.length >= 10) {
        return false
      }
      return true
    }
  },
  watch: {
    phone (newPhone) {
      localStorage.phone = newPhone
    }
  },
  components: {
    Nav
  }
}
</script>

<style lang="scss" src="../scss/Signup/_skeleton.scss"></style>
<style lang="scss" src="../scss/Signup/_skin.scss"></style>
