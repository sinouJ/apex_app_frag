<template>
    <div class="card">
        <sub-title :title="game_username"/>
        <router-link :to="`/community/stats/${game_username}`">
            <Button txt="See stats"/>
        </router-link>
    </div>
</template>

<script>
import SubTitle from '../atoms/SubTitle.vue'
import Button from '../atoms/Button.vue'

export default {
    name: "CardPlayer",
    components: {
        SubTitle,
        Button
    },
    props: {
        game_username: String
    }
}
</script>

<style lang="scss" scoped>
    .card {
        background-color: #081C72;
        border-radius: 15px;
        padding: 15px 5px;
        box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.49);
        color: white;

        a {
            width: 100%;
        }

        .button {
            margin: 0 auto;
        }
    }
</style>