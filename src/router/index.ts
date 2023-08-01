import { createRouter, createWebHistory } from 'vue-router'
import SearchSeriesViewVue from '../views/SearchSeriesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchSeriesViewVue
    },
    {
      path: '/search-series',
      name: 'search-series',
      component: SearchSeriesViewVue
    },
    {
      path: '/my-list',
      name: 'my-list',
      component: () => import('../views/MyListView.vue')
    },
    {
      path: '/serie-for-tonight',
      name: 'serie-for-tonight',
      component: () => import('../views/SerieForTonightView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not found',
      component: () => import('../views/NotFoundView.vue')
    },

    
  ]
})

export default router
