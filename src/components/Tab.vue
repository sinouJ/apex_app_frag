<template>
    <div>
        <ul>
            <li v-for="tab in tabs" :key="tab.id">
                <router-link :to="'/admin'+tab.path" @click.prevent="clicked">{{tab.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Tab",
    props: {
        tabs: Array
    },
    methods: {
        clicked: function() {
            this.$emit('clicked')
        }
    }
}
</script>

<style>

</style>