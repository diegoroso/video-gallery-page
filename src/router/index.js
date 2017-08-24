import Vue from 'vue'
import Router from 'vue-router'

import Default from '_views/Default.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: Default
        }
    ]
})