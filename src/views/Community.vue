<template>
  <div class="container">
    <Header title="Community"/>
    <card-player v-for="user in users" :key="user.game_username" :game_username="user.game_username"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import CardPlayer from '../components/CardPlayer.vue'

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
    const url = process.env.NODE == 'develoment' ? 'http://localhost:2222/api/user/all' : 'https://api-apex-frag.herokuapp.com/api/user/all'

    const req = await fetch(url)

    const res = await req.json()

    this.users = res
  }
}
</script>

<style>

</style>