<template>
  <div>
    <Header></Header>
    <div class="nav-menu">
      <a href="./#/menu-dishes" class="nav-menu-option nav-menu-option-active">Platillos</a>
      <a href="./#/menu-places" class="nav-menu-option">Lugares</a>
    </div>
    <div class="menu-title">
      <h2 class="menu-title-h2">¿Qué se te antoja?</h2>
      <p class="menu-title-p">Tenemos todas estas opciones para ti</p>
    </div>
    <div class="dish-categories">
      <div class="dish-category-menu">
        <h3 class="dish-category">Comida</h3>
        <DishCard v-for="dish in dishes" v-bind:key="dish.id" v-bind:dish="dish"></DishCard>
        <div class="btn-view-all">
          <p class="text-view-all">Ver todos</p>
          <img class="arrow-img" src="../assets/img/arrow-icon.svg" alt="">
        </div>
      </div>
    </div>
    <div class="navigation-space"></div>
    <Nav activeWindow="menu"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import DishCard from '../components/DishCard.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'MenuDishesView',
  data: function () {
    return {
      dishes: [
        { id: 1, name: 'Plato de desayuno 1', description: 'Chilaquiles, huevo y café 1', location: 'Lonchería 1', price: '$51.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') },
        { id: 2, name: 'Plato de desayuno 2', description: 'Chilaquiles, huevo y café 2', location: 'Lonchería 2', price: '$52.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') },
        { id: 3, name: 'Plato de desayuno 3', description: 'Chilaquiles, huevo y café 3', location: 'Lonchería 3', price: '$53.50', path_photography: require('../assets/img/dish-pictures/chilaquiles.jpg') }
      ]
    }
  },
  components: {
    Header,
    DishCard,
    Nav
  }
}
</script>

<style lang="scss" src="../scss/MenuDishes/_skeleton.scss"></style>
<style lang="scss" src="../scss/MenuDishes/_skin.scss"></style>
