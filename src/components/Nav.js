import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavItem = (props) => (
	<NavLink className="app-nav-item" activeClassName="active" {...props}>
		{props.label}
	</NavLink>
)

const Nav = () => {
	return (
		<nav className="app-nav">
			<NavItem to="/core" label="Core" />
			<NavItem to="/theme" label="Theme" />
			<NavItem to="/application" label="Application" />
			<NavItem to="/syntax" label="Syntax" />
			<NavItem to="/editor" label="Editor" />
		</nav>
	)
}

export default Nav
