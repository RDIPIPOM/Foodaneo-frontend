<template>
    <default-layout>
      <div class="CTA">
        <div class="CTA-message">
        La primera comida es la más importante del día ¿Ya desayunaste?
        </div>
        <a class="btnCTAOrder" href="/#/menu">Ordenar</a>
      </div>
      <div class="dish-categories">
        <div class="dish-category-menu">
          <h5 class="dish-category">Desayunos para comenzar con todo</h5>
          <div class="dish-card">
            <div class="dish-body">
              <div class="dish-body-top">
                <h4 class="dish-title">Plato de desayuno</h4>
                <p class="dish-description">Chilaquiles, huevo y café</p>
              </div>
              <div class="dish-body-bottom">
                <div class="dish-location-price">
                  <p class="dish-location">Lonchería</p>
                  <p class="dish-price">$52.50</p>
                </div>
              </div>
            </div>
            <div class="dish-picture"></div>
          </div>
          <div class="dish-card">
            <div class="dish-body">
              <div class="dish-body-top">
                <h4 class="dish-title">Plato de desayuno</h4>
                <p class="dish-description">Chilaquiles, huevo y café</p>
              </div>
              <div class="dish-body-bottom">
                <div class="dish-location-price">
                  <p class="dish-location">Lonchería</p>
                  <p class="dish-price">$52.50</p>
                </div>
              </div>
            </div>
            <div class="dish-picture"></div>
          </div>
          <div class="dish-card">
            <div class="dish-body">
              <div class="dish-body-top">
                <h4 class="dish-title">Plato de desayuno</h4>
                <p class="dish-description">Chilaquiles, huevo y café</p>
              </div>
              <div class="dish-body-bottom">
                <div class="dish-location-price">
                  <p class="dish-location">Lonchería</p>
                  <p class="dish-price">$52.50</p>
                </div>
              </div>
            </div>
            <div class="dish-picture"></div>
          </div>
          <div class="btn-view-all">
            <p class="text-view-all">Ver todos</p>
            <img class="arrow-img" src="../assets/img/arrow-icon.svg" alt="">
          </div>
        </div>
        <div class="dish-category-menu">
          <h5 class="dish-category">Desayunos para comenzar con todo</h5>
          <div class="dish-card">
            <div class="dish-body">
              <div class="dish-body-top">
                <h4 class="dish-title">Plato de desayuno</h4>
                <p class="dish-description">Chilaquiles, huevo y café</p>
              </div>
              <div class="dish-body-bottom">
                <div class="dish-location-price">
                  <p class="dish-location">Lonchería</p>
                  <p class="dish-price">$52.50</p>
                </div>
              </div>
            </div>
            <div class="dish-picture"></div>
          </div>
          <div class="dish-card">
            <div class="dish-body">
              <div class="dish-body-top">
                <h4 class="dish-title">Plato de desayuno</h4>
                <p class="dish-description">Chilaquiles, huevo y café</p>
              </div>
              <div class="dish-body-bottom">
                <div class="dish-location-price">
                  <p class="dish-location">Lonchería</p>
                  <p class="dish-price">$52.50</p>
                </div>
              </div>
            </div>
            <div class="dish-picture"></div>
          </div>
          <div class="dish-card">
            <div class="dish-body">
              <div class="dish-body-top">
                <h4 class="dish-title">Plato de desayuno</h4>
                <p class="dish-description">Chilaquiles, huevo y café</p>
              </div>
              <div class="dish-body-bottom">
                <div class="dish-location-price">
                  <p class="dish-location">Lonchería</p>
                  <p class="dish-price">$52.50</p>
                </div>
              </div>
            </div>
            <div class="dish-picture"></div>
          </div>
          <div class="btn-view-all">
            <p class="text-view-all">Ver todos</p>
            <img class="arrow-img" src="../assets/img/arrow-icon.svg" alt="">
          </div>
        </div>
        <div class="dish-category-menu">
          <h5 class="dish-category">Desayunos para comenzar con todo</h5>
          <div class="dish-card">
            <div class="dish-body">
              <div class="dish-body-top">
                <h4 class="dish-title">Plato de desayuno</h4>
                <p class="dish-description">Chilaquiles, huevo y café</p>
              </div>
              <div class="dish-body-bottom">
                <div class="dish-location-price">
                  <p class="dish-location">Lonchería</p>
                  <p class="dish-price">$52.50</p>
                </div>
              </div>
            </div>
            <div class="dish-picture"></div>
          </div>
          <div class="dish-card">
            <div class="dish-body">
              <div class="dish-body-top">
                <h4 class="dish-title">Plato de desayuno</h4>
                <p class="dish-description">Chilaquiles, huevo y café</p>
              </div>
              <div class="dish-body-bottom">
                <div class="dish-location-price">
                  <p class="dish-location">Lonchería</p>
                  <p class="dish-price">$52.50</p>
                </div>
              </div>
            </div>
            <div class="dish-picture"></div>
          </div>
          <div class="dish-card">
            <div class="dish-body">
              <div class="dish-body-top">
                <h4 class="dish-title">Plato de desayuno</h4>
                <p class="dish-description">Chilaquiles, huevo y café</p>
              </div>
              <div class="dish-body-bottom">
                <div class="dish-location-price">
                  <p class="dish-location">Lonchería</p>
                  <p class="dish-price">$52.50</p>
                </div>
              </div>
            </div>
            <div class="dish-picture"></div>
          </div>
          <div class="btn-view-all">
            <p class="text-view-all">Ver todos</p>
            <img class="arrow-img" src="../assets/img/arrow-icon.svg" alt="">
          </div>
        </div>
      </div>
      <Nav activeWindow="home"></Nav>
    </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import Nav from '../components/Nav.vue'

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
    Nav
  }
}
</script>
