import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.PlanetsFetch();
    }, [actions]);

    return (
        <div>
            <h1 className="text-white">PLANETS</h1>
            <div className="card-container" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                {store.planets && store.planets.length > 0 ? (
                    store.planets.map((planet, index) => (
                        <div key={index} className="card mx-2" style={{ display: "inline-block", width: "360px", height: "500px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                                className="card-img-top"
                                alt={planet.name}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/200x300?text=No+Image')}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text">
                                    <strong>Climate:</strong> {planet.climate || "Unknown"} <br /> {/* LE AGREGUÉ ESTA */}
                                    <strong>Terrain:</strong> {planet.terrain || "Unknown"} <br />
                                    <strong>Population:</strong> {planet.population || "Unknown"}
                                </p>
                                <Link to={`/detallesPlanets/${index + 1}`}>
                                    <button type="button" className="btn btn-dark">Ver detalles</button>
                                </Link>
                                <button
                                    type="button"
                                    className="btn ms-5"
                                    onClick={() => actions.Favorite(planet)}
                                >
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-white">Cargando planetas...</p>
                )}
            </div>
        </div>
    );
};