<template>
  <div>
    <Header title="Community"/>
    <div class="container">
      <card-community title="Annonce">
        <template v-slot:main>
          <p>
            Coming soon
          </p>
        </template>
      </card-community>
      <card-player v-for="user in users" :key="user.game_username" :game_username="user.game_username"/>
    </div>
  </div>
</template>

<script>
// Components
import Header from '../../components/Header.vue'
import CardPlayer from '../../components/Cards/CardPlayer.vue'
import CardCommunity from '../../components/Cards/CardCommunity.vue'

// Utils
import {FetchData} from '@/utils/fetch'

export default {
  name: "Community",
  components: {
    CardPlayer,
    CardCommunity,
    Header
  },
  data: function() {
    return {
      users: [],
    }
  },
  async mounted() {
    const res = await FetchData.get("user/all")
    this.users = res.users
  }
}
</script>

<style lang="scss">
@import '../../sass/helpers/variables';

  .cardCommunity {
    margin-bottom: 20px;
    color: $light;
  }
</style>