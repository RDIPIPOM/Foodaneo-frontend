<template>
  <div class="card-cart-article">
    <div class="cart-article-header">
      <h6 class="h6 cart-article-title">{{cartArticle.dish_name}}</h6>
      <h6 class="h6 cart-article-counter">({{cartArticle.order_detail_quantity}})</h6>
    </div>
    <div class="cart-article-body">
      <div class="medium-body cart-article-note">{{cartArticle.order_detail_comments}}</div>
      <div class="medium-body cart-article-price">${{cartArticle.order_detail_total}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartArticleCard',
  props: ['cartArticle']
}
</script>

<style lang="scss" src="../scss/components/CartArticleCard/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/CartArticleCard/_skin.scss"></style>
