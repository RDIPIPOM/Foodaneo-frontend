<template>
  <div>
    <Header></Header>
    <div class="nav-menu">
      <a href="./#/menu-dishes" class="nav-menu-option">Platillos</a>
      <a href="./#/menu-places" class="nav-menu-option nav-menu-option-active">Lugares</a>
    </div>
    <div class="menu-title">
      <h2 class="menu-title-h2">Ordena de los lugares que más te gustan</h2>
      <p class="menu-title-p">Tenemos todas estas opciones para ti</p>
    </div>
    <div class="dish-categories">
      <PlaceCard placeStatus="Abierto"></PlaceCard>
      <PlaceCard placeStatus="Cerrado"></PlaceCard>
      <PlaceCard placeStatus="Abierto"></PlaceCard>
      <PlaceCard placeStatus="Abierto"></PlaceCard>
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
  components: {
    Header,
    PlaceCard,
    Nav
  }
}
</script>
