require('./bootstrap');

// Bootstrap-vueの実装
import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.Vue = require('vue');
import ReportPage from './pages/report.vue'
import FormPage from './pages/form.vue'

import NavVar from './components/navbar.vue'
Vue.component('navigation-bar', NavVar)

const router = new VueRouter({
    mode: 'history',
    routes: [
        // Indexページ
        {
            path: '/report',
            name: 'report-page',
            component: ReportPage
        },
        // フォームページ
        {
            path: '/form',
            name: 'form-page',
            component: FormPage
        },
        {
            path: '*',
            redirect: '/report'
        },
    ]
});

const app = new Vue({
    el: '#app',
    router
});
