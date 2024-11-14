import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallesVehicles = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // Obtén el id de la URL

    useEffect(() => {
        actions.VehiclesDetailsFetch(id); // Acción para obtener los detalles del vehículo
    }, [id]);

    const vehicleDetails = store.vehicleDetails; // Asegúrate de que `vehicleDetails` esté en el store

    return (
        <div className="container d-flex justify-content-center mt-5">
            {vehicleDetails ? (
                <div className="card mb-3" style={{ width: "1000px" }}>
                    <div className="row g-0">
                        {/* Imagen del vehículo */}
                        <div className="col-md-4" style={{ backgroundColor: "#0A0A0A", paddingTop: "39px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                                className="img-fluid rounded-start"
                                alt={vehicleDetails.properties.name}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x500?text=No+Image')}
                            />
                        </div>
                        {/* Detalles del vehículo */}
                        <div className="col-md-8 text-center" style={{ backgroundColor: "#0A0A0A", color: "white" }}>
                            <div className="card-body">
                                <h5 className="card-title">{vehicleDetails.properties.name}</h5>
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