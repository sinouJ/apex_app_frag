<template>
    <div class="card">
        <sub-title :title="title" :light="true"/>
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
        title: String
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