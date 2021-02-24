import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import md5 from 'crypto-js/md5';
import { API } from 'aws-amplify';
import Logo from '../Logo';
import themeNameGenerator from '../../helpers/themeNameGenerator';
import getCompressedState from '../../helpers/getCompressedState';
import downloadTheme from '../../helpers/downloadTheme';

const share = ({theme, allTokens, themeName}) => {
	const body = {
		theme: theme,
		allTokens: getCompressedState(allTokens),
		name: themeName,
	};
	body.id = md5(JSON.stringify(body)).toString();

	API.post('theme', '/theme', {body})
		.then(response => {
			window.history.replaceState(null, '', `/editor/${body.id}`);
			// TODO: show a toast
		})
		.catch(error => {
			console.log(error);
		});

}

const NavItem = React.memo(({to, label, className}) => (
	<NavLink className={clsx(
			"tw-header-nav-item",
			className
		)}
		activeClassName="active"
		to={to}>
		{label}
	</NavLink>
));

const Github = React.memo(() => {
	return (
		<a href="https://github.com/dbanksdesign/themeweaver" className="tw-header-nav-item" aria-label="View source on Github">
			<svg className="github" alt="GitHub" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
				<path className="github-path" fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
			</svg>
		</a>
	)
});

const Header = React.memo(({showExport, themeName, updateThemeName, allTokens, theme}) => {
	return (
		<header className="tw-header">
			<Link className="tw-logo-link" to="/">
				<Logo />
			</Link>
			
			<nav className="tw-header-primary-nav">
				<div className="tw-input-with-button">
					<input type="text"
						id="themeName"
						className="tw-input"
						value={themeName}
						onChange={(e) => updateThemeName(e.target.value)} />
					<button className="small" onClick={() => updateThemeName(themeNameGenerator())}>
						Random name
					</button>
				</div>
			</nav>
			
			<nav className="tw-header-secondary-nav">
				<button className="small" onClick={() => share({allTokens, theme, themeName})}>
					Share
				</button>
				<button className="small primary" onClick={() => downloadTheme({allTokens, theme, themeName})}>
					Download
				</button>
			</nav>
		</header>
	)}
)

export default Header
