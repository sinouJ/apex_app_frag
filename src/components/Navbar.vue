<template>
  <nav>
      <div class="leftcontent">
          <ul>
            <li>
                <router-link to="/">
                    <home/>
                </router-link>
            </li>
            <li>
                <router-link to="/community">
                    <people/>
                </router-link>
            </li>
            <li>
                <router-link to="departements">
                    <list/>
                </router-link>
            </li>
          </ul>
      </div>
      <div class="rightcontent">

      </div>
  </nav>
</template>

<script>
import Home from 'vue-ionicons/dist/ios-home.vue'
import People from 'vue-ionicons/dist/ios-people.vue'
import List from 'vue-ionicons/dist/ios-list.vue'

export default {
    name: "Navbar",
    components: {
        Home,
        People,
        List
    }
}
</script>

<style lang="scss" scoped>
    nav {
        width: 95%;
        position: fixed;
        bottom: 15px;
        left: 2.5%;
        background-color: rgba(8, 28, 114, 0.9);
        border: 1px solid #636071;
        border-radius: 35px;
        box-sizing: border-box;
        box-shadow: 0px 0px 48px 0px rgba(8, 28, 114,0.80);

        .ion {
            font-size: 1.75rem;
            display: flex;
            justify-content: center;
            fill: white;
            padding: 10px 0;
        }
    }
</style>