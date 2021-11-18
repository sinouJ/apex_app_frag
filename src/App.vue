<template>
  <div v-if="$route.path.includes('/admin')"></div>
  <Navbar v-else/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

import './sass/main.scss'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
  #app {
    padding-bottom: 85px;
  }
</style>