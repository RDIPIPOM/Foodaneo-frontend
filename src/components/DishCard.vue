<template>
  <a href="/#/dish" class="dish-card">
    <div class="dish-body">
      <div>
        <h4 class="h4 dish-title">{{ dish.name }}</h4>
        <p class="small-body dish-description">{{ dish.description }}</p>
      </div>
      <div>
        <div class="dish-location-price">
          <p class="small-body dish-location">{{ dish.location }}</p>
          <p class="price-tag dish-price">{{ dish.price }}</p>
        </div>
      </div>
    </div>
    <img class="dish-picture" v-bind:src="dish.path_photography">
  </a>
</template>

<script>
export default {
  name: 'DishCard',
  props: ['dish']
}
</script>

<style lang="scss" src="../scss/components/DishCard/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/DishCard/_skin.scss"></style>
