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
import Editemployee from '../views/employee/Edit.vue';

// Supplier Component
import Storesupplier from '../views/supplier/Create.vue';
import Supplier from '../views/supplier/Index.vue';
import Editsupplier from '../views/supplier/Edit.vue';

// Category Component
import Storecategory from '../views/category/Create.vue';
import Category from '../views/category/Index.vue';
import Editcategory from '../views/category/Edit.vue';

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
    { path: '/edit-employee/:id', component: Editemployee, name:'edit-employee'},

    // Supplier Routes
    { path: '/store-supplier', component: Storesupplier, name:'store-supplier'},
    { path: '/supplier', component: Supplier, name:'supplier'},
    { path: '/edit-supplier/:id', component: Editsupplier, name:'edit-supplier'},

    // Category Component
    { path: '/store-category', component: Storecategory, name:'store-category'},
    { path: '/category', component: Category, name:'category'},
    { path: '/edit-category/:id', component: Editcategory, name:'edit-category'},
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
