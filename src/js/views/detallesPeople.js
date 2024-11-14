import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallesPeople = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.PeopleDetailsFetch(id);
    }, [id]);

    const personDetails = store.peopleDetails;

    return (
        <div className="container d-flex justify-content-center mt-5">
            {personDetails ? (
                <div className="card mb-3" style={{
                    maxWidth: "1200px", width: "100%", backgroundColor: "#000000", borderColor: "black", borderStyle: "solid"
                }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                                className="img-fluid rounded-start"
                                alt={personDetails.properties.name}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x500?text=No+Image')}
                            />
                        </div>
                        <div className="col-md-8 text-center" style={{ color: "white" }}>
                            <div className="card-body">
                                <h3 className="card-title">{personDetails.properties.name}</h3> <br />
                                <p className="card-text">
                                    <strong>Height:</strong> {personDetails.properties.height} cm <br /><br />
                                    <strong>Mass:</strong> {personDetails.properties.mass} kg <br /><br />
                                    <strong>Hair Color:</strong> {personDetails.properties.hair_color} <br /><br />
                                    <strong>Skin Color:</strong> {personDetails.properties.skin_color} <br /><br />
                                    <strong>Eye Color:</strong> {personDetails.properties.eye_color} <br /><br />
                                    <strong>Birth Year:</strong> {personDetails.properties.birth_year} <br /><br />
                                    <strong>Gender:</strong> {personDetails.properties.gender}
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