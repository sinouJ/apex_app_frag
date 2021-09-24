<template>
  <Title title="Leaderboard"/>
  <table-departements :data_departements="data_departements" />
</template>

<script>
import Title from './atoms/Title'
import TableDepartements from './components/TableDepartements.vue'
import './sass/main.scss'
const url = process.env.NODE_ENV == 'development' ? 'http://localhost:2222/api/departements' : 'https://api-apex-frag.herokuapp.com/api/departements'

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

    console.log(process.env)
  }
}
</script>

<style>
</style>
