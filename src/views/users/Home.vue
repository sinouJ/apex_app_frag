<template>
    <div class="container home">
        <Header title="FRAG"/>
        <card-home :title="current.map" :class="current.code">
            <template v-slot:main>
                <div class="map" >
                    <p><strong>Temps restant :</strong> {{current.remainingTimer}}</p>
                </div>
            </template>
        </card-home>
        <p class="next"><strong>Prochaine :</strong> {{next.map}} à {{next.readableDate_start}}</p>

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
            next: {}
        }
    },
    async mounted() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'type': 'maprotation?version=5'
        }
        const path = 'rotation/'
        const res = await FetchData.getapi(path, headers)
        this.current = res.battle_royale.current
        this.next = res.battle_royale.next
        this.loading = false
    }
}
</script>

<style lang="scss" scoped>
    @import '../../sass/helpers/variables';

    .home {
        .card {
            position: relative;
            height: 160px;
            background-size: cover;
            background-position: center;

            &.storm_point_rotation {
                background-image: url('https://apexlegendsstatus.com/assets/maps/Storm_Point.png');
            }

            &.olympus_rotation {
                background-image: url('https://apexlegendsstatus.com/assets/maps/Olympus.png');
            }

            img {
                position: absolute;
                max-width: 100%;
                max-height: 100%;
            }
            .map {
                p {
                    color: $light;
                    z-index: 1;
                    margin-top: 10px;
                }
            }
        }

        p {
            &.next {
                margin-top: 10px;
            }
        }
    }

   
</style>