import Vue from 'vue'
import Router from 'vue-router'

// Views
import HomeView from '@/views/Home'
import MenuView from '@/views/Menu'
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
      path: '/menu',
      name: 'MenuView',
      component: MenuView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    }
  ]
})
