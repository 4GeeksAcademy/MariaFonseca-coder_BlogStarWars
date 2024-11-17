import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.VehiclesFetch();
    }, [actions]);

    return (
        <div>
            <h3 className="text-white" style={{ textAlign: "left", marginLeft: "28px" }}>Vehicles</h3>
            <div className="card-container" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                {store.vehicles && store.vehicles.length > 0 ? (
                    store.vehicles.map((vehicle, index) => (
                        <div key={index} className="card mx-2" style={{ display: "inline-block", width: "290px", height: "560px", position: "relative" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`}
                                className="card-img-top"
                                alt={vehicle.name}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/200x300?text=No+Image')}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text">
                                    <strong>Model:</strong> {vehicle.model || "Unknown"} <br />
                                    <strong>Manufacturer:</strong> {vehicle.manufacturer || "Unknown"} <br />
                                    <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity || "Unknown"}
                                </p>
                            </div>
                            <div style={{ position: "absolute", display: "flex", justifyContent: "center", bottom: "1px", left: "50%", transform: "translateX(-50%)", width: "100%" }}>
                                <Link to={`/detallesVehicles/${index + 1}`}>
                                    <button type="button" className="btn btn-dark" style={{ marginBottom: "10px" }}>Ver detalles</button>
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-dark" style={{ marginLeft: "3px", color: "#f0e68c", marginBottom: "10px" }}
                                    onClick={() => actions.Favorite(vehicle)}
                                >
                                    <i className="fas fa-heart"></i>
                                </button>

                            </div>
                        </div>
                    ))
                ) : (
                    <><p class="spinner-border spinner-border-sm text-light" style={{ marginTop: "5px" }} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </p><p className="text-center text-white">Cargando vehículos...</p></>
                )}
            </div >
        </div >
    );
};