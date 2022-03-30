<template>
  <div>
    <Header title="Community"/>
    <loader v-if="loading"/>
    <div v-else class="container">
      <card-community title="What's new ?">
        <template v-slot:main>
          <ul>
            <li v-for="feature in features" :key="feature.id">
              <span class="bullet_point"></span>
              <p>{{ feature.message }}</p>
            </li>
          </ul>
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
import Loader from '../../components/Loader.vue'

// Store
import { mapGetters, useStore } from 'vuex'

export default {
  name: "Community",
  components: {
    CardPlayer,
    Loader,
    CardCommunity,
    Header
  },
  data: function() {
    return {
      users: [],
      loading: true
    }
  },
  computed: {
    ...mapGetters('features', {
      features: 'features'
    })
  },
  setup() {
    const store = useStore()
    store.dispatch('features/GET_FEATURES')
  },
  async mounted() {
    const res = await FetchData.get("user/all")
    this.users = res.users
    this.loading = false
  }
}
</script>

<style lang="scss">
@import '../../sass/helpers/variables';

  .cardCommunity {
    margin-bottom: 20px;
    color: $light;

    ul {
      flex-direction: column;

      li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: $light;
          margin-right: 10px;
        }

        p {
          flex: 1;
        }
       
      }
    }
  }

  .card {
    &.player {
      margin-bottom: 10px;
    }
  }
</style>