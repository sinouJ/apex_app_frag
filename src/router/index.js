import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Community from '../views/Community.vue'
import Register from '../views/Register'
import Login from '../views/Login'

const isAuthenticated = false

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Login' && !isAuthenticated) next({name: 'Login'})
      else next()
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Login' && !isAuthenticated) next ({name: 'Login'})
      else next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
