require('./bootstrap');

// Bootstrap-vueの実装
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.Vue = require('vue');
import ExampleComponent from './components/example.vue'
Vue.component('example-component', ExampleComponent)

import NavVar from './components/navbar.vue'
Vue.component('navigation-bar', NavVar)

new Vue({
    el: '#app'
});
