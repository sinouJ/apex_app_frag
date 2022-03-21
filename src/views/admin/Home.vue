<template>
    <div>
        <vue-notification-list position="top-left"></vue-notification-list>
        <div class="home container">
            <Header title="Dashboard"/>
            <Tab :tabs="tabs"/>
            <router-view/>
        </div>
    </div>
</template>

<script>
import Tab from '../../components/Tab.vue'
import Header from '../../components/Header.vue'

export default {
    name: 'AdminHome',
    components: {
        Tab,
        Header
    },
    data: function() {
        return {
            tabs: [
                {
                    id: 'authUsers',
                    name: 'Authorized users',
                    path: '/users/auth'
                },
                {
                    id: 'registeredUsers',
                    name: 'Users',
                    path: '/users'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>