<template>
    <div class="game_details">

    </div>
</template>

<script>
import { mapGetters, useStore } from 'vuex'

export default {
    name: "GameDetails",
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    computed: {
        ...mapGetters('games' ,{
            game: 'game'
        })
    },
    mounted() {
        const store = useStore()
        store.dispatch('games/GET_GAME', this.id)
    }
}
</script>

<style>

</style>