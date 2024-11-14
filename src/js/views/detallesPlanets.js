import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallesPlanets = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.PlanetsDetailsFetch(id);
    }, [id]);

    const planetsDetails = store.planetDetails;

    return (
        <div className="container d-flex justify-content-center mt-5">
            {planetsDetails ? (
                <div className="card mb-3" style={{
                    maxWidth: "1200px", width: "100%", backgroundColor: "#000000", borderColor: "black", borderStyle: "solid"
                }}>
                    <div className="row g-0">
                        <div className="col-md-4" style={{ paddingTop: "30px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                className="img-fluid rounded-start"
                                alt={planetsDetails.properties.name}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x500?text=No+Image')}
                            />
                        </div>
                        <div className="col-md-8 text-center" style={{ color: "white" }}>
                            <div className="card-body">
                                <h3 className="card-title">{planetsDetails.properties.name}</h3> <br />
                                <p className="card-text">
                                    <strong>Rotation Period:</strong> {planetsDetails.properties.rotation_period} hours <br /><br />
                                    <strong>Orbital Period:</strong> {planetsDetails.properties.orbital_period} days <br /><br />
                                    <strong>Diameter:</strong> {planetsDetails.properties.diameter} km <br /><br />
                                    <strong>Climate:</strong> {planetsDetails.properties.climate} <br /><br />
                                    <strong>Gravity:</strong> {planetsDetails.properties.gravity} <br /><br />
                                    <strong>Terrain:</strong> {planetsDetails.properties.terrain} <br /><br />
                                    <strong>Population:</strong> {planetsDetails.properties.population}
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Información obtenida de Star Wars API</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-white">Cargando detalles...</p>
            )}
        </div>
    );
};