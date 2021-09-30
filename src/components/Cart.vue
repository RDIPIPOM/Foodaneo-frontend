<template>
  <transition name="slide-fade">
    <div class="cart">
      <div class="cart-container">
        <div class="cart-header">
          <img v-on:click="$emit('close-cart')" class="btn-x" src="../assets/img/x-icon.svg">
          <h4 class="text-shopping-cart">Carrito de compras</h4>
        </div>
        <div class="cart-title-articles">Artículos (1)</div>
        <div class="cart-article">
          <div class="cart-article-body">
            <h6 class="cart-article-title">Sandwich</h6>
            <div class="cart-article-note">Sin jitomate, con poco aderezo</div>
            <div class="cart-article-price">$64.79</div>
          </div>
          <img class="cart-article-image">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style lang="scss" src="../scss/components/Cart/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/Cart/_skin.scss"></style>
