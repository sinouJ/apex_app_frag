<template>
  <nav>
      <div class="leftcontent">
          <ul>
              <li>
                  <home/>
                  <p>Home</p>
              </li>
              <li>
                  <people/>
                  <p>Community</p>
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
        border-top: 1px solid #636071;

        .ion {
            font-size: 1.75rem;
            display: flex;
            justify-content: center;
            fill: white;
        }
    }
</style>