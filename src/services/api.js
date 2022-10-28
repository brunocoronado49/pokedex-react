import axios from "axios";

export const url = "https://pokeapi.co/api/v2/pokemon?limit=100";

export const getOnePokemon = async (id) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const result = response.data;
        console.log("data", result);

        return result;
    } catch (err) {
        console.log(err);
        return err;
    }
};
