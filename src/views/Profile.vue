<template>
  <div>
    <Header v-on:open-cart="cart = true" v-on:close-cart="cart = false" v-bind:cart="cart"></Header>
    <div class="profile-container-top">
      <div class="medium-body welcomeGreet">{{getGreet()}}, bienvenido</div>
      <h2 class="h2 profile-name">{{first_name}}</h2>
      <div class="medium-body profile-text-pedidos-realizados">Pedidos realizados</div>
      <div class="log-in-text profile-orders">12</div>
    </div>
    <div class="profile-container-bottom">
      <div class="medium-body profile-text-detail">Correo electrónico</div>
      <div class="body profile-detail">{{email}}</div>
      <div class="medium-body profile-text-detail">Teléfono</div>
      <div class="body profile-detail">{{phone}}</div>
      <a v-on:click="logOut" class="btn-log-out">
        <img src="../assets/img/log-out-icon.svg" alt="">
        <p class="small-links text-log-out">Cerrar sesión</p>
      </a>
    </div>
    <div class="navigation-space"></div>
    <Nav activeWindow="profile"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'

// Services
import { getUser } from '@/services/users'

export default {
  name: 'ProfileView',
  data: function () {
    return {
      cart: false,
      date: new Date(),
      first_name: '',
      email: '',
      phone: ''
    }
  },
  created: function () {
    getUser(localStorage.user_id).then(res => {
      this.first_name = res.data.first_name
      this.email = res.data.email
      this.phone = res.data.phone
    }).catch(err => console.log(err))
  },
  methods: {
    getGreet: function () {
      let time = this.date.getHours()

      if (time >= 0 && time < 12) {
        return 'Buenos días'
      } else if (time >= 12 && time < 20) {
        return 'Buenas tardes'
      } else {
        return 'Buenas noches'
      }
    },
    logOut: function () {
      localStorage.user_id = null
      this.$router.push({name: 'LoginView'})
    }
  },
  components: {
    Header,
    Nav
  }
}
</script>

<style lang="scss" src="../scss/Profile/_skeleton.scss"></style>
<style lang="scss" src="../scss/Profile/_skin.scss"></style>
