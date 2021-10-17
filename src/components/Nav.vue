<template>
    <nav class="nav">
        <div class="nav-container">
            <a href="./#/" class="nav-option">
                <img class="nav-option-picture" v-if="this.activeWindow == 'home'" src="../assets/img/home-active-icon.svg">
                <img class="nav-option-picture" v-else src="../assets/img/home-icon.svg">
                <p class="nav-option-title">Inicio</p>
            </a>
            <a href="./#/menu-dishes" class="nav-option">
                <img class="nav-option-picture" v-if="this.activeWindow === 'menu'" src="../assets/img/menu-active-icon.svg">
                <img class="nav-option-picture" v-else src="../assets/img/menu-icon.svg">
                <p class="nav-option-title">Menú</p>
            </a>
            <a href="./#/orders" class="nav-option">
                <img class="nav-option-picture" v-if="this.activeWindow === 'orders'" src="../assets/img/orders-active-icon.svg">
                <img class="nav-option-picture" v-else src="../assets/img/orders-icon.svg">
                <p class="nav-option-title">Pedidos</p>
            </a>
            <a v-on:click="profileView" class="nav-option">
                <img class="nav-option-picture" v-if="this.activeWindow === 'profile'" src="../assets/img/profile-active-icon.svg">
                <img class="nav-option-picture" v-else src="../assets/img/profile-icon.svg">
                <p class="nav-option-title">Cuenta</p>
            </a>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: ['activeWindow'],
  methods: {
    profileView: function (e) {
      e.preventDefault()
      if (!isNaN(localStorage.user_id)) {
        if (this.$route.name !== 'ProfileView') {
          this.$router.push({name: 'ProfileView'}).catch(err => {
            console.log(err)
          })
        }
      } else {
        if (this.$route.name !== 'LoginView') {
          this.$router.push({name: 'LoginView'}).catch(err => {
            console.log(err)
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" src="../scss/components/Nav/_skeleton.scss"></style>
<style lang="scss" src="../scss/components/Nav/_skin.scss"></style>
