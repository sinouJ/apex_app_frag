<template>
  <h2>{{title}}</h2>
</template>

<script>
export default {
    name: 'SubTitle',
    props: {
        title: String
    }
}
</script>

<style>
    h2 {
        text-align: center;
        margin: 0 0 15px 0;

    }
</style>