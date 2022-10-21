<template>
    <div class="game">
        <header-return :title="title" />
        <div class="container">
            <FormKit type="form" submit-label="Play" @submit="createGame">
                <number
                    label="Nombre de joueurs"
                    :step="1"
                    :min="2"
                    :max="3"
                    :initialValue="2"
                    v-model="nb_players"
                    @update="update"
                    name="nb_players"
                />
                <number
                    label="Nombre de rounds"
                    :step="1"
                    :min="1"
                    :max="10"
                    :initialValue="1"
                    name="nb_rounds"
                />
                <Text
                    label="1er joueur"
                    name="first_player"
                    placeholder="Premier joueur..."
                />
                <Text
                    label="2ème joueur"
                    name="second_player"
                    placeholder="Deuxième joueur..."
                />
                <Text
                    label="3ème joueur"
                    name="third_player"
                    placeholder="Troisième joueur..."
                    v-if="nb_players === 3"
                />
            </FormKit>
        </div>
    </div>
    
</template>

<script>
import Number from '../../atoms/forms/Number.vue';
import HeaderReturn from '../HeaderReturn.vue';
import Text from '../../atoms/forms/Text.vue';

import { mapGetters } from 'vuex';

export default {
    name: "GameForm",
    data() {
        return {
            title: 'frag run',
        }
    },
    components: {
        Number,
        HeaderReturn,
        Text
    },
    methods: {
        update(nb) {
            this.$store.dispatch('games/UPDATE_NB_PLAYERS', nb);
        },
        createGame(payload) {
            payload.title = 'Kill run'
            this.$store.dispatch('games/CREATE_GAME', payload);
        }
    },
    computed: {
        ...mapGetters('games', {
            nb_players: 'nb_players'
        })
    }
}
</script>

<style>

</style>