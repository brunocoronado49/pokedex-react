import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { usePokemonsHook } from "./hooks/usePokemonsHook";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
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
            <Navbar />
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home pokemon={pokemon} loading={loading} />} />
                    <Route path="/favoritos" element={<Favorites />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
