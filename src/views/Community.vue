<template>
  <div class="container">
    <Header title="Community"/>
    <card-player :game_username="test"/>
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
        test: 'Nouuns'
      }
    }
}
</script>

<style>

</style>