import React from "react";
import "../../styles/home.css";
import { People } from "../component/people.jsx";
import { Planets } from "../component/planets.jsx";
import { Vehicles } from "../component/vehicles.jsx";
import gifStarWars from '../../img/gifStarWars.gif';

export const Home = () => (
	<div className="text-center mt-5">
		<People />
		<Planets />
		<Vehicles />
		<div>
			<img
				src={gifStarWars}
				alt="gif"
				style={{
					width: '120px',
					height: '100px',
					position: "absolute",
					left: 0,
					marginLeft: "30px"
				}}
				className="gif1"
			/>
			<p className="text-muted" style={{ paddingTop: "50px ", color: "white" }}>DESIGNED AND DEVELOPED BY MARIA JOSE FONSECA
			</p>
		</div>
	</div>
);