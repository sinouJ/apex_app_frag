<template>
  <div>
    <Navbar v-if="$route.path.includes('/admin') === false"/>
    <router-view/>
  </div>
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
    padding-top: 95px;
  }
</style>