<template>
    <nav class="nav">
        <div class="nav-container">
            <a href="./#/" class="nav-option">
                <img class="nav-option-picture" v-bind:class="isHomeActive" src="../assets/img/home-icon.svg">
                <p class="nav-option-title">Inicio</p>
            </a>
            <a href="./#/menu-dishes" class="nav-option">
                <img class="nav-option-picture" v-bind:class="isMenuActive" src="../assets/img/menu-icon.svg">
                <p class="nav-option-title">Menú</p>
            </a>
            <a href="" class="nav-option">
                <img class="nav-option-picture" v-bind:class="isOrdersActive" src="../assets/img/orders-icon.svg">
                <p class="nav-option-title">Pedidos</p>
            </a>
            <a href="" class="nav-option">
                <img class="nav-option-picture" v-bind:class="isProfileActive" src="../assets/img/profile-icon.svg">
                <p class="nav-option-title">Cuenta</p>
            </a>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: ['activeWindow'],
  data () {
    return {

    }
  },
  computed: {
    isHomeActive: function () {
      return {
        'nav-option-picture-active': this.activeWindow === 'home'
      }
    },
    isMenuActive: function () {
      return {
        'nav-option-picture-active': this.activeWindow === 'menu'
      }
    },
    isOrdersActive: function () {
      return {
        'nav-option-picture-active': this.activeWindow === 'orders'
      }
    },
    isProfileActive: function () {
      return {
        'nav-option-picture-active': this.activeWindow === 'profile'
      }
    }
  }
}
</script>

<style lang="scss" src="../scss/components/Nav/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/Nav/_skin.scss"></style>
