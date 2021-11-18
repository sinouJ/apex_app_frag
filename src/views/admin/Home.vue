<template>
    <div class="home">
        <h1>AdminHome</h1>,
        <Tab :tabs="tabs"/>
        <router-view/>
    </div>
</template>

<script>
import Tab from '../../components/Tab.vue'

export default {
    name: 'AdminHome',
    components: {
        Tab
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