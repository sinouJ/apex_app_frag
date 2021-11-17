import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/users/Home.vue'
import Community from '../views/users/Community.vue'
import Register from '../views/users/Register'
import Login from '../views/users/Login'
import checkToken from '../utils/checkToken'
import PlayerStats from '../views/users/PlayerStats.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isProtected: true
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: {
      isProtected: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      isProtected: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isProtected: false
    }
  },
  {
    path: '/community/stats/:game_username',
    name: 'PlayerStats',
    component: PlayerStats,
    meta: {
      isProtected: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async(to, from, next) => {
  
  const res = await checkToken()

  if (res === false && to.meta.isProtected) {
    next({name: 'Login'})
  }
  else next()
})

export default router
