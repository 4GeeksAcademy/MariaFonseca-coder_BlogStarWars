import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.jpg';

export const Navbar = () => {
	return (
		<nav className="navbar mb-3" style={{ backgroundColor: '#000000' }}>
			<Link to="/">
				<img
					src={logo}
					alt="Logo"
					style={{ width: '130px', height: '70px' }}
					className="navbar-brand mb-0 h1"
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div class="btn-group" role="group">
						<button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
							{/* <li><a class="dropdown-item" href="#">Dropdown link</a></li> //AQUÍ VA LOS PERSONAJES O ASI QUE SE INTEGRAN A FAVORITOS
							<li><a class="dropdown-item" href="#">Dropdown link</a></li> */}
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};