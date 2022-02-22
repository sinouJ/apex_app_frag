<template>
    <div class="tab">
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

<style lang="scss" scoped>
    @import '../sass/main';

    .tab {
        ul {
            justify-content: center;

            li {
                &:not(first-child) {
                    margin-left: 8px;
                }

                a {
                    width: 100%;
                    background: transparent;
                    padding: 5px 10px;
                    text-align: center;
                    border: 1px solid transparent;
                    box-sizing: border-box;

                    &.router-link-active {
                        border-color: $primary_pink;
                    }
                }
            }
        }
    }
</style>