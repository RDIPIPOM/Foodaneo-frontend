<template>
  <div class="place-card">
    <img class="place-image" v-bind:src="place.path_photography">
    <div class="place-details">
      <h3 class="h3 place-name">{{ place.name }}</h3>
      <div class="medium-body place-status" :class="[place.placeStatus === 'Abierto' ? 'place-status-open' : 'place-status-close']">{{ place.placeStatus }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceCard',
  props: ['place'],
  data () {
    return {

    }
  },
  computed: {
    isHomeActive: function () {
      return {
        'nav-option-picture-active': this.activeWindow === 'home'
      }
    }
  }
}
</script>

<style lang="scss" src="../scss/components/PlaceCard/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/PlaceCard/_skin.scss"></style>
