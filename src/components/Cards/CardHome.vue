<template>
    <div class="card">
        <sub-title :title="title" :light="light"/>
        <slot name="main"></slot>
    </div>
</template>

<script>
import SubTitle from '../../atoms/SubTitle.vue'

export default {
    name: 'CardHome',
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
    @import '@/sass/helpers/variables';

    .card {
        padding: 10px;
        background-color: $dark;
        border-radius: 10px;
        overflow: hidden;
    }
</style>