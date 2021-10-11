<template>
  <a v-on:click="$router.push({name: 'DishView', params: dish})" class="dish-card" v-bind:dish="dish">
    <div class="dish-body">
      <div>
        <h4 class="h4 dish-title">{{ dish.dish_name }}</h4>
        <p class="small-body dish-description">{{ dish.dish_short_description }}</p>
      </div>
      <div>
        <div class="dish-location-price">
          <p class="small-body dish-location">{{ dish.restaurant_name }}</p>
          <p v-if="!dish.dish_discount_price" class="price-tag dish-price">{{'$' + dish.dish_price}}</p>
          <div class="dish-price-discount" v-else>
            <p class="price-tag dish-price">{{'$' + dish.dish_discount_price}}&nbsp;</p>
            <p class="discounted-price-tag dish-price">{{'$' + dish.dish_price}}</p>
          </div>
        </div>
      </div>
    </div>
    <img class="dish-picture" v-bind:src="dish.dish_path_photography">
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
