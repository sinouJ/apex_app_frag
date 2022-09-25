<template>
    <router-link to="/games/game/killrun" class="card">
        <div>
            <sub-title :title="title" :light="light"/>
            <slot name="main"></slot>
        </div>
    </router-link>
</template>

<script>
import SubTitle from '../../atoms/SubTitle.vue'

export default {
    name: 'CardGame',
    components: {
        SubTitle
    },
    props: {
        title: String,
        light: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss">
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
        background-color: $lightgray;

        h2 {
            margin-bottom: 10px;
        }
    }
</style>