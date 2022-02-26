<template>
  <h1 :class="light ? 'light' : 'dark'">{{title}}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    light: Boolean
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
@import '../sass/helpers/variables';

h1 {
  font-family: 'Rubik Mono One', sans-serif;
  text-transform: uppercase;
  font-size: 36px;

  &.dark {
    color: $bg_dark;
  }

  &.light {
    color: $light;
  }
}
</style>