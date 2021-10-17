<template>
    <header class="header">
        <div v-bind:class="{'cover-cart': cart}"></div>
        <div class="title-foodaneo">
            <div v-on:click="$emit('open-cart')" class="btn-cart" href="#Cart">
                <img v-if="cartTotalItems === 0" src="../assets/img/cart-icon.svg" alt="">
                <img v-else src="../assets/img/cart-containing-icon.svg" alt="">
            </div>
        </div>
        <Cart v-bind:cart="cart" v-on:close-cart="$emit('close-cart')" v-show="cart"></Cart>
    </header>
</template>

<script>
import Cart from '../components/Cart.vue'

// Services
import { getTotalItemsOrderDetails } from '@/services/users'

export default {
  name: 'Header',
  data: function () {
    return {
      cartTotalItems: 0
    }
  },
  props: ['cart'],
  created: function () {
    this.getTotalItemsOrderDetails()
  },
  methods: {
    getTotalItemsOrderDetails: function () {
      if (!isNaN(localStorage.user_id)) {
        getTotalItemsOrderDetails(localStorage.user_id).then((res) => {
          this.cartTotalItems = res.data.total_items
        }).catch(err => console.log(err))
      }
    }
  },
  watch: {
    cart: function () {
      this.getTotalItemsOrderDetails()
    }
  },
  components: {
    Cart
  }
}
</script>

<style lang="scss" src="../scss/components/Header/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/Header/_skin.scss"></style>
