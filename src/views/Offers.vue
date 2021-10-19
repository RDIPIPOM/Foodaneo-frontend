<template>
  <div>
    <Header v-on:open-cart="cart = true" v-on:close-cart="cart = false" v-bind:cart="cart"></Header>
    <div class="offers-background">
      <h1 class="h1 offers-title">Ofertas del día</h1>
      <div class="body offers-subtitle">Ahorra en lo que más te dusta</div>
    </div>
    <DishCard v-for="dish in dishes" v-bind:key="dish.id" v-bind:dish="dish"></DishCard>
    <div class="medium-body text-at-the-end">Eso es todo por hoy :)</div>
    <div class="navigation-space"></div>
    <Nav activeWindow="menu"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import DishCard from '../components/DishCard.vue'

// Services
import { getDishesOffers } from '@/services/dishes'

export default {
  name: 'OffersView',
  data: function () {
    return {
      cart: false,
      dishes: []
    }
  },
  created: function () {
    getDishesOffers().then(res => {
      this.dishes = res.data
      this.dishes.forEach(dish => {
        dish.dish_path_photography = require('../assets/img/dish-pictures/' + dish.dish_path_photography)
      })
    })
  },
  components: {
    Header,
    Nav,
    DishCard
  }
}
</script>

<style lang="scss" src="../scss/Offers/_skeleton.scss"></style>
<style lang="scss" src="../scss/Offers/_skin.scss"></style>
