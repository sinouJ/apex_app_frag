<template>
  <div class="container">
    <Header title="Community"/>
    <card-player v-for="user in users" :key="user.game_username" :game_username="user.game_username"/>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import CardPlayer from '../../components/Cards/CardPlayer.vue'
import {FetchData} from '@/utils/fetch'

export default {
  name: "Community",
  components: {
    CardPlayer,
    Header
  },
  data: function() {
    return {
      users: []
    }
  },
  async mounted() {
    const res = await FetchData.get("user/all")
    this.users = res.users
  }
}
</script>

<style>

</style>