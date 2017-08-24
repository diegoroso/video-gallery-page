import '_sass/main.scss'
import Vue from 'vue'
import Vuetify from 'vuetify'

import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'

import App from './App.vue'

Vue.use(Vuetify)

sync(store, router)

new Vue({
    store,
    router,
    ...App
}).$mount('#app')