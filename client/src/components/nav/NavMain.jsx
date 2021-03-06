import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavMain() {
	return (
		<nav id="nav_main" className="nav">
			
				<NavLink exact className="link" activeClassName="is-active" to="/">
					home
				</NavLink>

				<NavLink className="link" activeClassName="is-active" to="/admin/medias/create">
					medias
				</NavLink>
				<NavLink className="link" activeClassName="is-active" to="/adminall/medias/">
					all
				</NavLink>
			
		</nav>
	);
}
