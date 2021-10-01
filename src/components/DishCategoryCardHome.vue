<template>
  <div class="dish-category-menu">
    <h5 class="h5 dish-category">{{ dishCategory.name }}</h5>
    <DishCard v-for="dish in dishCategory.dishes" v-bind:key="dish.id" v-bind:dish="dish"></DishCard>
    <div class="btn-view-all">
      <p class="text-view-all">Ver todos</p>
      <img class="arrow-img" src="../assets/img/arrow-icon.svg" alt="">
    </div>
  </div>
</template>

<script>
import DishCard from '../components/DishCard.vue'

export default {
  name: 'DishCategoryCardHome',
  props: ['dishCategory'],
  components: {
    DishCard
  }
}
</script>

<style lang="scss" src="../scss/components/DishCategoryCardHome/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/DishCategoryCardHome/_skin.scss"></style>
