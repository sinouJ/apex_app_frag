<template>
    <div>
        <Header title="Board"/>
        <div class="container">
            <table-departements :data_departements="data_departements" />
        </div>
    </div>
</template>

<script>
import TableDepartements from '../../components/Table/TableDepartements.vue'
import Header from '../../components/Header.vue'
import {FetchData} from '@/utils/fetch'

export default {
    name: "Departements",
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
        const res = await FetchData.get('departements')
        this.data_departements = res
    }
}
</script>

<style>

</style>