import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.jpg';
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);  // Estado para controlar si el dropdown está abierto

	// Función para alternar la visibilidad del dropdown
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar navbar-expand-lg mb-3" style={{ backgroundColor: '#000000' }}>
			<div className="container">
				{/* Logo centrado */}
				<Link to="/" className="position-absolute top-50 start-50 translate-middle">
					<img
						src={logo}
						alt="Logo"
						style={{ width: '200px', height: '200px', marginTop: "60px" }}
						className="navbar-brand mb-0 h1"
					/>
				</Link>

				<div className="ms-auto">
					<div className="dropdown">
						<button
							className="btn bg-warning dropdown-toggle" style={{ marginTop: "20px", marginRight: "30px" }}
							type="button"
							id="dropdownMenuButton"
							onClick={toggleDropdown}  // Solo cambiar el estado para abrir/cerrar el dropdown
						>
							Favorites
						</button>
						<ul
							className={`dropdown-menu dropdown-menu-end bg-dark text-white ${isOpen ? "show" : ""}`}  // Mostrar solo si `isOpen` es true
							aria-labelledby="dropdownMenuButton"
						>
							{store.favorites.length > 0 ? (
								store.favorites.map((fav, index) => (
									<li key={index} className="dropdown-item d-flex justify-content-between align-items-center text-white" style={{ whiteSpace: "normal", overflow: "visible", borderBottom: "1px solid #555" }}>
										<span>{fav.name}</span>
										<button
											className="btn btn-sm btn-danger ms-2"
											onClick={() => actions.Favorite(fav)}  // Eliminar favorito
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