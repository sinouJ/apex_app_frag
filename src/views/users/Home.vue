<template>
    <div class="container home">
        <Header title="FRAG"/>
        <card-home :title="current.map" class="map_card" :class="current.code">
            <template v-slot:main>
                <div class="map" >
                    <p><strong>Temps restant :</strong> {{current.remainingTimer}}</p>
                </div>
            </template>
        </card-home>
        <p class="next"><strong>Prochaine :</strong> {{next.map}} à {{next.readableDate_start}}</p>
        <card-home title="Craft rotation" class="craft_card">
            <template v-slot:main>
                <div class="craft_container">
                    <div class="daily">
                        <h3>Daily</h3>
                        <img :src="loading ? 'loading' : craft[0].bundleContent[0].itemType.asset">
                        <img :src="loading ? 'loading' : craft[0].bundleContent[1].itemType.asset">
                    </div>
                    <span class="divider"></span>
                    <div class="hebdo">
                        <h3>Hebdo</h3>
                        <img :src="loading ? 'loading' : craft[1].bundleContent[0].itemType.asset">
                        <img :src="loading ? 'loading' : craft[1].bundleContent[1].itemType.asset">
                    </div>
                </div>
            </template>
        </card-home>
        <card-home title="news" class="news_card" :style="loading ? 'loading' : `background-image: url(${news[0].img})`">
            <template v-slot:main>
                <div class="content">
                    <p>{{loading ? 'Loading...' : news[0].short_desc}}</p>
                    <a v-if="!loading" :href="news[0].link" target="_blank">
                        <p>Voir plus</p>
                        <img src="../../assets/icons/on_arrow_right.svg">
                    </a>
                </div>
            </template>
        </card-home>
        
    </div>
</template>

<script>
// Components
import Header from '../../components/Header.vue'
import CardHome from '../../components/Cards/CardHome.vue'

// Utils
import {FetchData} from '@/utils/fetch'

export default {
    name: "Home",
    components: {
        Header,
        CardHome
    },
    data: function() {
        return {
            loading: true,
            current: Object,
            next: Object,
            craft: Array,
            news: Array
        }
    },
    async mounted() {
        const rotation = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'type': 'maprotation?version=5'
            },
            path: 'rotation/'
        }

        const craft = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'type': 'crafting?version=5'
            },
            path: 'rotation/'
        }

        const news = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'type': 'news?lang=fr-fr'
            },
            path: 'rotation/'
        }
        
        const res_rotation = await FetchData.getapi(rotation.path, rotation.headers)
        const res_craft = await FetchData.getapi(craft.path, craft.headers)
        const res_news = await FetchData.getapi(news.path, news.headers)
        this.current = res_rotation.battle_royale.current
        this.next = res_rotation.battle_royale.next
        this.craft = res_craft
        this.news = res_news
        this.loading = false
    }
}
</script>

<style lang="scss" scoped>
    @import '../../sass/helpers/variables';

    .home {
        .card {
            position: relative;
            min-height: 160px;
            background-size: cover;
            background-position: center;

            &.storm_point_rotation {
                background-image: url('https://apexlegendsstatus.com/assets/maps/Storm_Point.png');
            }

            &.olympus_rotation {
                background-image: url('https://apexlegendsstatus.com/assets/maps/Olympus.png');
            }

            &.kings_canyon_rotation {
                background-image: url('https://apexlegendsstatus.com/assets/maps/Kings_Canyon.png');
            }

            &.map_card {
                img {
                    position: absolute;
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            
            .map {
                p {
                    color: $light;
                    z-index: 1;
                    margin-top: 10px;
                }
            }

            &.craft_card {
                margin-bottom: 20px;

                .craft_container {
                    display: flex;
                    justify-content: space-around;

                    div {
                        display: flex;
                        flex-direction: column;

                        h3 {
                            color: $light;
                        }

                        img {
                            max-height: 48px;
                            max-width: 48px;
                            border-radius: 10px;

                            &:last-child {
                                margin-top: 10px;
                            }
                        }
                    }
                }
            }

            &.news_card {
                background-size: cover;
                background-position: center;

                &::after {
                    content: "";
                    position: absolute;
                    top: 0; right: 0; bottom: 0; left: 0;
                    background-color: black;
                    opacity: 0.6;
                }

                .content {
                    height: 160px;
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: column;

                    a, p {
                        position: relative;
                        z-index: 2;
                    }

                    p {
                        color: $light;
                    }

                    a {
                        display: flex;
                        width: 100%;
                        justify-content: flex-end;
                        align-items: center;

                        p {
                            color: $primary_blue;
                            width: fit-content;
                        }
                    }
                }                
            }
        }

        p {
            &.next {
                margin: 10px 0 20px 0;
            }
        }
    }

   
</style>