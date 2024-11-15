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
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div className="col-md-6 text-center d-flex align-items-center" style={{ color: "white" }}>
                            <div className="card-body">
                                <h3 className="card-title">{vehicleDetails.properties.name}</h3> <br />
                                <p className="card-text">
                                    <h6>
                                        <small>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </small>
                                    </h6>
                                    <br /><br />
                                    <table className="table text-white">
                                        <tbody>
                                            <tr>
                                                <td><strong>Model:</strong> {vehicleDetails.properties.model}</td>
                                                <td><strong>Manufacturer:</strong> {vehicleDetails.properties.manufacturer}</td>
                                                <td><strong>Cost in Credits:</strong> {vehicleDetails.properties.cost_in_credits} </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Length:</strong> {vehicleDetails.properties.length} meters</td>
                                                <td><strong>Max Speed:</strong> {vehicleDetails.properties.max_atmosphering_speed} km/h </td>
                                                <td><strong>Crew:</strong> {vehicleDetails.properties.crew} </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3"><strong>Passengers:</strong> {vehicleDetails.properties.passengers}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </p>
                                <p className="card-text" style={{ paddingTop: "90px " }}>
                                    <small className="text-muted">DESIGNED AND DEVELOPED BY MARIA JOSE FONSECA</small>
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