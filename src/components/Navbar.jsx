import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/" className="link">Pokemones</Link>
                </li>
                <li>
                    <Link to="/favoritos" className="link">Favoritos</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
