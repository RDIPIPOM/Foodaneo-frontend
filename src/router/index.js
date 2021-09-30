import Vue from 'vue'
import Router from 'vue-router'

// Views
import HomeView from '@/views/Home'
import MenuDishesView from '@/views/MenuDishes'
import MenuPlacesView from '@/views/MenuPlaces'
import DishView from '@/views/Dish'
import LoginView from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/menu-dishes',
      name: 'MenuDishesView',
      component: MenuDishesView
    },
    {
      path: '/menu-places',
      name: 'MenuPlacesView',
      component: MenuPlacesView
    },
    {
      path: '/dish',
      name: 'DishView',
      component: DishView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    }
  ]
})
