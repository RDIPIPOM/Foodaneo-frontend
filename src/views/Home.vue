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
// Components
import Header from '../components/Header.vue'
import DishCategoryCardHome from '../components/DishCategoryCardHome.vue'
import Nav from '../components/Nav.vue'

// Services
import { getDishes } from '@/services/dishes'

export default {
  name: 'HomeView',
  data: function () {
    return {
      dishCategories: []
    }
  },
  created: function () {
    getDishes().then((res) => {
      this.dishCategories = res.data
      this.dishCategories.forEach((category, index) => {
        this.dishCategories[index]['dishes'].forEach((dish, dishIndex) => {
          this.dishCategories[index]['dishes'][dishIndex]['dish_path_photography'] = require('../assets/img/' + dish['dish_path_photography'])
        })
      })
    }).catch(err => console.log(err))
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
