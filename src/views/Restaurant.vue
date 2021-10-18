<template>
  <div>
    <Header v-on:open-cart="cart = true" v-on:close-cart="cart = false" v-bind:cart="cart"></Header>
    <img class="big-restaurant-picture" :src="place.path_photography" alt="">
    <div class="restaurant-header">
      <h1 class="h1 restaurant-name">{{place.name}}</h1>
      <div class="medium-body" :class="[place.placeStatus === 'Abierto' ? 'place-status-open' : 'place-status-close']">{{place.placeStatus}}</div>
    </div>
    <div class="body restaurant-description">{{place.description}}</div>
    <div class="dish-categories">
      <DishCategoryCardMenu v-for="dishCategory in place.categories" v-bind:key="dishCategory.id" v-bind:dishCategory="dishCategory" v-bind:limit="null"></DishCategoryCardMenu>
    </div>
    <div class="navigation-space"></div>
    <Nav activeWindow="menu"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import DishCategoryCardMenu from '../components/DishCategoryCardMenu.vue'

export default {
  name: 'RestaurantView',
  data: function () {
    return {
      cart: false,
      place: []
    }
  },
  created: function () {
    if (Object.keys(this.$route.params).length > 0) {
      this.place = this.$route.params
      localStorage.place = JSON.stringify(this.place)
    } else {
      this.place = JSON.parse(localStorage.place)
    }
    this.place.categories.forEach((category, indexCategory) => {
      category.dishes.forEach((dish, indexDish) => {
        this.place.categories[indexCategory]['dishes'][indexDish]['dish_path_photography'] = require('../assets/img/dish-pictures/' + dish.dish_path_photography)
      })
    })
  },
  components: {
    Header,
    Nav,
    DishCategoryCardMenu
  }
}
</script>

<style lang="scss" src="../scss/Restaurant/_skeleton.scss"></style>
<style lang="scss" src="../scss/Restaurant/_skin.scss"></style>
