require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'

// Import User Class
import User from './Helpers/User';
window.User = User;

// Sweet Alert start
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

window.Toast = Toast;

// Sweet Alert End

Vue.use(VueRouter)

const app = new Vue({
    router,
    el: '#app',
});
