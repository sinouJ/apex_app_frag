<template>
    <div class="card legend">
        <div class="photo_container" :style="legendImgStyle"></div>
        <div class="stats_container">
            <div class="error" v-if="legendData === null">
                <H3 title="Error while downloading data"></H3>
            </div>
            <div v-else>
                <slot name="stats"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import H3 from '../../atoms/H3.vue'
export default {
    components: { H3 },
    name: "CardLegendStats",
    props: {
        legendImg: {
            type: String,
            default: require('@/assets/dummie.png')
        },
        legendData: {
            type: Object,
            default: null
        }
    },
    computed: {
        legendImgStyle() {
            return {
                'background-image': `url(${this.legendImg})`,
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../../sass/helpers/variables';

    .legend {
        min-height: 350px;
        display: flex;
        padding: 0;
        background-color: $lightgray;

        > div {
            display: flex;
            flex-shrink: 0;

            &:first-child {
                width: 40%;
                background-size: cover;
                background-position: center;
            }

            width: 60%;
            padding: 10px;
        }
    }
</style>