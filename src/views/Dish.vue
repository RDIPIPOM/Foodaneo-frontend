<template>
  <div>
    <Header></Header>
    <img src="" alt="">
    <div class="navigation-space"></div>
    <Nav activeWindow="menu"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'DishView',
  data: function () {
    return {
      dish: {}
    }
  },
  components: {
    Header,
    Nav
  }
}
</script>

<style lang="scss" src="../scss/Dish/_skeleton.scss"></style>
<style lang="scss" src="../scss/Dish/_skin.scss"></style>
