import { createRouter, createWebHashHistory } from 'vue-router'
import { checkToken } from '../utils/checkToken'

// User views
import Home from '../views/users/Home.vue'
import Community from '../views/users/Community.vue'
import Register from '../views/users/Register'
import Login from '../views/users/Login'
import PlayerStats from '../views/users/PlayerStats.vue'
import Profile from '../views/users/Profile'
import Departements from '../views/users/Departements'

// Admin views
import AdminHome from '../views/admin/Home'

// Admin components
import TableUsers from '../components/Table/TableUsers'
import TableAuthUsers from '../components/Table/TableAuthUsers'

// Errors
import Page404 from '../views/errors/Page404.vue'

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
    path: '/profile',
    name: 'Profile',
    component: Profile,
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
    path: '/departements',
    name: 'Departements',
    component: Departements,
    meta: {
      isProtected: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      isProtected: false,
      isLogginRoute: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isProtected: false,
      isLogginRoute: true
    }
  },
  {
    path: '/community/stats/:game_username',
    name: 'PlayerStats',
    component: PlayerStats,
    meta: {
      isProtected: true
    }
  },
  {
    path: '/admin',
    name: '/AdminHome',
    component: AdminHome,
    meta: {
      isProtected: true,
      isAdmin: true
    },
    beforeEnter: async (to, from, next) => {

      const res = await checkToken.isAdmin()

      if (to.path === '/admin' && res === true) next({name: 'UserAuth'})
      if (to.path === '/admin' && !res) next({name: 'Home'})
      else next()
    },
    children: [
      {
        path: 'users/auth',
        name: 'UserAuth',
        component: TableAuthUsers,
      },
      {
        path: 'users',
        name: 'Users',
        component: TableUsers
      }
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: Page404
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async(to, from, next) => {
  
  const res = await checkToken.isAuthenticated()

  if (res === false && to.meta.isProtected) next({name: 'Login'})
  if (res === true && to.meta.isLogginRoute) next({name: 'Home'})
  else next()
})

export default router
