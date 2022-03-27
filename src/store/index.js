import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// modules
import features from './modules/features'

export default new Vuex.Store({
    modules: {
        features
    }
})