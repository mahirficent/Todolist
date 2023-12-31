import { createRouter, createWebHistory } from 'vue-router'
import toDoView from '../views/toDoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: toDoView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/toDoAboutView.vue')
    },
    {
      path: '/testing',
      name: 'testing',
      component: () => import('../views/toDoTestingView.vue')
    },
  ]
})

export default router
