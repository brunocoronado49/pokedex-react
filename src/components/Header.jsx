import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import '../styles/header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title">
                <CatchingPokemonIcon className="poke-icon" fontSize="80px"/>
                Pokedex
            </h1>
        </div>
    );
};

export default Header;
