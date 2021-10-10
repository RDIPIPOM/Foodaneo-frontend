<template>
  <div class="dish-category-menu">
    <h3 class="h3 dish-category">{{ dishCategory.name }}</h3>
    <DishCard v-for="dish in dishCategory.dishes" v-bind:key="dish.id" v-bind:dish="dish"></DishCard>
    <div class="btn-view-all">
      <p class="text-view-all">Ver todos</p>
      <img class="arrow-img" src="../assets/img/arrow-icon.svg" alt="">
    </div>
  </div>
</template>

<script>
import DishCard from './DishCard.vue'

export default {
  name: 'DishCategoryCardMenu',
  props: ['dishCategory'],
  created: function () {
    this.dishCategory['dishes'].length = 3
  },
  components: {
    DishCard
  }
}
</script>

<style lang="scss" src="../scss/components/DishCategoryCardMenu/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/DishCategoryCardMenu/_skin.scss"></style>
