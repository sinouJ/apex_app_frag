import features from '../../api/features'

const state = {
    content: String,
    features: Array,
}

const getters = {
    features: state => state.features
}

const actions = {
    GET_FEATURES: async ({ commit }) => {
        commit('getFeatures', await features.getFeatures(state))
    },
    CREATE_FEATURE: async ({ commit }) => {
        commit('postFeature')
        commit('resetStore')
    },
    DELETE_FEATURE: async({ commit }, id) => {
        commit('deleteFeature', id)
    },
    UPDATE_FEATURE: async ({ commit }) => {
        commit('putFeature', await features.putFeature(state))
    },
    STORE_CONTENT: async ({ commit }, payload) => {
        commit('storeContent', payload)
    }
}

const mutations = {
    getFeatures(state, payload) {
        state.features = payload
    },
    postFeature: async (state) => {
        const newFeature = await features.postFeature(state.content)
        state.features.push(newFeature)
    },
    deleteFeature: async (state, id) => {
        await features.deleteFeature(id)
        state.features = state.features.filter(feature => feature.id !== id)
    },
    putFeature(state, payload) {
        const index = state.features.findIndex(feature => feature.id === payload.id)
        state.features.splice(index, 1, payload)
    },
    storeContent(state, payload) {
        state.content = payload
    },
    resetStore(state) {
        state.content = ''
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}