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
    <div class="cart-article-bottom">
      <div @click="deleteArticle" class="small-body delete-article">Eliminar producto</div>
    </div>
  </div>
</template>

<script>
// Services
import { deleteOrderDetail } from '@/services/users'

export default {
  name: 'CartArticleCard',
  props: ['cartArticle'],
  methods: {
    deleteArticle: function () {
      console.log(this.cartArticle)
      if (!isNaN(localStorage.user_id)) {
        deleteOrderDetail(localStorage.user_id, this.cartArticle.order_id, this.cartArticle.order_detail_id).then((res) => {
          if (res.data.affectedRows === 1) {
            this.$emit('delete-article')
          } else {
            console.log('Ha ocurrido un error inesperado al intentar eliminar')
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" src="../scss/components/CartArticleCard/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/CartArticleCard/_skin.scss"></style>
