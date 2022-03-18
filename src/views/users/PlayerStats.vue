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
                            - {{global.level}}
                        </p>
                        <div class="xp_progression" :style="xpStyle"></div>
                    </div>
                    <div class="rank_container">
                        <div class="rank">
                            <img :src="global.rank.rankImg">
                            <p>
                                <span class="bold">BR</span>
                                - {{global.rank.rankName}} {{global.rank.rankDiv}}
                            </p>
                            <p>{{global.rank.rankScore}} RP</p>
                        </div>
                        <div class="arene">
                            <img :src="global.arena.rankImg">
                            <p>
                                <span class="bold">Arène</span>
                                - {{global.arena.rankName}} {{global.arena.rankDiv}}
                            </p>
                            <p>{{global.arena.rankScore}} RP</p>
                        </div>
                    </div>
                </template>
            </card-home>
            <card-legend-stats :legendImg="require(`../../assets/legends/${selected.LegendName.toLowerCase()}.webp`)" :legendData="selected">
                <template v-slot:stats>
                    <div class="card_content">
                        <div class="name_block">
                            <sub-title :title="selected.LegendName" :light="false"/>
                        </div>
                        <div>
                            <div class="stat_block" v-for="stat in selected.data" :key="stat.key">
                                <p>{{stat.name}}</p>
                                <H3 :title="stat.value.toString()" :light="false"/>
                            </div>
                        </div>
                    </div>
                </template>
            </card-legend-stats>
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
import CardLegendStats from '../../components/Cards/CardLegendStats.vue'
import H3 from '../../atoms/H3.vue'
import SubTitle from '../../atoms/SubTitle.vue'

export default {
    name: 'PlayerStats',
    components: {
        Loader,
        Header,
        CardHome,
        CardLegendStats,
        H3,
        SubTitle
    },
    data: function() {
        return {
            loading: true,
            player: false,
            global: {},
            selected: {},
            all_legends: {},
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
        this.global = req_stats.global
        this.selected = req_stats.legends.selected
        this.all_legends = req_stats.legends.all
        this.loading = false
    },
    computed: {
        xpStyle() {
            return {
                '--after-width': `${this.global.toNextLevelPercent}%`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/helpers/variables';

    .player_stats {
        .card {
            margin-bottom: 20px;

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

            &.legend {
                .stats_container {

                    .card_content {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 100%;
                    }

                    .stat_block {
                        margin-bottom: 30px;
    
                        p {
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
</style>