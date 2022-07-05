import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
	<nav className="navbar nav-dark navbar-expand-lg bg-primary">
		<div className="navbar-brand">
			Note App
		</div>
		<ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
			 className="nav-link" 
			//  aria-current="page" 
			 to="/"
			 exact>Главная
			 </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
			 className="nav-link" 
			//  aria-current="page" 
			 to="/about">Информация
			 </NavLink>
        </li>
      </ul>
	</nav>
)

export default Navbar;