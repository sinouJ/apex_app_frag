<template>
    <div>
        <Header title="FRAG"/>
        <Loader v-if="loading"/>
        <div v-else class="container home">
            <p class="welcome_line">Bonjour, {{username}}</p>
            <card-home :title="current.map" class="map_card" :class="current.code">
                <template v-slot:main>
                    <div class="map" >
                        <p><strong>Temps restant :</strong> {{current.timer}}</p>
                    </div>
                </template>
            </card-home>
            <p class="next"><strong>Prochaine :</strong> {{next.map}} à {{next.nextMapDate}}</p>
            <card-home title="Craft rotation" class="craft_card">
                <template v-slot:main>
                    <div class="craft_container">
                        <div class="daily">
                            <h3>Daily</h3>
                            <img :src="craft[0].bundleContent[0].itemType.asset">
                            <img :src="craft[0].bundleContent[1].itemType.asset">
                        </div>
                        <span class="divider"></span>
                        <div class="hebdo">
                            <h3>Hebdo</h3>
                            <img :src="craft[1].bundleContent[0].itemType.asset">
                            <img :src="craft[1].bundleContent[1].itemType.asset">
                        </div>
                    </div>
                </template>
            </card-home>
            <card-home title="news" class="news_card" :style="`background-image: url(${news[0].img})`">
                <template v-slot:main>
                    <div class="content">
                        <p>{{news[0].short_desc}}</p>
                        <a :href="news[0].link" target="_blank">
                            <p>Voir plus</p>
                            <img src="../../assets/icons/on_arrow_right.svg">
                        </a>
                    </div>
                </template>
            </card-home>
        </div>
    </div>
    
</template>

<script>
// Components
import Header from '../../components/Header.vue'
import CardHome from '../../components/Cards/CardHome.vue'
import Loader from '../../components/Loader.vue'

// Utils
import {FetchData} from '@/utils/fetch'

// External
import Cookies from 'js-cookie'

// dayjs
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

export default {
    name: "Home",
    components: {
        Header,
        CardHome,
        Loader
    },
    data: function() {
        return {
            loading: true,
            headers: {
                rotation: {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'type': 'maprotation'
                    },
                    path: 'rotation/'
                },
                craft: {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'type': 'crafting'
                    },
                    path: 'craft/'
                },
                news: {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'type': 'news'
                    },
                    path: 'news/'
                }
            },
            current: Object,
            next: Object,
            craft: Array,
            news: Array,
            username: String
        }
    },
    methods: {
        timer: function (self) {
            let timer
            let hours
            let minutes
            let seconds

            const getTimeRemaining = (dateEnd) => {
                const t = Date.parse(dayjs(dateEnd).utc(true)) - Date.parse(dayjs().utc()) 
                
                return {
                    total: t,
                    hours: Math.floor((t / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((t / 1000 / 60) % 60),
                    seconds: Math.floor((t / 1000) % 60),
                };
            }
            
            const updateTimer = function() {
                const t = getTimeRemaining(self.current.readableDate_end)
            
                hours = t.hours
                minutes = t.minutes
                seconds = t.seconds
            
                hours = hours < 10 ? `0${hours}` : hours
                minutes = minutes < 10 ? `0${minutes}` : minutes
                seconds = seconds < 10 ? `0${seconds}` : seconds
            
                if (t.total <= 0) {
                    clearInterval(timer)
                }

                self.current.timer = `${hours}:${minutes}:${seconds}`
            };
            
            updateTimer()
            setInterval(updateTimer, 1000)
        }
    },
    async mounted() {
        // Fetch data api
        const res_rotation = await FetchData.getapi(this.headers.rotation.path, this.headers.rotation.headers)
        const res_craft = await FetchData.getapi(this.headers.craft.path, this.headers.craft.headers)
        const res_news = await FetchData.getapi(this.headers.news.path, this.headers.news.headers)
        this.current = res_rotation.content.current
        this.next = res_rotation.content.next
        this.craft = res_craft.content
        this.news = res_news.content

        console.log(res_rotation)

        // User
        const token = Cookies.get('token')
        const res_user = await FetchData.getapi('user/usernameAuth', {
            authorization: token
        })
        this.username = res_user.user_found.game_username

        // Convert date
        const nextMapDate = dayjs(this.next.readableDate_start).utc(true)
        const hours = nextMapDate.$d.getHours() < 10 ? `0${nextMapDate.$d.getHours()}` : nextMapDate.$d.getHours()
        const minutes = nextMapDate.$d.getMinutes() < 10 ? `0${nextMapDate.$d.getMinutes()}` : nextMapDate.$d.getMinutes()
        this.next.nextMapDate = `${hours}:${minutes}:00`

        // init
        this.loading = false
        this.timer(this)
    }
}
</script>

<style lang="scss" scoped>
    @import '../../sass/helpers/variables';

    .home {
        .welcome_line {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }

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

            &.worlds_edge_rotation {
                background-image: url('https://apexlegendsstatus.com/assets/maps/Worlds_Edge.png');
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