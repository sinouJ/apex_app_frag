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
        margin-bottom: 30px;
        
        ul {
            justify-content: flex-start;
            overflow-y: scroll;
            margin: 0;
            border-bottom: 1px solid $lightgray;

            li {
                &:not(first-child) {
                    margin-left: 8px;
                }

                a {
                    width: max-content;
                    background: transparent;
                    padding: 5px 10px;
                    text-align: center;
                    border-bottom: 2px solid transparent;
                    box-sizing: border-box;

                    &.router-link-active {
                        border: 0;
                        border-bottom: 2px solid $primary_blue;
                    }
                }
            }
        }
    }
</style>