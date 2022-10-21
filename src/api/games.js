import { FetchData } from "../utils/fetch";

export const getGames = async () => {
    const response = await FetchData.get("/games");
    return response;
}

export const getGame = async (id) => {
    const response = await FetchData.get(`/games/${id}`);
    return response;
}

export const createGame = async (payload) => {
    const { title, nb_players, nb_rounds, first_player, second_player, third_player } = payload;
    const response = await FetchData.post("/minigames", {
        title,
        nb_players,
        nb_rounds,
        first_player,
        second_player,
        third_player: third_player || null,
    });
    return response;
}