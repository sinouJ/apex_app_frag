<template>
  <Navbar />
  <home/>
</template>

<script>
import Home from './views/Home.vue'
import Navbar from './components/Navbar.vue'

import './sass/main.scss'

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  }
}
</script>

<style>
</style>
