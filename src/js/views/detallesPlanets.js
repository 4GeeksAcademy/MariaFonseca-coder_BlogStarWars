import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Tatooine from "../../img/Tatooine.webp";

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
                    maxWidth: "1200px",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.8)", //Fondo semi-transparente
                    borderColor: "black",
                    borderStyle: "solid"
                }}>
                    <div className="row g-0">
                        <div className="col-md-4" style={{ paddingTop: "10px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                className="img-fluid rounded-start" style={{ marginTop: "50px" }}
                                alt={planetsDetails.properties.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = Tatooine;
                                }}
                            />
                        </div>
                        <div className="col-md-8 text-center" style={{ color: "white" }}>
                            <div className="card-body">
                                <h3 className="card-title">{planetsDetails.properties.name}</h3> <br />
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
                                                <td><strong>Rotation Period:</strong> {planetsDetails.properties.rotation_period} hours</td>
                                                <td><strong>Orbital Period:</strong> {planetsDetails.properties.orbital_period} days</td>
                                                <td><strong>Diameter:</strong> {planetsDetails.properties.diameter} km </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Climate:</strong> {planetsDetails.properties.climate}</td>
                                                <td><strong>Gravity:</strong> {planetsDetails.properties.gravity}</td>
                                                <td><strong>Terrain:</strong> {planetsDetails.properties.terrain}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3"><strong>Population:</strong> {planetsDetails.properties.population}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </p>
                                <p className="card-text text-center" style={{ paddingTop: "150px " }}>
                                    <small className="text-muted" style={{ marginLeft: "200px " }}>DESIGNED AND DEVELOPED BY MARIA JOSE FONSECA</small>
                                    <button
                                        type="button"
                                        className="btn btn-dark" style={{ marginLeft: "180px", color: "#f0e68c" }}
                                        onClick={() => actions.Favorite({
                                            name: planetsDetails.properties.name,
                                            id: id,
                                            type: "person"
                                        })}
                                    >
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-white">Loading details......</p>
            )}
        </div>
    );
};