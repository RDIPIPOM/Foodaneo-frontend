<template>
  <div>
    <Header></Header>
    <div class="nav-menu">
      <a href="./#/menu-dishes" class="nav-menu-option nav-menu-option-active">Platillos</a>
      <a href="./#/menu-places" class="nav-menu-option">Lugares</a>
    </div>
    <div class="menu-title">
      <h1 class="h1 menu-title-h1">¿Qué se te antoja?</h1>
      <p class="menu-title-p">Tenemos todas estas opciones para ti</p>
    </div>
    <div class="dish-categories">
      <DishCategoryCardMenu v-for="dishCategory in dishCategories" v-bind:key="dishCategory.id" v-bind:dishCategory="dishCategory"></DishCategoryCardMenu>
    </div>
    <div class="navigation-space"></div>
    <Nav activeWindow="menu"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import DishCategoryCardMenu from '../components/DishCategoryCardMenu.vue'
import Nav from '../components/Nav.vue'

// Services
import { getDishes } from '@/services/dishes'

export default {
  name: 'MenuDishesView',
  data: function () {
    return {
      dishCategories: []
    }
  },
  created: function () {
    getDishes(0).then((res) => {
      this.dishCategories = res.data
      console.log(this.dishCategories)
      this.dishCategories.forEach((category, index) => {
        this.dishCategories[index]['dishes'].forEach((dish, dishIndex) => {
          this.dishCategories[index]['dishes'][dishIndex]['dish_path_photography'] = require('../assets/img/dish-pictures/' + dish['dish_path_photography'])
        })
      })
    }).catch(err => console.log(err))
  },
  components: {
    Header,
    DishCategoryCardMenu,
    Nav
  }
}
</script>

<style lang="scss" src="../scss/MenuDishes/_skeleton.scss"></style>
<style lang="scss" src="../scss/MenuDishes/_skin.scss"></style>
