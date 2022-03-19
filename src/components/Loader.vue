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
                'Xaero est en train de loot',
                'Dod nous prépare un peu de frobite',
                'JP_FLACO est train de dire bonjour',
                'Xaero est parti chercher de l\'eau',
                'Nouuns va chercher sa commande Uber eats',
                'Attend que storm point sorte de la rota',
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