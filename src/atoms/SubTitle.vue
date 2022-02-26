<template>
  <h2 :class="light ? 'light' : 'dark'">{{title}}</h2>
</template>

<script>
export default {
    name: 'SubTitle',
    props: {
        title: String,
        light: Boolean
    }
}
</script>

<style lang="scss">
    @import '../sass/helpers/variables';

    h2 {
        font-family: 'Rubik Mono One', sans-serif;
        text-transform: uppercase;
        font-size: 20px;
        margin: 0;

        &.dark {
            color: $bg_dark;
        }

        &.light {
            color: $light;
        }
    }
</style>