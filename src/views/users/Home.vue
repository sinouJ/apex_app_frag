<template>
    <div class="container">
        <Header title="FRAG"/>
        <router-link to="/admin">Admin</router-link>
        <table-departements :data_departements="data_departements" />
    </div>
</template>

<script>
import TableDepartements from '../../components/Table/TableDepartements.vue'
import Header from '../../components/Header.vue'

const url2 = process.env.NODE_ENV == 'development' ? 'http://localhost:2222/api/departements' : 'https://api-apex-frag.herokuapp.com/api/departements'

export default {
    name: "Home",
    components: {
        TableDepartements,
        Header
    },
    data: function() {
        return {
            data_departements: []
        }
    },
    async mounted() {
        const req = await fetch(url2)
        const res = await req.json()
        this.data_departements = res
    }
}
</script>

<style>

</style>