<template>
  <transition name="slide-fade">
    <div class="cart">
      <div class="cart-container">
        <div class="cart-header">
          <img v-on:click="$emit('close-cart')" class="btn-x" src="../assets/img/x-icon.svg">
          <h4 class="h4 text-shopping-cart">Carrito de compras</h4>
        </div>
        <h6 class="h6 cart-title-articles">Artículos&nbsp;<span class="cart-articles-counter">(2)</span></h6>
        <div class="card-cart-article">
          <div class="cart-article-header">
            <h6 class="h6 cart-article-title">Sandwich</h6>
            <h6 class="h6 cart-article-counter">(1)</h6>
          </div>
          <div class="cart-article-body">
            <div class="medium-body cart-article-note">Sin jitomate, con poco aderezo.</div>
            <div class="medium-body cart-article-price">$64.79</div>
          </div>
        </div>
        <div class="card-cart-article">
          <div class="cart-article-header">
            <h6 class="h6 cart-article-title">Sandwich</h6>
            <h6 class="h6 cart-article-counter">(1)</h6>
          </div>
          <div class="cart-article-body">
            <div class="medium-body cart-article-note">Sin jitomate, con poco aderezo.</div>
            <div class="medium-body cart-article-price">$64.79</div>
          </div>
        </div>
        <div class="cart-subtotal-container">
          <h4 class="h4 cart-subtotal-text">Subtotal:&nbsp;<span class="cart-subtotal">$129.58</span></h4>
        </div>
        <div class="button btn-option-cart btn-add-articles">Agregar más productos</div>
        <div class="button btn-option-cart btn-finish-order">Terminar orden</div>
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
