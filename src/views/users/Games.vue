<template>
    <div class="games">
        <Header title="games"/>
        <div class="container">
            <card-game 
                title="Kill run" 
                class="game" 
                :light="light"
                link="/games/game/killrun"
            >
                <template v-slot:main>
                    <div class="content">
                        <p>Le joueur qui fait le plus de frag lors d'une game remporte la manche</p>
                        <span>
                            <img src="../../assets/icons/on_play.svg">
                        </span>
                    </div>
                </template>
            </card-game>
        </div>
    </div>
</template>

<script>
import CardGame from '@/components/Cards/CardGame.vue'
import Header from '@/components/Header.vue'

export default {
    name: "Games",
    components: {
        CardGame,
        Header,
    },
    data() {
        return {
            light: false
        }
    }

}
</script>

<style lang="scss">
    @import '../../sass/helpers/variables';
    
    .games {
        .container {
            .game {
                background-color: $lightgray;

                .content {
                    display: flex;
                    align-items: center;

                    span {
                        width: 30px;
                        height: 30px;

                        img {
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
</style>