import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { usePokemonsHook } from "./hooks/usePokemonsHook";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import PokeDetail from './components/PokeDetail'
import "./styles/app.css";

function App() {
    const [loading, setLoading] = useState(true);
    const [, pokemon, addToFav, myPokemon] = usePokemonsHook();

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <div className="app">
            <Navbar />
            <Header />
            <div className="content">
                <Routes>
                    <Route
                        path="/"
                        element={<Home pokemon={pokemon} loading={loading} addToFav={addToFav} />}
                    />
                    <Route path="/favoritos" element={<Favorites myPokemon={myPokemon} />} />
                    <Route path="/pokemon/:id" element={<PokeDetail />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
