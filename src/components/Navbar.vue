<template>
  <nav>
      <div class="leftcontent">
          <ul>
            <li>
                <router-link to="/home">
                    <home/>
                </router-link>
            </li>
            <li>
                <router-link to="/community">
                    <people/>
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
export default {
    name: "Navbar",
    components: {
        Home,
        People
    }
}
</script>

<style lang="scss" scoped>
    nav {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #1e1f2c;
        border: 1px solid #636071;
        border-bottom: 0;
        border-top-left-radius: 35px;
        border-top-right-radius: 35px;
        box-sizing: border-box;

        .ion {
            font-size: 1.75rem;
            display: flex;
            justify-content: center;
            fill: white;
            padding: 10px 0;
        }
    }
</style>