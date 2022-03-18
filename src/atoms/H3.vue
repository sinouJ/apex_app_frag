<template>
  <h3 :class="light ? 'light' : 'dark'">{{title}}</h3>
</template>

<script>
export default {
    name: 'H3',
    props: {
        title: String,
        light: Boolean
    }
}
</script>

<style lang="scss">
    @import '../sass/helpers/variables';

    h3 {
        font-family: 'Rubik Mono One', sans-serif;
        text-transform: uppercase;
        font-size: 18px;
        margin: 0;
        position: relative;
        z-index: 2;

        &.dark {
            color: $bg_dark;
        }

        &.light {
            color: $light;
        }
    }
</style>