import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../views/HomeViews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViews
    },
    {
      path: '/about1',
      name: 'about1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutViews1.vue')
    },
    {
        path: '/about2',
        name: 'about2',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutViews2.vue')
      },
      {
        path: '/about3',
        name: 'about3',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutViews3.vue')
      },
      {
        path: '/about4',
        name: 'about4',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutViews4.vue')
      },   {
        path: '/about5',
        name: 'about5',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutViews5.vue')
      }
  ]
})

export default router
