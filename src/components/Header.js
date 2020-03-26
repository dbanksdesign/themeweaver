import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

import './Header.css';

const NavItem = React.memo(({to, label}) => (
	<NavLink className="tw-header-nav-item" activeClassName="active" to={to}>
		{label}
	</NavLink>
));

const GithubCorner = React.memo(() => (
	<a href="https://github.com/dbanksdesign/themeweaver" className="github-corner" aria-label="View source on Github">
	<svg viewBox="0 0 250 250" aria-hidden="true">
		<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
		<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: "130px 106px"}} className="octo-arm"></path>
		<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
	</svg>
</a>
))

const Github = React.memo(() => {
	return (
		<a href="https://github.com/dbanksdesign/themeweaver" className="tw-header-nav-item" aria-label="View source on Github">
			<svg className="github" alt="GitHub" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
				<path className="github-path" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
			</svg>
		</a>
	)
});

const Header = React.memo(() => {
	return (
	<>
		
		<header className="tw-header">
			<Link className="tw-logo-link" to="/">
				<Logo />
				<span className="tw-logo-text">Themeweaver</span>
			</Link>
			<nav className="tw-header-primary-nav">
				<NavItem to="/base" label="Base" />
				<NavItem to="/theme" label="Theme" />
				<NavItem to="/application" label="Application" />
				<NavItem to="/syntax" label="Syntax" />
				<NavItem to="/download" label="Download" />
			</nav>
			<nav className="tw-header-secondary-nav">
				<Github />
			</nav>
		</header>
	</>
	)}
)

export default Header
