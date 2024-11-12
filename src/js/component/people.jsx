import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext"

export const People = () => {
    const { store, actions } = useContext(Context)
    // console.log(store.demo); PARA VER QUE HAY EN STORE
    useEffect(() => {
        actions.PeopleFetch()
        console.log(store.people);
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {store.people && store.people.length > 0 ? (
                store.people.map((person, index) => (
                    <div key={index} className="col">
                        <div className="card h-100">
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
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center">Cargando personajes...</p>
            )}
        </div>
    );
};