import Vue from 'vue'
import Router from 'vue-router'

import FeaturedPage from '_views/FeaturedPage.vue'
import AllVideosPage from '_views/AllVideosPage.vue'
import SearchPage from '_views/SearchPage.vue'
import NotFoundPage from '_views/NotFoundPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: FeaturedPage
        },
        {
            path: '/videos',
            component: AllVideosPage
        },
        {
            path: '/search',
            component: SearchPage
        },
        {
            path: '*',
            component: NotFoundPage
        }
    ]
})