import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Community from '../views/Community.vue'
import PlayerStats from '../views/PlayerStats.vue'

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
    path: '/community/stats/:id',
    name: 'PlayerStats',
    component: PlayerStats
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
