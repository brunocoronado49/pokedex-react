import "../styles/card.css";

const PokeCard = ({
    name,
    img,
    type,
    ability,
    games,
    gamesLenght,
    experience,
}) => {
    return (
        <div className="card">
            <img src={img} alt={name} className="image" />
            <div className="card-body">
                <h2>{name}</h2>
                <p>Tipo: {type}</p>
                <p>Habilidad: {ability}</p>
                <p>Experiencia: {experience}</p>
                <p>
                    Juegos: {gamesLenght} - {games}
                </p>
                <button className="btn-add" onClick={() => alert("Favourite")}>
                    Agregar a favoritos
                </button>
            </div>
        </div>
    );
};

export default PokeCard;
