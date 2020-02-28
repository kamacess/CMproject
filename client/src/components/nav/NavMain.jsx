import React from 'react';
import { NavLink, Router } from 'react-router-dom';


export default function NavMain() {
	return (
		<nav id="nav_main" className="nav">
			<Router>
				<NavLink exact className="link" activeClassName="is-active" to="/">
					home
				</NavLink>
				<NavLink className="link" activeClassName="is-active" to="/medias">
					medias
				</NavLink>
			</Router>
		</nav>
	);
}
