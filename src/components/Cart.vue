<template>
  <transition name="slide-fade">
    <div class="cart">
      <div class="cart-container">
        <div class="cart-header">
          <img v-on:click="$emit('close-cart')" class="btn-x" src="../assets/img/x-icon.svg">
          <h4 class="h4 text-shopping-cart">Carrito de compras</h4>
        </div>
        <div v-if="total_articles !== 0">
          <h6 class="h6 cart-title-articles">Artículos&nbsp;<span class="cart-articles-counter">({{total_articles}})</span></h6>
          <CartArticleCard @delete-article="updateArticles" v-for="cartArticle in order.order_details" v-bind:key="cartArticle.order_detail_id" v-bind:cartArticle="cartArticle"></CartArticleCard>
          <div class="cart-subtotal-container">
            <h4 class="h4 cart-subtotal-text">Subtotal:&nbsp;<span class="cart-subtotal">${{order.total}}</span></h4>
          </div>
          <a href="./#/menu-dishes" class="button btn-option-cart btn-add-articles">Agregar más productos</a>
          <div class="button btn-option-cart btn-finish-order">Terminar orden</div>
        </div>
        <div class="cart-empty" v-else>
          <div class="body cart-empty-text">Parece que no has<br>agregado nada aún</div>
        </div>
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
      order: {
        'order_details': [],
        'total': 0
      },
      total_articles: 0
    }
  },
  created: function () {
    this.updateArticles()
  },
  methods: {
    updateArticles: function () {
      this.total_articles = 0
      if (!isNaN(localStorage.user_id)) {
        getCurrentOrder(localStorage.user_id).then((res) => {
          if (res.data !== 'Order not found') {
            this.order = res.data
            this.order.order_details.forEach(orderDetail => {
              this.total_articles += orderDetail.order_detail_quantity
            })
          }
        })
      } else {
        this.order.order_details = []
        this.total_articles = 0
      }
    }
  },
  watch: {
    cart: function () {
      this.updateArticles()
    }
  },
  components: {
    CartArticleCard
  }
}
</script>

<style lang="scss" src="../scss/components/Cart/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/Cart/_skin.scss"></style>
