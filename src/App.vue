<template>
  <Title title="Leaderboard"/>
  <table-departements :data_departements="data_departements" />
</template>

<script>
import Title from './atoms/Title'
import TableDepartements from './components/TableDepartements.vue'
import './sass/main.scss'
const url = 'http://localhost:2222/api/departements'

export default {
  name: 'App',
  components: {
    Title,
    TableDepartements
  },
  data: function() {
    return {
      data_departements: []
    }
  },
  async mounted() {
    console.log(this.data_departements)
    const res = await fetch(url)
    const fetched_data = await res.json()
    this.data_departements = fetched_data
    console.log(this.data_departements)
  }
}
</script>

<style>
</style>
