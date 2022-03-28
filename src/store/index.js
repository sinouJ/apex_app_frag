import { createStore } from 'vuex'

// modules
import features from './modules/features'

export default createStore({
    modules: {
        features
    }
})