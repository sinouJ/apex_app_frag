<template>
  <div class="playerStats container">
      <Title :title="loading ? 'loading...' : player.game_username"/>
      <p> {{player.platform ? player.platform : 'err'}} </p>
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
            loading: true,
            player: false,
            player_data: {}
        }
    },
    async mounted() {
        const url_user = 'http://localhost:2222/api/user/id'
        const req_user = await fetch(url_user, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                id: this.$route.params.id
            }
        })
        const res_user = await req_user.json()
        this.player = res_user
        this.loading = false
        console.log(this.player)
        
        const url_player_data = 'http://localhost:2222/api/stats'
        const req_player_data = await fetch(url_player_data, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'game_username': this.player.game_username,
                'platform': this.player.platform
            }
        })
        const res_player_data = await req_player_data.json()
        this.player_data = res_player_data
        console.log(this.player_data.global.arena)
    }
}
</script>

<style lang="scss" scoped>
    .playerStats {

    }
</style>