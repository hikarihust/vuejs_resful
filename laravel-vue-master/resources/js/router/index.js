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

// Product Component
import Storeproduct from '../views/product/Create.vue';
import Product from '../views/product/Index.vue';
import Editproduct from '../views/product/Edit.vue';

// Expense Routes
import Storeexpense from '../views/expense/Create.vue';
import Expense from '../views/expense/Index.vue';
import Editexpense from '../views/expense/Edit.vue';

// Salary Component
import Salary from '../views/salary/AllEmployee.vue';
import Paysalary from '../views/salary/Create.vue';

import Allsalary from '../views/salary/Index.vue';
import Viewsalary from '../views/salary/View.vue';
import Editsalary from '../views/salary/Edit.vue';

// Stock Component
import Stock from '../views/product/Stock.vue';
import Editstock from '../views/product/EditStock.vue';

// Customer Component
import Storecustomer from '../views/customer/Create.vue';
import Customer from '../views/customer/Index.vue';
import Editcustomer from '../views/customer/Edit.vue';

// POS Component
import Pos from '../views/pos/Pointofsale.vue';

// Order Component
import Order from '../views/order/Order.vue';
import Vieworder from '../views/order/Vieworder.vue';
import Searchorder from '../views/order/Search.vue';

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

    // Product Component
    { path: '/store-product', component: Storeproduct, name:'store-product'},
    { path: '/product', component: Product, name:'product'},
    { path: '/edit-product/:id', component: Editproduct, name:'edit-product'},

    // Expense Routes
    { path: '/store-expense', component: Storeexpense, name:'store-expense'},
    { path: '/expense', component: Expense, name:'expense'},
    { path: '/edit-expense/:id', component: Editexpense, name:'edit-expense'},

    // Salary Routes
    { path: '/given-salary', component: Salary, name:'given-salary'},
    { path: '/pay-salary/:id', component: Paysalary, name:'pay-salary'},

    { path: '/salary', component: Allsalary, name:'salary'},
    { path: '/view-salary/:id', component: Viewsalary, name:'view-salary'},
    { path: '/edit-salary/:id', component: Editsalary, name:'edit-salary'},

    // Stock Routes
    { path: '/stock', component: Stock, name:'stock'},
    { path: '/edit-stock/:id', component: Editstock, name:'edit-stock'},

    // Customer Routes
    { path: '/store-customer', component: Storecustomer, name:'store-customer'},
    { path: '/customer', component: Customer, name:'customer'},
    { path: '/edit-customer/:id', component: Editcustomer, name:'edit-customer'},

    // POS Component
    { path: '/pos', component: Pos, name:'pos'},

    // Order Routes
    { path: '/order', component: Order, name:'order'},
    { path: '/view-order/:id', component: Vieworder, name:'view-order'},
    { path: '/searchorder', component: Searchorder, name:'searchorder'},
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
