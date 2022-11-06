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
  :root {
      --fk-border-width: 0 !important;
      --fk-color-border-focus: transparent !important;
  }
  
  #app {
    box-sizing: border-box;
    padding-bottom: 85px;
    padding-top: 95px;
    min-height: 100vh;
  }
</style>