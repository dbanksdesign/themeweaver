import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './Nav.css';

const NavItem = (props) => (
	<NavLink className="app-nav-item" activeClassName="active" {...props}>
		{props.label}
	</NavLink>
)

const Nav = () => {
	return (
		<nav className="app-nav">
			<Logo />
			<NavItem to="/" label="About" exact />
			<NavItem to="/core" label="Core" />
			<NavItem to="/theme" label="Theme" />
			<NavItem to="/application" label="Application" />
			<NavItem to="/syntax" label="Syntax" />
			<NavItem to="/editor" label="Editor" />
			<NavItem to="/colophone" label="Colophone" />
		</nav>
	)
}

export default Nav
