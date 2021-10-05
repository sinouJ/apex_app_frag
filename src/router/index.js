import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Community from '../views/Community.vue'
import Register from '../views/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
