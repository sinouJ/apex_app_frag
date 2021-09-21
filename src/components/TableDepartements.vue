<template>
  <table>
      <thead>
          <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Région</th>
          </tr>
      </thead>
      <tfoot v-if="data_departements.length > 0">
            <tr v-for="departement in data_departements" :key="departement.num_dep">
                <td>{{departement.num_dep}}</td>
                <td>{{departement.dep_name}}</td>
                <td>{{departement.region_name}}</td>
            </tr>
      </tfoot>
      <tfoot v-else>
            <tr>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
            </tr>
      </tfoot>
      <tbody>

      </tbody>
  </table>
</template>

<script>
export default {
    name: "Table",
    props: {
        data_departements: Array
    }
}
</script>

<style>

</style>