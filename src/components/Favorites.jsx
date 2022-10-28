import PokeCard from "./PokeCard";

const Favorites = ({ myPokemon, loading }) => {
    return (
        <div className="favorites">
            {loading ? (
                <center>
                    <h1>Cargando Pokemones...</h1>
                </center>
            ) : (
              myPokemon.map((img, i) => (
                    <PokeCard
                        key={i}
                        img={img.sprites.front_default}
                        name={img.name}
                        type={img.types[0].type.name}
                        ability={img.abilities[0].ability.name}
                        games={img.game_indices[0].version.name}
                        gamesLenght={img.game_indices.length}
                        experience={img.base_experience}
                    />
                ))
            )}
        </div>
    );
};

export default Favorites;
