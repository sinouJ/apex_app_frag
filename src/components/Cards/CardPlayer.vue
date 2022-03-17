<template>
    <router-link class="card" :class="cardColorArray[Math.floor(Math.random() * cardColorArray.length)]" :to="`/community/stats/${game_username}`">
        <sub-title :title="game_username"/>
        <span>
            <img src="../../assets/icons/on_arrow_right_circle.svg">
        </span>
    </router-link>
</template>

<script>
import SubTitle from '../../atoms/SubTitle.vue'

export default {
    name: "CardPlayer",
    components: {
        SubTitle,
    },
    props: {
        game_username: String,
    },
    data: function() {
        return{
            cardColorArray: ['mint', 'blue', 'gray', 'lavender', 'orange']
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/helpers/variables';

    .card {
        border-radius: 15px;
        padding: 15px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        color: white;
        
        &.gray {
            background-color: $lightgray;
        }
        &.blue {
            background-color: $blue;
        }
        &.orange {
            background-color: $orange;
        }
        &.lavender {
            background-color: $lavender;
        }
        &.mint {
            background-color: $mint;
        }

        span {
            width: 30px;
            height: 30px;

            img {
                width: 100%;
                height: 100%;
                display: block;
                margin: 0;
            }
        }
    }
</style>