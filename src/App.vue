<template>
  <Navbar />
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
</style>