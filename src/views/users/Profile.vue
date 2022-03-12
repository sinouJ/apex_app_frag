<template>
    <div class="container">
        <Header title="PROFILE"/>
        <router-link v-if="!loading ? user.user_found.roles.includes('ROLE_ADMIN') : null" to="/admin">Admin</router-link>
        <div class="coming">
            <h2>Coming soon</h2>
        </div>
    </div>
</template>

<script>
// Components
import Header from '../../components/Header.vue'

// Utils
import {FetchData} from '@/utils/fetch'
import cookies from 'js-cookie'

export default {
    name: "Profile",
    components: {
        Header
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
    }
}
</script>

<style>
    .coming {
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>