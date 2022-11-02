import { useState } from "react";
import axios from "axios";
import "../styles/search.css";

const PokeResult = () => {
    const [pokeResult, setPokeResult] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const handleChange = (evt) => {
        setPokeResult(evt.target.value.toLowerCase());
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getPokemon();
    };

    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeResult}/`;
            const result = await axios.get(url);
            toArray.push(result.data);
            setPokemonType(result.data.types[0].type.name);
            setPokemonData(toArray);
        } catch (err) {
            console.log(err.message);
        }
    };

    console.log(pokemonData);

    return (
        <>
            <form onSubmit={handleSubmit} className="search-form">
                <h2 className="search-label">Busca un pokemon</h2>
                <input
                    onChange={handleChange}
                    type="text"
                    className="search-input"
                    placeholder="Buscar..."
                />
                <button className="search-btn" type="submit">
                    Buscar
                </button>
            </form>
            <div className="pokeon-result">
                {pokemonData.map((pokemon, index) => {
                    return (
                        <div className="container" key={index}>
                            <img
                                src={pokemon.sprites["front_default"]}
                                alt={pokemon.name}
                            />
                            <h2>{pokemon.name}</h2>
                            <h3>{pokemonType}</h3>
                            <h3>Batallas: {pokemon.game_indices.length}</h3>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default PokeResult;
