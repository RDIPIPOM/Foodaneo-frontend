<template>
  <div class="dish-category-menu">
    <h4 class="h4 dish-category">{{ dishCategory.name }}</h4>
    <DishCard v-for="dish in dishCategory.dishes" v-bind:key="dish.id" v-bind:dish="dish"></DishCard>
    <div @click="goViewAll" class="btn-view-all">
      <p class="text-view-all">Ver todos</p>
      <img class="arrow-img" src="../assets/img/arrow-icon.svg" alt="">
    </div>
  </div>
</template>

<script>
import DishCard from './DishCard.vue'

export default {
  name: 'DishCategoryCardHome',
  props: ['dishCategory', 'viewAllItems'],
  methods: {
    goViewAll: function () {
      this.$router.push({name: this.viewAllItems}).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    DishCard
  }
}
</script>

<style lang="scss" src="../scss/components/DishCategoryCardHome/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/DishCategoryCardHome/_skin.scss"></style>
