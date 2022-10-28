import { useState } from "react";
import { usePokemonsHook } from "./hooks/usePokemonsHook";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PokeCard from "./components/PokeCard";
import "./styles/app.css";

function App() {
    const [loading, setLoading] = useState(true);
    const [, pokemon] = usePokemonsHook();

    setTimeout(() => {
        setLoading(false);
        console.log(pokemon);
    }, 1000);

    return (
        <div className="app">
            <Header />
            {/* <Navbar /> */}
            <div className="content">
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
                            games={img.game_indices[0].version.name}
                            gamesLenght={img.game_indices.length}
                            experience={img.base_experience}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default App;
