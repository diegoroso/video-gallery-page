import Vue from 'vue'
import Router from 'vue-router'

import FeaturedPage from '_views/FeaturedPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: FeaturedPage
        }
    ]
})