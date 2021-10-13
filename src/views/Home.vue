<template>
  <div>
    <Header v-on:open-cart="cart = true" v-on:close-cart="cart = false" v-bind:cart="cart"></Header>
    <div class="CTA">
      <h1 class="h1 CTA-message">{{CTA_message}}</h1>
      <a class="button btnCTAOrder" href="/#/menu-dishes">Ordenar</a>
    </div>
    <div class="dish-categories">
      <DishCategoryCardHome v-bind:key="dishCategoryTime.id" v-bind:dishCategory="dishCategoryTime"></DishCategoryCardHome>
      <DishCategoryCardHome v-bind:key="dishCategoryOffers.id" v-bind:dishCategory="dishCategoryOffers"></DishCategoryCardHome>
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
import { getCategories } from '@/services/catalogs'
import { getDishesCategory, getDishesOffers } from '@/services/dishes'

export default {
  name: 'HomeView',
  data: function () {
    return {
      cart: false,
      date: new Date(),
      CTA_message: '',
      dishCategories: {},
      dishCategoryTime: {},
      dishCategoryOffers: {}
    }
  },
  created: function () {
    getCategories().then((res) => {
      res.data.forEach(category => {
        this.dishCategories[category['name']] = category
      })

      let time = this.date.getHours()
      if (time >= 0 && time < 12) {
        this.CTA_message = 'La primera comida es la más importante del día ¿Ya desayunaste?'
        this.getDishes(this.dishCategories['Desayunos para comenzar con todo']['id'])
      } else {
        this.CTA_message = '¿Hambre? Pide lo que más se te antoja'
        this.getDishes(this.dishCategories['Comidas para llenarte de energía']['id'])
      }
    }).catch(err => console.log(err))

    getDishesOffers().then((res) => {
      this.dishCategoryOffers = {
        id: 9999,
        name: 'Ofertas del día'
      }
      this.dishCategoryOffers['dishes'] = res.data
      this.dishCategoryOffers['dishes'].length = 3
      this.dishCategoryOffers['dishes'].forEach(dish => {
        dish.dish_path_photography = require('../assets/img/dish-pictures/' + dish.dish_path_photography)
      })
    }).catch(err => console.log(err))
  },
  methods: {
    getDishes: function (idCategory) {
      getDishesCategory(idCategory).then((res) => {
        this.dishCategoryTime = res.data
        this.dishCategoryTime.length = 3
        this.dishCategoryTime['dishes'].forEach(dish => {
          dish.dish_path_photography = require('../assets/img/dish-pictures/' + dish.dish_path_photography)
        })
      }).catch(err => console.log(err))
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
