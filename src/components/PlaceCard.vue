<template>
  <div class="place-card">
    <img class="place-image" src="../assets/img/places-pictures/ccc.jpg">
    <div class="place-details">
      <div class="place-name">Lonchería</div>
      <div class="place-status">{{ placeStatus }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceCard',
  props: ['pathPhotography', 'placeName', 'placeStatus'],
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
