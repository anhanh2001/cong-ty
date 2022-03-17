import { createRouter, createWebHistory } from 'vue-router'
import AdminProducts from '../views/AdminProducts.vue'
import AdminUser from '../views/AdminUser.vue'
import Login from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'home',
      component: HomePage
    },
    {
      path: '/products',
      name: 'products',
      beforeEnter: (to,from,next)=>{
        if(! localStorage.getItem('email')){
          return next({name:'login'})
        }
        next();
      },
      component: AdminProducts
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AdminUser
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/cart',
      name:'cart',
      component: Cart
    }
  ]
})

export default router
