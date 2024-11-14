const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [], //ESPACIO DE PeopleFetch
			peopleDetails: null, //ESPACIO DETALLES DE PeopleDetailsFetch
			vehicles: [], //ESPACIO DE VehiclesFetch
			vehicleDetails: null, //ESPACIO DETALLES DE VehiclesDetailsFetch
			planets: [], //ESPACIO DE PlanetsFetch
			planetDetails: null, //ESPACIO DETALLES DE PlanetsDetailsFetch

			demo: [
				{
					// title: "FIRST",
					// background: "white",
					// initial: "white"
				},
				{
					// title: "SECOND",
					// background: "white",
					// initial: "white"
				}
			]
		},
		actions: {
			PeopleFetch: async () => { //FETCH TRAE LISTA DE PEOPLE
				try {
					const res = await fetch("https://swapi.dev/api/people");
					const data = await res.json();
					console.log("Datos de People:", data);
					setStore({ people: data.results });
				} catch (error) {
					console.error("Error fetching people list:", error);
				}
			},
			PeopleDetailsFetch: async (id) => { //FETCH TRAE DETALLES DE PEOPLE
				try {
					const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
					const data = await res.json();
					setStore({ peopleDetails: data.result });
				} catch (error) {
					console.error("Error fetching person details:", error);
				}
			},
			VehiclesFetch: async () => { //FETCH TRAE LISTA DE VEHICLES
				try {
					const res = await fetch("https://swapi.dev/api/vehicles");
					const data = await res.json();
					setStore({ vehicles: data.results });
				} catch (error) {
					console.error("Error fetching vehicles list:", error);
				}
			},
			VehiclesDetailsFetch: async (id) => { //FETCH TRAE DETALLES DE VEHICLES
				try {
					const res = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
					const data = await res.json();
					setStore({ vehicleDetails: data.result });
				} catch (error) {
					console.error("Error fetching vehicle details:", error);
				}
			},
			PlanetsFetch: async () => { //FETCH PRINCIPAL DE PLANETS
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
			PlanetsDetailsFetch: async (id) => { //FETCH TRAE DETALLES DE PLANETS
				try {
					const res = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					const data = await res.json();
					setStore({ planetDetails: data.result });
				} catch (error) {
					console.error("Error fetching planet details:", error);
				}
			}

			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
			/**
				fetch().then().then(data => setStore({ "foo": data.bar }))
			*/
		},
		// changeColor: (index, color) => {
		// 	//get the store
		// 	const store = getStore();

		// 	//we have to loop the entire demo array to look for the respective index
		// 	//and change its color
		// 	const demo = store.demo.map((elm, i) => {
		// 		if (i === index) elm.background = color;
		// 		return elm;
		// 	});

		// 	//reset the global store
		// 	setStore({ demo: demo });
		// }
	}
};

export default getState;