<template>
  <div>
    <Header v-on:open-cart="cart = true" v-on:close-cart="cart = false" v-bind:cart="cart"></Header>
    <div class="nav-menu-categories">
      <a href="./#/breakfasts" class="nav-menu-category nav-menu-category-active"><img class="img-menu-category" src="../assets/img/breakfast-active-icon.svg" alt=""></a>
      <a href="./#/lunches" class="nav-menu-category"><img class="img-menu-category" src="../assets/img/lunch-icon.svg" alt=""></a>
      <a href="./#/drinks" class="nav-menu-category"><img class="img-menu-category" src="../assets/img/drink-icon.svg" alt=""></a>
      <a href="./#/snacks" class="nav-menu-category"><img class="img-menu-category" src="../assets/img/snack-icon.svg" alt=""></a>
    </div>
    <h1 class="h1 category-title">{{category.name}}</h1>
    <div class="body category-subtitle">Para continuar el día con energía</div>
    <div class="dishes-category">
      <DishCard v-for="dish in category.dishes" v-bind:key="dish.id" v-bind:dish="dish"></DishCard>
    </div>
    <div class="navigation-space"></div>
    <Nav activeWindow="menu"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import DishCard from '../components/DishCard.vue'

// Services
import { getDishesCategory } from '@/services/dishes'

export default {
  name: 'LunchesView',
  data: function () {
    return {
      cart: false,
      category: []
    }
  },
  created: function () {
    getDishesCategory(4).then(res => {
      this.category = res.data
      this.category.dishes.forEach(dish => {
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

<style lang="scss" src="../scss/CommonCategoryMenu/_skeleton.scss"></style>
<style lang="scss" src="../scss/CommonCategoryMenu/_skin.scss"></style>
