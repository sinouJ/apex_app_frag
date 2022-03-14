<template>
    <header class="header">
        <Title :title="title"/>
        <router-link to="profile">
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
        title: String
    },
    components: {
        ProfilePic,
        Title
    },
    data: function() {
        return {
            img: 'https://avatarfiles.alphacoders.com/101/101269.jpg'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../sass/helpers/variables';

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: $light;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        box-sizing: border-box;
        padding: 0 2.5%;
    }
</style>
