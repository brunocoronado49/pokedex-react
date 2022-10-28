import { useParams } from "react-router-dom";
import { useGetOnePokemon } from "../hooks/usePokemonsHook";

const PokeDetail = () => {
    const params = useParams();
    const poke = useGetOnePokemon(params.id);

    return (
        <div className="detail">
            <center>
                <img src={poke.sprites.front_default} alt={poke.name} />
                <h1>Nombre: {poke.name}</h1>
                <p>{poke.types[0].type.name}</p>
                <p>{poke.abilities[0].ability.name}</p>
                <p>{poke.game_indices[0].version.name}</p>
                <p>{poke.game_indices.length}</p>
                <p>{poke.base_experience}</p>
            </center>
        </div>
    );
};

export default PokeDetail;
