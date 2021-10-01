<template>
  <div class="container">
    <Title title="Community"/>
    <card-player :game_username="test"/>
  </div>
</template>

<script>
import Title from '../atoms/Title.vue'
import CardPlayer from '../components/CardPlayer.vue'

export default {
    name: "Community",
    components: {
      Title,
      CardPlayer
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