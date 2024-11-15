import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.jpg';
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg mb-3" style={{ backgroundColor: '#000000' }}>
			<div className="container">
				<Link to="/">
					<img
						src={logo}
						alt="Logo"
						style={{ width: '130px', height: '70px' }}
						className="navbar-brand mb-0 h1"
					/>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn bg-warning dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites
						</button>
						<ul className="dropdown-menu dropdown-menu-end" style={{ backgroundColor: "#343a40" }} aria-labelledby="dropdownMenuButton">
							{store.favorites.length > 0 ? (
								store.favorites.map((fav, index) => (
									<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
										<span>{fav.name}</span>
										<button
											className="btn btn-sm btn-danger ms-2"
											onClick={() => actions.Favorite(fav)}
										>
											<i className="fas fa-trash"></i>
										</button>
									</li>
								))
							) : (
								<li className="dropdown-item text-muted">No favorites added</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};