<template>
  <div>
    <Header v-on:open-cart="cart = true" v-on:close-cart="cart = false" v-bind:cart="cart"></Header>
    Estamos en restaurant
    <div class="navigation-space"></div>
    <Nav activeWindow="profile"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'

// Services
// import { getUserOrders } from '@/services/users'

export default {
  name: 'RestaurantView',
  data: function () {
    return {
      cart: false
    }
  },
  created: function () {

  },
  components: {
    Header,
    Nav
  }
}
</script>

<style lang="scss" src="../scss/Profile/_skeleton.scss"></style>
<style lang="scss" src="../scss/Profile/_skin.scss"></style>
