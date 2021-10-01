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

export default {
  name: 'MenuDishesView',
  data: function () {
    return {
      dishCategories: [
        {
          id: 1,
          name: 'Desayunos para comenzar con todo',
          dishes: [
            { id: 1, name: 'Plato de desayuno 1', description: 'Chilaquiles, huevo y café 1', location: 'Lonchería 1', price: '$51.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') },
            { id: 2, name: 'Plato de desayuno 2', description: 'Chilaquiles, huevo y café 2', location: 'Lonchería 2', price: '$52.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') },
            { id: 3, name: 'Plato de desayuno 3', description: 'Chilaquiles, huevo y café 3', location: 'Lonchería 3', price: '$53.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') }
          ]
        },
        {
          id: 2,
          name: 'Ofertas del día',
          dishes: [
            { id: 4, name: 'Almuerzo 1', description: 'Chilaquiles, huevo y café 1', location: 'Lonchería 1', price: '$51.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') },
            { id: 5, name: 'Almuerzo 2', description: 'Chilaquiles, huevo y café 2', location: 'Lonchería 2', price: '$52.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') },
            { id: 6, name: 'Almuerzo 3', description: 'Chilaquiles, huevo y café 3', location: 'Lonchería 3', price: '$53.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') }
          ]
        },
        {
          id: 3,
          name: 'Para despertar',
          dishes: [
            { id: 7, name: 'Plato de desayuno 1', description: 'Chilaquiles, huevo y café 1', location: 'Lonchería 1', price: '$51.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') },
            { id: 8, name: 'Plato de desayuno 2', description: 'Chilaquiles, huevo y café 2', location: 'Lonchería 2', price: '$52.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') },
            { id: 9, name: 'Plato de desayuno 3', description: 'Chilaquiles, huevo y café 3', location: 'Lonchería 3', price: '$53.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') }
          ]
        }
      ]
    }
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
