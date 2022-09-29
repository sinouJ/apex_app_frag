// import games from '@/api/games'

const state = {
    games: Array,
    nb_players: Number,
    nb_rounds: Number,
}

const getters = {
    games: state => state.games,
    nb_players: state => state.nb_players,
    nb_rounds: state => state.nb_rounds
}

const actions = {
    UPDATE_NB_PLAYERS: async ({ commit }, payload) => {
        commit('setNbPlayers', payload)
    }
}

const mutations = {
    setNbPlayers(state, payload) {
        state.nb_players = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}