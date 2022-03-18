<template>
    <div class="player_stats">
        <Header title="Stats"/>
        <div v-if="loading">
            <loader/>
        </div>
        <div v-else class="container">
            <card-home class="global_stats" :light="false" :title="player.game_username">
                <template v-slot:main>
                    <div class="level">
                        <p>
                            <span class="bold">Level</span>
                            - {{player_data.global.level}}
                        </p>
                        <div class="xp_progression" :style="xpStyle"></div>
                    </div>
                    <div class="rank_container">
                        <div class="rank">
                            <img :src="player_data.global.rank.rankImg">
                            <p>
                                <span class="bold">BR</span>
                                - {{player_data.global.rank.rankName}} {{player_data.global.rank.rankDiv}}
                            </p>
                            <p>{{player_data.global.rank.rankScore}} RP</p>
                        </div>
                        <div class="arene">
                            <img :src="player_data.global.arena.rankImg">
                            <p>
                                <span class="bold">Arène</span>
                                - {{player_data.global.arena.rankName}} {{player_data.global.arena.rankDiv}}
                            </p>
                            <p>{{player_data.global.arena.rankScore}} RP</p>
                        </div>
                    </div>
                </template>
            </card-home>
        </div>
    </div>
</template>

<script>
// Components
import Header from '../../components/Header.vue'
import Loader from '../../components/Loader.vue'

// Utils
import {FetchData} from '@/utils/fetch.js'
import CardHome from '../../components/Cards/CardHome.vue'

export default {
    name: 'PlayerStats',
    components: {
        Loader,
        Header,
        CardHome
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
    },
    computed: {
        xpStyle() {
            return {
                '--after-width': `${this.player_data.global.toNextLevelPercent}%`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/helpers/variables';

    .player_stats {
        .card {
            &.global_stats {
                color: $dark;
                background-color: $lightgray;

                .level {
                    margin: 20px auto 30px;
                    width: 80%;

                    .xp_progression {
                        background-color: $light;
                        width: 100%;
                        height: 10px;
                        margin-top: 10px;
                        transform: skewX(-15deg);
                        position: relative;

                        &::after {
                            content: "";
                            background-color: $orange;
                            height: 100%;
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: var(--after-width);
                        }
                    }
                }

                .rank_container {
                    display: flex;
                    justify-content: space-between;
                    width: 80%;
                    margin: 0 auto;

                    > div {
                        img {
                            width: 70px;
                            height: 70px;
                            display: block;
                            margin-bottom: 10px;
                        }

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
            }
        }
    }
</style>