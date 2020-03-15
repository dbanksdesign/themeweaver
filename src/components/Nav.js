import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './Nav.css';

const NavItem = (props) => (
	<NavLink className="app-nav-item" activeClassName="active" {...props}>
		<span className="app-nav-item-label">{props.label}</span>
		<span className="app-nav-item-icon codicon codicon-chevron-right" />
	</NavLink>
)

const Nav = () => {
	return (
		<nav className="app-nav">
			<div className="app-nav-inner">
			<NavItem to="/editor/core" label="Core" />
			<NavItem to="/editor/theme" label="Theme" />
			<NavItem to="/editor/application" label="Application" />
			<NavItem to="/editor/syntax" label="Syntax" />
			{/* <NavItem to="/editor" label="Editor" /> */}
			</div>
		</nav>
	)
}

export default Nav
