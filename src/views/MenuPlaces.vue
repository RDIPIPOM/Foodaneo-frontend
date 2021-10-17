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

// Services
import { getRestaurants } from '@/services/restaurants'

export default {
  name: 'MenuDishesView',
  data: function () {
    return {
      cart: false,
      places: []
    }
  },
  created: function () {
    getRestaurants().then((res) => {
      this.places = res.data
      let time = new Date().getTime()
      this.places.forEach((place, index) => {
        if (new Date(this.places[index].open_time) <= time && new Date(this.places[index].open_time) >= time) {
          this.places[index]['placeStatus'] = 'Abierto'
        } else {
          this.places[index]['placeStatus'] = 'Cerrado'
        }
        this.places[index].path_photography = require('../assets/img/places-pictures/' + place.path_photography)
      })
    }).catch(err => console.log(err))
  },
  components: {
    Header,
    PlaceCard,
    Nav
  }
}
</script>

<style lang="scss" src="../scss/MenuPlaces/_skeleton.scss"></style>
<style lang="scss" src="../scss/MenuPlaces/_skin.scss"></style>
