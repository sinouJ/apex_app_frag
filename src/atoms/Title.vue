<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
    name: "Title",
    props: {
        title: String
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
h1 {
  font-family: 'Rubik Mono One', sans-serif;
}
</style>