import { useState, useEffect } from "react";
import { url } from '../services/api'

export const usePokemonsHook = () => {
    const [result, setResult] = useState([]);
    const [pokemon, setPokemon] = useState([]);
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

    return [result, pokemon];
};
