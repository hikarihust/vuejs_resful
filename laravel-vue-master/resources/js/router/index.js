import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
