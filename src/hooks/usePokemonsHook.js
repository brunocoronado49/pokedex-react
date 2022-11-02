import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../services/api";

export const usePokemonsHook = () => {
    const [result, setResult] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [myPokemon, setMyPokemon] = useState([]);
    const arr = [];

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

export const useSearchPokemon = () => {
    const [pokeResult, setPokeResult] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const handleChange = (evt) => {
        setPokeResult(evt.target.value.toLowerCase());
    };

    const handleSubtmit = (evt) => {
        evt.preventDefault();
        getPokemon();
    };

    const getPokemon = async () => {
        const myArr = [];

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeResult}/`;
            const res = await axios.get(url);
            myArr.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(myArr);
        } catch (err) {
            console.log(err);
        }
    };

    return [handleChange, handleSubtmit, pokemonType, pokemonData];
};
