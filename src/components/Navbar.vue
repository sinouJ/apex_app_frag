<template>
  <nav>
      <div class="leftcontent">
          <ul>
            <li>
                <router-link to="/">
                    <img src="../assets/icons/on_home.svg">
                </router-link>
            </li>
            <li>
                <router-link to="/community">
                    <img src="../assets/icons/white_3_user.svg">
                </router-link>
            </li>
            <li>
                <router-link to="/departements">
                    <img src="../assets/icons/white_paper.svg">
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
        bottom: 0;
        background-color: $dark;
        border-top: 1px solid #636071;

        ul {
            padding-bottom: 10px;

            img {
                display: block;
                width: 36px;
                height: 36px;
            }
        }

        
    }
</style>