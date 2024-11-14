import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallesVehicles = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.VehiclesDetailsFetch(id);
    }, [id]);

    const vehicleDetails = store.vehicleDetails;

    return (
        <div className="container d-flex justify-content-center mt-5">
            {vehicleDetails ? (
                <div className="card mb-3" style={{
                    maxWidth: "1200px", width: "100%", backgroundColor: "#000000", borderColor: "black", borderStyle: "solid"
                }}>
                    <div className="row g-0">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                                className="img-fluid rounded-start"
                                alt={vehicleDetails.properties.name}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/1000x800?text=No+Image')}
                                style={{
                                    width: "80%",
                                    height: "auto",
                                    maxWidth: "1000px",
                                    maxHeight: "1000px",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                        <div className="col-md-6 text-center d-flex align-items-center" style={{ color: "white" }}>
                            <div className="card-body">
                                <h3 className="card-title">{vehicleDetails.properties.name}</h3> <br />
                                <p className="card-text">
                                    <strong>Model:</strong> {vehicleDetails.properties.model} <br /><br />
                                    <strong>Manufacturer:</strong> {vehicleDetails.properties.manufacturer} <br /><br />
                                    <strong>Cost in Credits:</strong> {vehicleDetails.properties.cost_in_credits} <br /><br />
                                    <strong>Length:</strong> {vehicleDetails.properties.length} meters <br /><br />
                                    <strong>Max Speed:</strong> {vehicleDetails.properties.max_atmosphering_speed} km/h <br /><br />
                                    <strong>Crew:</strong> {vehicleDetails.properties.crew} <br /><br />
                                    <strong>Passengers:</strong> {vehicleDetails.properties.passengers} <br /><br />
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