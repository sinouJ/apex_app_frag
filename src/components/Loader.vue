<template>
    <div class="loading-container">
        <ping-pong size="80px"/>
        <p>Loading</p>
    </div>
</template>

<script>
import {PingPong} from 'vue-loading-spinner'

export default {
    name: 'Loader',
    components: {
        PingPong
    }
}
</script>

<style lang="scss">
    .loading-container {
        height: calc(100vh - 78px - 94px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .spinner {
            height: 80px;
            width: 80px;
        }
    }
</style>