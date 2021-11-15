<template>
  <div class="container">
    <Header title="Community"/>
    <card-player :game_username="username" :id="id"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import CardPlayer from '../components/CardPlayer.vue'

export default {
    name: "Community",
    components: {
      CardPlayer,
      Header
    },
    data: function() {
      return {
        username: 'Nouuns',
        id: 10
      }
    }
}
</script>

<style>

</style>