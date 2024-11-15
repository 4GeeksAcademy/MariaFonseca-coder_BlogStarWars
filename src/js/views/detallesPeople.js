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
                                    <h6>
                                        <small>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </small>
                                    </h6>
                                    <br /><br />
                                    <table className="table text-white">
                                        <tbody>
                                            <tr>
                                                <td><strong>Height:</strong> {personDetails.properties.height} cm</td>
                                                <td><strong>Mass:</strong> {personDetails.properties.mass} kg</td>
                                                <td><strong>Hair Color:</strong> {personDetails.properties.hair_color}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Skin Color:</strong> {personDetails.properties.skin_color}</td>
                                                <td><strong>Eye Color:</strong> {personDetails.properties.eye_color}</td>
                                                <td><strong>Birth Year:</strong> {personDetails.properties.birth_year}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3"><strong>Gender:</strong> {personDetails.properties.gender}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </p>

                                <p className="card-text" style={{ paddingTop: "150px " }}>
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