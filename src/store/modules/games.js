import { createGame, getGames } from '../../api/games'

const state = {
    games: Array,
    nb_players: Number,
    game: Object,
    game_response: Object,
}

const getters = {
    games: state => state.games,
    nb_players: state => state.nb_players,
    nb_rounds: state => state.nb_rounds
}

const actions = {
    GET_GAMES: async ({ commit }) => {
        commit('getGames', await getGames(state))
    },
    CREATE_GAME: async ({ commit }, payload) => {
        await commit('storeGame', payload)
        await commit('postGame')
        if (state.game_response.status === 201) {
            await commit('resetStore')
        }
    },
    UPDATE_NB_PLAYERS: async ({ commit }, payload) => {
        commit('setNbPlayers', payload)
    }
}

const mutations = {
    setNbPlayers(state, payload) {
        state.nb_players = payload
    },
    async getGames(state, payload) {
        state.games = payload
    },
    postGame: async (state) => {
        const newGame = await createGame(state.game)
        state.game_response = newGame
    },
    storeGame(state, payload) {
        state.game = payload
    },
    resetStore(state) {
        state.game = {}
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}