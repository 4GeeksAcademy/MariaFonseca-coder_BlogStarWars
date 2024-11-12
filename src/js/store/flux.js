const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],

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
			PeopleFetch: async (id) => { //FETCH PRINCIPAL DE PEOPLE
				try {
					const res = await fetch('https://www.swapi.tech/api/people/${id}');
					const data = await res.json();
					setStore({ people: data.results });
				} catch (error) {
					console.error("Error fetching people:", error);
				}
			},
			VehiclesFetch: async () => { //FETCH PRINCIPAL DE VEHICLES
				try {
					const res = await fetch("https://www.swapi.tech/api/vehicles");
					if (res.ok) {
						const data = await res.json();
						setStore({ vehicles: data.results });
					}
				} catch (error) {
					console.error("Error fetching vehicles:", error);
				}
			},
			PlanetsFetch: async () => { //FETCH PRINCIPAL DE PLANETS
				try {
					const res = await fetch("https://www.swapi.tech/api/planets");
					if (res.ok) {
						const data = await res.json();
						setStore({ planets: data.results });
					}
				} catch (error) {
					console.error("Error fetching planets:", error);
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