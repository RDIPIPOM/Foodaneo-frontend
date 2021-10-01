<template>
  <div>
    <Header></Header>
    <div class="CTA">
      <h1 class="h1 CTA-message">La primera comida es la más importante del día ¿Ya desayunaste?</h1>
      <a class="button btnCTAOrder" href="/#/menu-dishes">Ordenar</a>
    </div>
    <div class="dish-categories">
      <DishCategoryCardHome v-for="dishCategory in dishCategories" v-bind:key="dishCategory.id" v-bind:dishCategory="dishCategory"></DishCategoryCardHome>
    </div>
    <div class="navigation-space"></div>
    <Nav activeWindow="home"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import DishCategoryCardHome from '../components/DishCategoryCardHome.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'HomeView',
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
    DishCategoryCardHome,
    Nav
  }
}
</script>

<style lang="scss" src="../scss/Home/_skeleton.scss"></style>
<style lang="scss" src="../scss/Home/_skin.scss"></style>
