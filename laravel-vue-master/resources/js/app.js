require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'

// Import User Class
import User from './Helpers/User';
window.User = User;

Vue.use(VueRouter)

const app = new Vue({
    router,
    el: '#app',
});
