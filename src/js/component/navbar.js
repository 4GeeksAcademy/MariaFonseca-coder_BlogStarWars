import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.jpg';
import nave from '../../img/nave.gif';
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000000', marginTop: "70px", marginBottom: "100px" }}>
			<div className="container">
				<img
					src={nave}
					alt="gif 2"
					style={{
						width: '350px',
						height: '250px',
						position: "absolute",
						left: 0,
						marginLeft: 0
					}}
					className="navbar-brand mb-0 h1"
				/>

				<Link to="/" className="position-absolute top-50 start-50 translate-middle">
					<img
						src={logo}
						alt="Logo"
						style={{ width: '200px', height: '200px', marginTop: "10px" }}
						className="navbar-brand mb-0 h1"
					/>
				</Link>

				<div className="ms-auto">
					<div className="dropdown">
						<button
							className="btn bg-warning dropdown-toggle" style={{ marginTop: "10px", marginRight: "30px" }}
							type="button"
							id="dropdownMenuButton"
							onClick={toggleDropdown}
						>
							Favorites
						</button>
						<ul
							className={`dropdown-menu dropdown-menu-end bg-dark text-white ${isOpen ? "show" : ""}`}
							aria-labelledby="dropdownMenuButton"
						>
							{store.favorites.length > 0 ? (
								store.favorites.map((fav, index) => (
									<li key={index} className="dropdown-item d-flex justify-content-between align-items-center text-white" style={{ whiteSpace: "normal", overflow: "visible", borderBottom: "1px solid #555" }}>
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
			</div >
		</nav >
	);
};