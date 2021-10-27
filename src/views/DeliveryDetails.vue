<template>
  <div>
    <Header v-on:open-cart="cart = true" v-on:close-cart="cart = false" v-bind:cart="cart"></Header>
    <div class="dd-header">
      <h2 class="h2 dd-title">Detalles de entrega</h2>
      <div class="body dd-subtitle">¿Dónde y a qué hora entregaremos tu pedido?</div>
    </div>
    <form class="dd-body">
      <div>
        <div class="form-control">
          <label class="body dd-label" for="input-address">Facultad o zona de entrega</label>
          <input v-model="address" class="dd-input" id="input-address" name="input-address" type="text" placeholder="Facultad de Medicina">
        </div>
        <div class="form-control">
          <label class="body dd-label" for="input-time">Hora de entrega</label>
          <input v-model="time" class="dd-input" id="input-time" name="input-time" type="time">
        </div>
      </div>
      <input class="button btnGoPayMethods" @click="goPayMethod" type="submit" value="Continuar a método de pago" :disabled="isDisabled">
    </form>
    <Nav activeWindow="orders"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'DeliveryDetails',
  data: function () {
    return {
      cart: false,
      address: null,
      time: null
    }
  },
  created: function () {
    if (localStorage.address != null) { this.address = localStorage.address }
    if (localStorage.time != null) { this.time = localStorage.time }
  },
  computed: {
    isDisabled () {
      if (this.address != null && this.address !== '' && this.time != null && this.time !== '') {
        localStorage.address = this.address
        localStorage.time = this.time
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    goPayMethod: function (e) {
      e.preventDefault()
      console.log(this.address)
      console.log(this.time)
    }
  },
  components: {
    Header,
    Nav
  }
}
</script>

<style lang="scss" src="../scss/DeliveryDetails/_skeleton.scss"></style>
<style lang="scss" src="../scss/DeliveryDetails/_skin.scss"></style>
