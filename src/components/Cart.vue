<template>
  <transition name="slide-fade">
    <div class="cart">
      <div class="cart-container">
        <div class="cart-header">
          <img v-on:click="$emit('close-cart')" class="btn-x" src="../assets/img/x-icon.svg">
          <h4 class="h4 text-shopping-cart">Carrito de compras</h4>
        </div>
        <h6 class="h6 cart-title-articles">Artículos&nbsp;<span class="cart-articles-counter">({{order.order_details.length}})</span></h6>
        <CartArticleCard v-for="cartArticle in order.order_details" v-bind:key="cartArticle.order_detail_id" v-bind:cartArticle="cartArticle"></CartArticleCard>
        <div class="cart-subtotal-container">
          <h4 class="h4 cart-subtotal-text">Subtotal:&nbsp;<span class="cart-subtotal">${{order.total}}</span></h4>
        </div>
        <div class="button btn-option-cart btn-add-articles">Agregar más productos</div>
        <div class="button btn-option-cart btn-finish-order">Terminar orden</div>
      </div>
    </div>
  </transition>
</template>

<script>
import CartArticleCard from './CartArticleCard.vue'

// Services
import { getCurrentOrder } from '@/services/users'

export default {
  name: 'Cart',
  props: ['cart'],
  data: function () {
    return {
      order: {'order_details': []}
    }
  },
  created: function () {
    if (!isNaN(localStorage.user_id)) {
      getCurrentOrder(localStorage.user_id).then((res) => {
        this.order = res.data
        console.log(this.order)
      })
    } else {
      this.order.order_details = []
    }
  },
  watch: {
    cart: function () {
      if (!isNaN(localStorage.user_id)) {
        getCurrentOrder(localStorage.user_id).then((res) => {
          this.order = res.data
        })
      } else {
        this.order.order_details = []
      }
    }
  },
  components: {
    CartArticleCard
  }
}
</script>

<style lang="scss" src="../scss/components/Cart/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/Cart/_skin.scss"></style>
