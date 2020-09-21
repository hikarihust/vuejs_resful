import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Forget from '../views/auth/Forget.vue';
import Logout from '../views/auth/Logout.vue';

// End Authentication
import Home from '../views/Home.vue';

// Empoyee Component
import Storeemployee from '../views/employee/Create.vue';
import Employee from '../views/employee/Index.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Login, name:'/'},
    { path: '/register', component: Register, name:'register'},
    { path: '/forget', component: Forget, name:'forget'},
    { path: '/logout', component: Logout, name:'logout'},
    { path: '/home', component: Home, name:'home'},

    // Employee Routes
    { path: '/store-employee', component: Storeemployee, name:'store-employee'},
    { path: '/employee', component: Employee, name:'employee'},
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
