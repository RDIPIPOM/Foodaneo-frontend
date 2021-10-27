import Vue from 'vue'
import Router from 'vue-router'

// Views
import HomeView from '@/views/Home'
import MenuDishesView from '@/views/MenuDishes'
import MenuPlacesView from '@/views/MenuPlaces'
import DishView from '@/views/Dish'
import LoginView from '@/views/Login'
import SignupView from '@/views/Signup'
import Signup2View from '@/views/Signup2'
import ProfileView from '@/views/Profile'
import OrdersView from '@/views/Orders'
import RestaurantView from '@/views/Restaurant'
import OffersView from '@/views/Offers'
import BreakfastsView from '@/views/Breakfasts'
import LunchesView from '@/views/Lunches'
import DrinksView from '@/views/Drinks'
import SnacksView from '@/views/Snacks'
import DeliveryDetailsView from '@/views/DeliveryDetails'

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
    },
    {
      path: '/signup',
      name: 'SignupView',
      component: SignupView
    },
    {
      path: '/signup2',
      name: 'Signup2View',
      component: Signup2View
    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: ProfileView
    },
    {
      path: '/orders',
      name: 'OrdersView',
      component: OrdersView
    },
    {
      path: '/restaurant',
      name: 'RestaurantView',
      component: RestaurantView
    },
    {
      path: '/offers',
      name: 'OffersView',
      component: OffersView
    },
    {
      path: '/breakfasts',
      name: 'BreakfastsView',
      component: BreakfastsView
    },
    {
      path: '/lunches',
      name: 'LunchesView',
      component: LunchesView
    },
    {
      path: '/drinks',
      name: 'DrinksView',
      component: DrinksView
    },
    {
      path: '/snacks',
      name: 'SnacksView',
      component: SnacksView
    },
    {
      path: '/deliverydetails',
      name: 'DeliveryDetailsView',
      component: DeliveryDetailsView
    }
  ]
})
