<template>
  <div class="playerStats container">
      <Title :title="player.game_username"/>
  </div>
</template>

<script>
import Title from '../atoms/Title.vue'

export default {
    name: 'PlayerStats',
    components: {
        Title
    },
    data: function() {
        return {
            player: [],
            player_data: {}
        }
    },
    mounted() {
        
    }
}
</script>

<style lang="scss" scoped>
    .playerStats {

    }
</style>