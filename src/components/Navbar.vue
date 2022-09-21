<template>
  <nav>
      <div class="leftcontent">
          <ul>
            <li>
                <router-link to="/">
                    <img class="active" src="../assets/icons/on_home.svg">
                    <img class="inactive" src="../assets/icons/off_home.svg">
                </router-link>
            </li>
            <li>
                <router-link to="/community">
                    <img class="active" src="../assets/icons/on_3_user.svg">
                    <img class="inactive" src="../assets/icons/off_3_user.svg">
                </router-link>
            </li>
            <li>
                <router-link to="/games">
                    <img class="active" src="../assets/icons/on_play.svg">
                    <img class="inactive" src="../assets/icons/off_play.svg">
                </router-link>
            </li>
          </ul>
      </div>
      <div class="rightcontent">

      </div>
  </nav>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style lang="scss" scoped>
    @import '../sass/helpers/variables';
    nav {
        width: 100%;
        position: fixed;
        z-index: 999;
        bottom: 0;
        background-color: $light;
        box-shadow: $shadow_top;

        ul {
            padding-bottom: 10px;

            a {
                &.router-link-active {
                    .active {
                        display: block;
                    }
                    .inactive {
                        display: none;
                    }
                }

                img {
                    width: 36px;
                    height: 36px;

                    &.active {
                        display: none;
                    }
                }
            }

            
        }

        
    }
</style>