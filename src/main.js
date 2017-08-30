import '_sass/main.scss'
import Vue from 'vue'
import Vuetify from 'vuetify'

import * as filters from '_app/filters/index.js'

import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'

import App from './App.vue'

Vue.use(Vuetify)

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

sync(store, router)

new Vue({
    store,
    router,
    ...App
}).$mount('#app')