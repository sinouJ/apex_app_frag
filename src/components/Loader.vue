<template>
    <div class="loading-container">
        <ping-pong size="80px"/>
        <p>{{loadingSentenceArray[Math.floor(Math.random() * loadingSentenceArray.length)]}}</p>
    </div>
</template>

<script>
import {PingPong} from 'vue-loading-spinner'

export default {
    name: 'Loader',
    components: {
        PingPong
    },
    data: function() {
        return{
            loadingSentenceArray: [
                'Attends Xaero est en train de rouler',
                'Barbusson construit une maison',
                'Nouuns est en train de push une team solo',
                'Xaero est en train de loot',
                'Dod nous prépare un peu de frobite',
            ]
        }
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