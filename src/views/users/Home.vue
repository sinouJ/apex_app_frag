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
            current: {},
            next: {},
            craft: {}
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
        
        const res_rotation = await FetchData.getapi(rotation.path, rotation.headers)
        const res_craft = await FetchData.getapi(craft.path, craft.headers)
        this.current = res_rotation.battle_royale.current
        this.next = res_rotation.battle_royale.next
        this.craft = res_craft
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
        }

        p {
            &.next {
                margin: 10px 0 20px 0;
            }
        }
    }

   
</style>