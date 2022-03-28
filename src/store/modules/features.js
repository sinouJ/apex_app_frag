import features from '../../api/features'

const state = {
    features: [],
}

const getters = {
    features: state => state.features
}

const actions = {
    GET_FEATURES: async ({ commit }) => {
        commit('getFeatures', await features.getFeatures(state))
    },
    CREATE_FEATURE: async ({ commit }) => {
        commit('postFeature', await features.postFeature(state))
    },
    DELETE_FEATURE: async({ commit }) => {
        commit('deleteFeature', await features.deleteFeature(state))
    },
    UPDATE_FEATURE: async ({ commit }) => {
        commit('putFeature', await features.putFeature(state))
    }
}

const mutations = {
    getFeatures(state, payload) {
        state.features = payload
    },
    postFeature(state, payload) {
        state.features.push(payload)
    },
    deleteFeature(state, payload) {
        state.features = state.features.filter(feature => feature.id !== payload)
    },
    putFeature(state, payload) {
        const index = state.features.findIndex(feature => feature.id === payload.id)
        state.features.splice(index, 1, payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}