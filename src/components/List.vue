<template>
    <div class="list">
        <ul>
            <li v-for="feature in features" :key="feature.id">
                <p>{{ feature.message }}</p>
                <div class="action">
                    <button class="btn btn-primary" @click="editFeature(feature)">
                        <img src="../assets/icons/white_filter.svg"/>
                    </button>
                    <button class="btn btn-danger" @click="deleteFeature(feature.id)">
                        <img src="../assets/icons/white_delete.svg"/>
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, useStore } from 'vuex'

export default {
    name: 'List',
    methods: {
        editFeature: function(feature) {
            this.$router.push({
                name: 'AdminEditFeature',
                params: {
                    id: feature.id
                }
            });
        },
        deleteFeature: function(id) {
            this.$store.dispatch('features/DELETE_FEATURE', id);
        }
    },
    computed: {
        ...mapGetters( 'features', {
            features: 'features'
        })
    },
    setup() {
        const store = useStore()
        store.dispatch('features/GET_FEATURES');
    }
}
</script>

<style lang="scss">
    @import '../sass/helpers/variables';

    .list {
        
        ul {
            display: flex;
            flex-direction: column;
            margin-top: -20px;

            li {
                display: flex;
                align-items: center;
                padding: 10px 0;

                &:not(:last-child) {
                    border-bottom: 1px solid $lightgray;
                }

                p {
                    flex: 1;
                    margin-right: 20px;
                }

                .btn {
                    border: 0;
                    border-radius: 5px;
                    padding: 5px;

                    &:not(:last-child) {
                        margin-right: 10px;
                    }

                    &-danger {
                        background-color: $red;
                    }

                    &-primary {
                        background-color: $primary-blue;
                    }
                }
            }
        }
    }
</style>