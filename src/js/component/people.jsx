import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.PeopleFetch();
        console.log(store.people);
    }, []);

    return (
        <div>
            <h1 className="text-white">CHARACTERS</h1>
            <div className="card-container" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                {store.people && store.people.length > 0 ? (
                    store.people.map((person, index) => (
                        <div key={index} className="card mx-2" style={{ display: "inline-block", width: "360px", height: "500px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                                className="card-img-top"
                                alt={person.name}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/200x300?text=No+Image')}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">
                                    <strong>Gender:</strong> {person.gender} <br /> {/* ESTOS 3 AÚN NO ME SALEN */}
                                    <strong>Hair Color:</strong> {person.hair_color} <br />
                                    <strong>Eye Color:</strong> {person.eye_color}
                                </p>
                                <Link to={`/detallesPerson/${index + 1}`}>
                                    <button type="button" className="btn btn-dark">Ver detalles</button>
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-dark" style={{ marginLeft: "3px", color: "white" }}
                                    onClick={() => actions.Favorite(person)}
                                >
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-white">Cargando personajes...</p>
                )}
            </div>
        </div >
    );
};