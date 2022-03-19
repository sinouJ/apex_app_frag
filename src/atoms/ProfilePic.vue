<template>
    <div class="profilePic" :class="cardColorArray[Math.floor(Math.random() * cardColorArray.length)]">
        <img :src="img">
    </div>
</template>

<script>
export default {
    name: "ProfilePic",
    props: {
        img: String
    },
    data: function() {
        return {
            cardColorArray: ['mint', 'blue', 'gray', 'lavender', 'orange']
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/helpers/variables';

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
    }
</style>