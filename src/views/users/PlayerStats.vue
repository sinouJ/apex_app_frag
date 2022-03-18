<template>
    <div class="playerStats container">
        <Header title="Stats"/>
        <div v-if="loading">
            <loader/>
        </div>
        <div v-else>
        </div>
    </div>
</template>

<script>
// Components
import Header from '../../components/Header.vue'
import Loader from '../../components/Loader.vue'

// Utils
import {FetchData} from '@/utils/fetch.js'

export default {
    name: 'PlayerStats',
    components: {
        Loader,
        Header
    },
    data: function() {
        return {
            loading: true,
            player: false,
            player_data: {},
            params: {
                player: {
                    path: 'user/username',
                    game_username: this.$route.params.game_username
                },
                stats: {
                    path: 'stats'
                }
            }
        }
    },
    async mounted({player, stats} = this.params) {
        const req_user = await FetchData.get(player.path, {
            'game_username': player.game_username
        })
        this.player = req_user.user_found

        const req_stats = await FetchData.getapi(stats.path, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'platform': this.player.platform,
            'game_username': this.player.game_username
        })
        this.player_data = req_stats
        this.loading = false
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