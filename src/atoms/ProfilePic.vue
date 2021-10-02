<template>
    <div class="profilePic">
        <img :src="img">
    </div>
</template>

<script>
export default {
    name: "ProfilePic",
    props: {
        img: String
    }
}
</script>

<style lang="scss" scoped>
    .profilePic {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: black;
        overflow: hidden;

        img {
            max-width: 100%;
            max-height: 100%;
            display: block;
        }
    }
</style>