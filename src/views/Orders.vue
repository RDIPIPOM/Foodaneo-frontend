<template>
  <div>
    <Header v-on:open-cart="cart = true" v-on:close-cart="cart = false" v-bind:cart="cart"></Header>
    <div class="orders-header">
      <h1 class="h1 orders-title">Tus pedidos</h1>
    </div>
    <div class="orders-body">
      <div class="body orders-empty">No parece haber nada aquí, ¿por qué no comienzas <a class="btn-order" href="./#/menu-dishes">ordenando</a>?</div>
    </div>
    <div class="navigation-space"></div>
    <Nav activeWindow="orders"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'

// Services
// import { getUserOrders } from '@/services/users'

export default {
  name: 'OrdersView',
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

<style lang="scss" src="../scss/Orders/_skeleton.scss"></style>
<style lang="scss" src="../scss/Orders/_skin.scss"></style>
