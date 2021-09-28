<template>
    <header class="header" v-bind:class="{opacity30: cart}">
        <div class="title-foodaneo">
            <div v-on:click="cart = true" class="btn-cart" href="#Cart">
                <img src="../assets/img/cart.svg" alt="">
            </div>
        </div>
        <Cart v-on:close-cart="cart = false" v-show="cart"></Cart>
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

<style lang="scss" src="../scss/components/Header/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/Header/_skin.scss"></style>
