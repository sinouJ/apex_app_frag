<template>
    <div class="container">
        <HeaderReturn title="PROFILE"/>
        <H3 
            title="Mes jeux"
        />
        <div v-for="game in games.games" :key="game._id">
            <CardGame 
                :title="game.title"
                :light="false"
                :link="`/profile/game/${game._id}`"
            >   
                <template v-slot:main>
                    <p v-if="winner">{{winner}}</p>
                    <p v-else>En cours</p>
                    <p>{{handleDate(game.date)}}</p>
                </template>
            </CardGame>
        </div>
        <div class="bottom-section">
            <router-link v-if="!loading ? user.user_found.roles.includes('ROLE_ADMIN') : null" to="/admin">Admin</router-link>
            <Button @clicked="logout" txt="Déconnexion"/>
        </div>
    </div>
</template>

<script>
// Components
import HeaderReturn from '../../components/HeaderReturn.vue'
import Button from '../../atoms/buttons/Button.vue'
import H3 from '../../atoms/H3.vue'
import CardGame from '../../components/Cards/CardGame.vue'

// Utils
import {FetchData} from '@/utils/fetch'
import cookies from 'js-cookie'

// Dayjs
import dayjs from 'dayjs'
import relativeTime from'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'
dayjs.extend(relativeTime)

// Store
import { mapGetters, useStore } from 'vuex'

export default {
    name: "Profile",
    components: {
        HeaderReturn,
        Button,
        H3,
        CardGame
    },
    data: function() {
        return {
            loading: true,
            user: Object
        }
    },
    async mounted() {
        
        const req = await FetchData.get('user/usernameAuth', { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': cookies.get('token')
        })
        this.user = req
        this.loading = false
    },
    computed: {
        ...mapGetters('games' ,{
            games: 'games'
        })
    },
    setup() {
        const store = useStore()
        store.dispatch('games/GET_GAMES')
    },
    methods: {
        logout: function() {
            cookies.set('token', '')
            this.$router.push('/login')
        },
        handleDate(date) {
            return dayjs(date).locale("fr").fromNow()
        }
    }
}
</script>

<style lang="scss">
    .container {

        h3 {
            margin-bottom: 20px;
        }

        .bottom-section {
            position: absolute;
            bottom: 110px;
            display: flex;
            width: 100%;
            margin-left: -5%;
            align-items: center;
            justify-content: center;
            flex-direction: column;
    
            button {
                margin-top: 20px;
            }
        }
    }
</style>