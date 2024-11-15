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
            <h1 className="text-white">VEHICLES</h1>
            <div className="card-container" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                {store.vehicles && store.vehicles.length > 0 ? (
                    store.vehicles.map((vehicle, index) => (
                        <div key={index} className="card mx-2" style={{ display: "inline-block", width: "360px", height: "500px" }}>
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
                                <Link to={`/detallesVehicles/${index + 1}`}>
                                    <button type="button" className="btn btn-dark">Ver detalles</button>
                                </Link>
                                <button
                                    type="button"
                                    className="btn ms-5"
                                    onClick={() => actions.Favorite(vehicle)}
                                >
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-white">Cargando vehículos...</p>
                )}
            </div>
        </div>
    );
};