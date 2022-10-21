import { createStore } from 'vuex'

// modules
import features from './modules/features'
import games from './modules/games'

export default createStore({
    modules: {
        features,
        games
    }
})