<template>
  <div>
    <Header v-on:open-cart="cart = true" v-on:close-cart="cart = false" v-bind:cart="cart"></Header>
    <img class="big-dish-picture" :src="dish.dish_path_photography" alt="">
    <div class="dish-details">
      <h2 class="h2 dish-title">{{dish.dish_name}}</h2>
      <div class="medium-body dish-location">{{dish.restaurant_name}}</div>
      <div class="body dish-description">{{dish.dish_description}}</div>
    </div>
    <div class="dish-separator">
      <h4 class="h4 dish-separator-text">¿Cuántos serán?</h4>
    </div>
    <div class="counter-container">
      <div class="counter">
        <div v-bind:class="{'btn-counter-disabled': counter === 0}" v-on:click="decreaseCounter" class="btn-counter">-</div>
        <div class="counter-number">{{this.counter}}</div>
        <div v-on:click="increaseCounter" class="btn-counter">+</div>
      </div>
    </div>
    <div class="dish-separator">
      <h4 class="h4 dish-separator-text">¿Alguna nota sobre la preparación?</h4>
    </div>
    <div class="preparation-notes-container">
      <textarea v-model="comments" class="body preparation-notes"></textarea>
    </div>
    <div class="btn-add-cart-container">
      <input v-on:click="addDish" type="submit" class="button btn-add-cart" value="Agregar al carrito" :disabled="isDisabled">
    </div>
    <div class="navigation-space"></div>
    <div class="dish-details">

    </div>
    <Nav activeWindow="menu"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'

// Services
import { createOrder } from '@/services/users'

export default {
  name: 'DishView',
  data: function () {
    return {
      cart: false,
      dish: null,
      counter: 0,
      comments: null
    }
  },
  created: function () {
    this.dish = this.$route.params
    if (Object.keys(this.dish).length === 0) {
      this.dish = JSON.parse(localStorage.dish)
    } else {
      localStorage.dish = JSON.stringify(this.dish)
    }
  },
  computed: {
    isDisabled () {
      if (this.counter > 0) {
        return false
      }
      return true
    }
  },
  methods: {
    decreaseCounter () {
      if (this.counter !== 0) {
        this.counter--
      }
    },
    increaseCounter () {
      this.counter++
    },
    addDish () {
      if (!isNaN(localStorage.user_id)) {
        let params = {
          'id_dish': this.dish['id_dish'],
          'quantity': this.counter,
          'comments': this.comments
        }
        createOrder(localStorage.user_id, params).then((res) => {
          this.cart = true
        }).catch(err => console.log(err))
      } else {
        this.$router.push({name: 'LoginView'})
      }
    }
  },
  components: {
    Header,
    Nav
  }
}
</script>

<style lang="scss" src="../scss/Dish/_skeleton.scss"></style>
<style lang="scss" src="../scss/Dish/_skin.scss"></style>
