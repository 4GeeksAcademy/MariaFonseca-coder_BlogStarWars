import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallesComponentes = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // Obtén el id de la URL

    // Cargar los detalles del personaje al montar el componente
    useEffect(() => {
        actions.PeopleDetailsFetch(id);
    }, [id]);

    const personDetails = store.peopleDetails;

    return (
        <div className="container text-white mt-5">
            {personDetails ? (
                <>
                    <h2 className="mb-4">{personDetails.properties.name}</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                                className="img-fluid"
                                alt={personDetails.properties.name}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x500?text=No+Image')}
                            />
                        </div>
                        <div className="col-md-6">
                            <p><strong>Height:</strong> {personDetails.properties.height} cm</p>
                            <p><strong>Mass:</strong> {personDetails.properties.mass} kg</p>
                            <p><strong>Hair Color:</strong> {personDetails.properties.hair_color}</p>
                            <p><strong>Skin Color:</strong> {personDetails.properties.skin_color}</p>
                            <p><strong>Eye Color:</strong> {personDetails.properties.eye_color}</p>
                            <p><strong>Birth Year:</strong> {personDetails.properties.birth_year}</p>
                            <p><strong>Gender:</strong> {personDetails.properties.gender}</p>
                        </div>
                    </div>
                </>
            ) : (
                <p>Cargando detalles...</p>
            )}
        </div>
    );
};