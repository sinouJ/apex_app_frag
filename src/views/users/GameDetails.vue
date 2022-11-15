<template>
    <div class="game_details">
        <HeaderReturn title="Game"/>
        <Loader v-if="loading"/>
        <div v-else>
            <div v-if="game.status === 404" class="container">
                <p>{{game.message}}</p>
            </div>
            <div v-else-if="game.status === 500" class="container">
                <p>{{game.message}}</p>
            </div>
            <div v-else class="container">
                <p>ROUND {{game.game.rounds.length + 1}}</p>
                <div class="score">
                    <p>{{game.game.players[0].game_username}}</p>
                    <p>{{game.game.players[0].player_score}}</p>
                    <p> - </p>
                    <p>{{game.game.players[1].game_username}}</p>
                    <p>{{game.game.players[1].player_score}}</p>
                </div>
                <div class="update_score">
                    round 1 score
                    <button>Valid score</button>
                </div>
                <div class="finish_game">
                    <button>Finish game</button>
                    <button>Revenge</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderReturn from '../../components/HeaderReturn'
import Loader from '../../components/Loader'

import { mapGetters, useStore } from 'vuex'

export default {
    name: "GameDetails",
    components: {
        HeaderReturn,
        Loader
    },
    data() {
        return {
            id: this.$route.params.id,
            loading: true,
        }
    },
    computed: {
        ...mapGetters('games' ,{
            game: 'game'
        })
    },
    async mounted() {
        const store = useStore()
        await store.dispatch('games/GET_GAME', this.id)
        this.loading = false
    }
}
</script>

<style>

</style>