import { createRouter, createWebHistory } from 'vue-router'

// 1️⃣ Define your routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/project',
    name : 'Project',
    component : () => import('../views/ProjectView.vue')
  },
  {
    path : '/./:pathmatch(.*)',
    name: 'NotFound',
    component: ()=> import('../views/NotFound.vue')
  }
]

// 2️⃣ Create the router instance
const router = createRouter({
  history: createWebHistory(), // uses HTML5 history mode
  routes
})

export default router
