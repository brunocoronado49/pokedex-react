import { useSearchPokemon } from "../hooks/usePokemonsHook";
import "../styles/search.css";

const PokeResult = () => {
    const [handleChange, handleSubtmit, pokemonType, pokemonData] =
        useSearchPokemon();

    return (
        <>
            <form onSubmit={handleSubtmit} className="search-form">
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
                        <div key={index}>
                            <img
                                src={pokemon.sprites["front_default"]}
                                alt={pokemon.name}
                                className="search-image"
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
