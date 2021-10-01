<template>
  <div>
    <Header></Header>
    <div class="CTA">
      <h1 class="h1 CTA-message">La primera comida es la más importante del día ¿Ya desayunaste?</h1>
      <a class="button btnCTAOrder" href="/#/menu-dishes">Ordenar</a>
    </div>
    <div class="dish-categories">
      <div class="dish-category-menu">
        <h5 class="h5 dish-category">Desayunos para comenzar con todo</h5>
        <DishCard v-for="dish in dishes" v-bind:key="dish.id" v-bind:dish="dish"></DishCard>
        <div class="btn-view-all">
          <p class="text-view-all">Ver todos</p>
          <img class="arrow-img" src="../assets/img/arrow-icon.svg" alt="">
        </div>
      </div>
      <div class="dish-category-menu">
        <h5 class="h5 dish-category">Desayunos para comenzar con todo</h5>
        <DishCard v-for="dish in dishes" v-bind:key="dish.id" v-bind:dish="dish"></DishCard>
        <div class="btn-view-all">
          <p class="text-view-all">Ver todos</p>
          <img class="arrow-img" src="../assets/img/arrow-icon.svg" alt="">
        </div>
      </div>
    </div>
    <div class="navigation-space"></div>
    <Nav activeWindow="home"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import DishCard from '../components/DishCard.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'HomeView',
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

<style lang="scss" src="../scss/Home/_skeleton.scss"></style>
<style lang="scss" src="../scss/Home/_skin.scss"></style>
