import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import mustafarImage from "../../img/Mustafar-TROSGG.webp";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.PlanetsFetch();
    }, [actions]);

    return (
        <div>
            <h3 className="text-white" style={{ textAlign: "left", marginLeft: "28px" }}>Planets</h3>
            <div className="card-container" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                {store.planets && store.planets.length > 0 ? (
                    store.planets.map((planet, index) => (
                        <div key={index} className="card mx-2" style={{ display: "inline-block", width: "360px", height: "500px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                                className="card-img-top"
                                alt={planet.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = mustafarImage;
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text">
                                    <strong>Climate:</strong> {planet.climate || "Unknown"} <br />
                                    <strong>Terrain:</strong> {planet.terrain || "Unknown"} <br />
                                    <strong>Population:</strong> {planet.population || "Unknown"}
                                </p>
                                <Link to={`/detallesPlanets/${index + 1}`}>
                                    <button type="button" className="btn btn-dark">Ver detalles</button>
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-dark" style={{ marginLeft: "3px", color: "#f0e68c" }}
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