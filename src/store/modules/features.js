import features from '../../api/features'

const state = {
    features: [],
}

const getters = {
    features: state => state.features
}

const actions = {
    GET_FEATURES: ({ commit }) => {
        commit('getFeatures', await features.getFeatures(state))
    },
    CREATE_FEATURE: ({ commit }) => {
        commit('postFeature', await features.postFeature(state))
    }
}

const mutations = {
    getFeatures(state, payload) {
        state.features = payload
    },
    postFeature(state, payload) {
        state.features.push(payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}