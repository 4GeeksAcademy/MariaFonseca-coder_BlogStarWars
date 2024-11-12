const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			PeopleFetch: () => { //fetch principal para traer datos de People
				fetch("https://www.swapi.tech/api/people/1")
					.then(res => res.json())
					.then(data => console.log(data))
					.catch(err => console.error(err))
			},
			VehiclesFetch: () => { //fetch principal para traer datos de Vehicles
				fetch("https://www.swapi.tech/api/vehicles/4")
					.then(res => res.json())
					.then(data => console.log(data))
					.catch(err => console.error(err))
			},
			PlanetsFetch: () => { //fetch principal para traer datos de Planets
				fetch("https://www.swapi.tech/api/planets/1")
					.then(res => res.json())
					.then(data => console.log(data))
					.catch(err => console.error(err))
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