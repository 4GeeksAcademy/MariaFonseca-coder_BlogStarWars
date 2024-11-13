import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const People = () => {
    const { store, actions } = useContext(Context);

    // Fetch de datos al montar el componente
    useEffect(() => {
        actions.PeopleFetch();
        console.log(store.people);
    }, [actions]);

    return (
        <div className="people-container">
            {store.people && store.people.length > 0 ? (
                store.people.map((person, index) => (
                    <div key={index} className="card mx-2">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                            className="card-img-top"
                            alt={person.name}
                            onError={(e) => (e.target.src = 'https://via.placeholder.com/200x300?text=No+Image')}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <p className="card-text">This is a character from Star Wars.</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center">Cargando personajes...</p>
            )}
        </div>
    );
};