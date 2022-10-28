import { useState, useEffect } from "react";
import { url } from "../services/api";

export const usePokemonsHook = () => {
    const [result, setResult] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [myPokemon, setMyPokemon] = useState([]);
    const arr = [];
    const newArray = [];

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
        const res = pokemon.filter((poke) => poke.name === name);
        newArray.push(res[0]);
        setMyPokemon(newArray);
        alert("Agregado a favoritos")
    };

    return [result, pokemon, addToFav, myPokemon];
};
