import PokeCard from "./PokeCard";

const Home = ({ pokemon, loading, addToFav }) => {
    return (
        <div className="home">
            {loading ? (
                <center>
                    <h1>Cargando Pokemones...</h1>
                </center>
            ) : (
                pokemon.map((img, i) => (
                    <PokeCard
                        key={i}
                        img={img.sprites.front_default}
                        name={img.name}
                        type={img.types[0].type.name}
                        ability={img.abilities[0].ability.name}
                        games={img.game_indices.length}
                        experience={img.base_experience}
                        addToFav={() => addToFav(img.name)}
                        id={img.id}
                        
                    />
                ))
            )}
        </div>
    );
};

export default Home;
