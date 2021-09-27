<template>
  <div>
    <Header></Header>
    <div class="nav-menu">
      <a href="./#/menu-dishes" class="nav-menu-option nav-menu-option-active">Platillos</a>
      <a href="./#/menu-places" class="nav-menu-option">Lugares</a>
    </div>
    <div class="menu-title">
      <h2 class="menu-title-h2">¿Qué se te antoja?</h2>
      <p class="menu-title-p">Tenemos todas estas opciones para ti</p>
    </div>
    <div class="dish-categories">
      <div class="dish-category-menu">
        <h3 class="dish-category">Comida</h3>
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
        <h3 class="dish-category">Comida</h3>
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
        <h3 class="dish-category">Comida</h3>
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
    <div class="navigation-space"></div>
    <Nav activeWindow="menu"></Nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'MenuDishesView',
  components: {
    Header,
    Nav
  }
}
</script>
