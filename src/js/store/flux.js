const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [], //ESPACIO DE PeopleFetch
			peopleDetails: null, //ESPACIO DETALLES DE PeopleDetailsFetch
			vehicles: [], //ESPACIO DE VehiclesFetch
			vehicleDetails: null, //ESPACIO DETALLES DE VehiclesDetailsFetch
			planets: [], //ESPACIO DE PlanetsFetch
			planetDetails: null, //ESPACIO DETALLES DE PlanetsDetailsFetch
			favorites: [],
		},
		actions: {
			//Fetch para obtener la lista de personas
			PeopleFetch: async () => {
				try {
					const res = await fetch("https://swapi.dev/api/people");
					const data = await res.json();
					console.log("Datos de People:", data);
					setStore({ people: data.results });
				} catch (error) {
					console.error("Error fetching people list:", error);
				}
			},

			//Fetch para obtener detalles de una persona
			PeopleDetailsFetch: async (id) => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
					const data = await res.json();
					setStore({ peopleDetails: data.result });
				} catch (error) {
					console.error("Error fetching person details:", error);
				}
			},

			//Fetch para obtener la lista de vehículos
			VehiclesFetch: async () => {
				try {
					const res = await fetch("https://swapi.dev/api/vehicles");
					const data = await res.json();
					setStore({ vehicles: data.results });
				} catch (error) {
					console.error("Error fetching vehicles list:", error);
				}
			},

			//Fetch para obtener detalles de un vehículo
			VehiclesDetailsFetch: async (id) => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
					const data = await res.json();
					setStore({ vehicleDetails: data.result });
				} catch (error) {
					console.error("Error fetching vehicle details:", error);
				}
			},

			//Fetch para obtener la lista de planetas
			PlanetsFetch: async () => {
				try {
					const res = await fetch("https://swapi.dev/api/planets");
					if (res.ok) {
						const data = await res.json();
						setStore({ planets: data.results });
					}
				} catch (error) {
					console.error("Error fetching planets list:", error);
				}
			},

			//Fetch para obtener detalles de un planeta
			PlanetsDetailsFetch: async (id) => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					const data = await res.json();
					setStore({ planetDetails: data.result });
				} catch (error) {
					console.error("Error fetching planet details:", error);
				}
			},

			//Función para manejar favoritos
			Favorite: (item) => {
				const store = getStore();
				const isFavorite = store.favorites.some(fav => fav.name === item.name);

				if (isFavorite) {
					setStore({
						favorites: store.favorites.filter(fav => fav.name !== item.name)
					});
				} else {
					setStore({
						favorites: [...store.favorites, item]
					});
				}
			}
		}
	};
};

export default getState;