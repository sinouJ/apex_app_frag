<template>
    <div class="playerStats container">
        <Title :title="loading_user ? 'loading...' : player.game_username"/>
        <div v-if="loading_player_data">
            <p>Loading...</p>
        </div>
        <div v-else>
            <p>Platform:{{player_data.global.platform}}</p>
            <p>Level:{{player_data.global.level}} </p>
            <p>Rank: {{player_data.global.rank.rankName}}</p>
            <p>Rank: {{player_data.global.rank.rankDiv}}</p>
            <p>Rank: {{player_data.global.rank.rankScore}}</p>
        </div>
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
            loading_user: true,
            loading_player_data: true,
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
        this.loading_user = false
        
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
        this.loading_player_data = false
        console.log(this.player_data)
    }
}
</script>

<style lang="scss" scoped>
    .playerStats {
        h1 {
            text-transform: uppercase;
        }
    }
</style>