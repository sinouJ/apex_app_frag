<template>
  <div>
    <Header title="Community"/>
    <loader v-if="loading"/>
    <div v-else class="container">
      <card-player v-for="user in users" :key="user.game_username" :game_username="user.game_username"/>
    </div>
  </div>
</template>

<script>

// Components
import Header from '../../components/Header.vue'
import CardPlayer from '../../components/Cards/CardPlayer.vue'

// Utils
import {FetchData} from '@/utils/fetch'
import Loader from '../../components/Loader.vue'

export default {
  name: "Community",
  components: {
    CardPlayer,
    Header,
    Loader
  },
  data: function() {
    return {
      users: [],
      loading: true
    }
  },
  async mounted() {
    const res = await FetchData.get("user/all")
    this.users = res.users
    this.loading = false
  }
}
</script>

<style>

</style>