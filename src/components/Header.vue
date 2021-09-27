<template>
    <header class="header">
        <div class="title-foodaneo">
            <div v-on:click="cart = !cart" class="cart" href="#Cart">
                <img src="../assets/img/cart.svg" alt="">
            </div>
        </div>
        <Cart v-show="cart"></Cart>
    </header>
</template>

<script>
import Cart from '../components/Cart.vue'

export default {
  name: 'Header',
  data () {
    return {
      cart: false
    }
  },
  components: {
    Cart
  }
}
</script>
