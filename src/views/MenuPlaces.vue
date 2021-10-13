<template>
  <div>
    <Header v-on:open-cart="cart = true" v-on:close-cart="cart = false" v-bind:cart="cart"></Header>
    <div class="nav-menu">
      <a href="./#/menu-dishes" class="nav-menu-option">Platillos</a>
      <a href="./#/menu-places" class="nav-menu-option nav-menu-option-active">Lugares</a>
    </div>
    <div class="menu-title">
      <h1 class="h1 menu-title-h1">Ordena de los lugares que más te gustan</h1>
      <p class="menu-title-p">Tenemos todas estas opciones para ti</p>
    </div>
    <div class="dish-categories">
      <PlaceCard v-for="place in places" v-bind:key="place.id" v-bind:place="place"></PlaceCard>
    </div>
    <div class="navigation-space"></div>
    <Nav activeWindow="menu"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import PlaceCard from '../components/PlaceCard.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'MenuDishesView',
  data: function () {
    return {
      cart: false,
      places: [
        { id: 1, name: 'Lonchería 1', placeStatus: 'Abierto', path_photography: require('../assets/img/places-pictures/ccc.jpg') },
        { id: 2, name: 'Lonchería 2', placeStatus: 'Abierto', path_photography: require('../assets/img/places-pictures/ccc.jpg') },
        { id: 3, name: 'Lonchería 3', placeStatus: 'Abierto', path_photography: require('../assets/img/places-pictures/ccc.jpg') }
      ]
    }
  },
  components: {
    Header,
    PlaceCard,
    Nav
  }
}
</script>
