<template>
    <div class="container">
        <Header title="PROFILE"/>
        <router-link v-if="/*user.role.contains('ROLE_ADMIN')*/ null" to="/admin">Admin</router-link>
        <div class="coming">
            <h2>Coming soon</h2>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
//import {FetchData} from '@/utils/fetch'

export default {
    name: "Profile",
    components: {
        Header
    },
    data: function() {
        return {
        }
    },
    async mounted() {
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