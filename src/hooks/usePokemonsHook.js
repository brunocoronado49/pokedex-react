import { useState, useEffect } from "react";
import { url } from "../services/api";

export const usePokemonsHook = () => {
    /// Take the result of API, Save all podemons and Save my pokemons in favourites
    const [result, setResult] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [myPokemon, setMyPokemon] = useState([]);
    const arr = [];

    /// Here, I used two fetch for take the another url with the data
    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) =>
                setResult(
                    data.results.map((item) => {
                        fetch(item.url)
                            .then((res) => res.json())
                            .then((allpokemon) => arr.push(allpokemon));
                        setPokemon(arr);
                    })
                )
            );
    }, []);

    const addToFav = (name) => {
        const res = pokemon.filter((poke) => poke.name == name);
        setMyPokemon([...myPokemon, res[0]]);
        alert("Agregado a favoritos");
    };

    return [result, pokemon, addToFav, myPokemon];
};
