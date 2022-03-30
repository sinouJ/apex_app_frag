<template>
    <header class="header" :class="shadow ? 'shadow' : null">
        <Title :light="light" :title="title"/>
        <router-link to="/profile">
            <profile-pic :img="img"></profile-pic>
        </router-link>
    </header>
</template>

<script>
import ProfilePic from '../atoms/ProfilePic.vue'
import Title from '../atoms/Title.vue'

export default {
    name: "Header",
    props: {
        title: String,
        light: {
            type: Boolean,
            default: false
        },
        img: {
            type: String,
            default: require('@/assets/icons/white_profile.svg')
        },
    },
    data: function() {
        return {
            shadow: false
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmount () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            window.scrollY > 0 ? this.shadow = true : this.shadow = false
        }
    },
    components: {
        ProfilePic,
        Title
    }
}
</script>

<style lang="scss" scoped>
    @import '../sass/helpers/variables';

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, 0.6);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        box-sizing: border-box;
        padding: 0 2.5%;
        transition: all .3s ease;

        &.shadow {
            box-shadow: $shadow-bottom;
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            backdrop-filter: blur(6px);
        }

        .profilePic {
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
        }

        h1 {
            z-index: 2;
        }
    }
</style>
