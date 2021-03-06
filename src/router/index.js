import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Into from '../views/Into.vue'
import Login from '../views/login.vue'
import Testss from '../views/Test.vue'
import About from '../views/About.vue'
import RGi from '../views/rg.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/into',
    name: 'into',
    component: Into
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/test',
    name: 'Testss',
    component: Testss
  },
  {
    path: '/register',
    name: 'RGi',
    component: RGi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
