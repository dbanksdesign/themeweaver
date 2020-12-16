import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import lzString from 'lz-string';
import {dark, light, hc} from './tokens/theme';
import {allTokens as _allTokens} from './tokens/index';
import createAllTokens from './helpers/createAllTokens';
import updateToken from './helpers/updateToken';
import { lsSet, lsGet } from './helpers/localStorage';

import HomePage from './pages/HomePage';
import BasePage from './pages/BasePage';
import ThemePage from './pages/ThemePage';
import ApplicationPage from './pages/ApplicationPage';
import SyntaxPage from './pages/SyntaxPage';
import ExportPage from './pages/ExportPage';
import ImportPage from './pages/ImportPage';
import AboutPage from './pages/AboutPage';

import Header, {SecondaryHeader} from './components/Header';
import Workbench from './components/VSCode/Workbench';
import VSCodeEditor from './components/VSCode/Editor';
import Panels from './components/Panels';
import ScrollToTop from './components/ScrollTop';

import createResolvedTokenObject from './helpers/createResolvedTokenObject';

const themeMap = ['dark', 'light', 'hc'];

const theme = {
	dark,
	light,
	hc
}

const defaultState = {
	allTokens: createAllTokens({
		..._allTokens,
		...theme['dark']
	}),
	currentTheme: 'dark',
	themeName: '',
	theme
}

const onResize = (width) => {
	console.log(width);
}

class App extends Component {
	constructor(props) {
		super(props);
		let initialState;
		// Uncomment this when going live, commenting out so hot reloads work.
		// initialState = lsGet('state');
		
		// We encode a simplifed version of the state in the hash
		// if there is a hash in the URL, try to decode it
		const hash = window.location.hash;
		if( hash && hash.length ) {
			try {
				const {allTokens, theme, themeName} = JSON.parse(
					lzString.decompressFromEncodedURIComponent(hash.split("=")[1])
				);
				initialState = {
					allTokens: createAllTokens(allTokens),
					currentTheme: 'dark',
					theme,
					themeName
				}
			} catch (error) {
				console.log(error);
			}
		}
		
		if (initialState) {
			this.state = initialState;
		} else {
			this.state = defaultState;
		}
	}
	
	updateTokens = ( _tokens ) => {
		const tokens = Object.assign({}, this.state.allTokens);
		_tokens.forEach(({path, value}, i) => {
			updateToken({ path, value, tokens });
		});
		this.setState({
			allTokens: tokens
		});
	}
	
	updateToken = ({ path, value, secondaryKey }) => {
		// if it is a theme token, update the current theme object
		const {currentTheme} = this.state;
		const newTheme = Object.assign({}, this.state.theme[currentTheme]);
		if (path.startsWith('theme')) {
			newTheme[path] = value;
		}

		const newTokens = Object.assign({}, this.state.allTokens);
		updateToken({ path, value, secondaryKey, tokens: newTokens });
		
		this.setState({
			theme: {
				...this.state.theme,
				[currentTheme]: newTheme
			},
			allTokens: newTokens,
		});
	}
	
	updateFontStyle = (path, value) => {
		const newTokens = Object.assign({}, this.state.allTokens);
		const newToken = Object.assign({}, newTokens[path]);
		newToken.fontStyle = Object.keys(value).reduce((arr,key) => {
			if (value[key]) { arr.push(key) }
			return arr;
		},[]).join(' ');
		newTokens[path] = newToken;
		this.setState({
			allTokens: newTokens
		});
	}
	
	changeTheme = ({ index, label }) => {
		const newTheme = themeMap[index];
		document.body.classList.remove(this.state.currentTheme);
		document.body.classList.add(newTheme);
		this.setState({
			currentTheme: newTheme,
			allTokens: createAllTokens({
				...this.state.allTokens,
				...this.state.theme[newTheme]
			}),
		})
	}
	
	importTheme = ({ application, syntax, type='light'}) => {
		const allTokens = createAllTokens({
			...application,
			...syntax,
		});

		this.setState({
			allTokens,
			currentTheme: type
		});
	}
	
	resetState = () => {
		this.setState(defaultState);
	}
	
	clearState = () => {
		const allTokens = Object.keys(this.state.allTokens).reduce((obj, key) => {
			obj[key] = {
				value: '',
				computedValue: '',
			};
			return obj;
		}, {});
		// const dark = Object.keys(this.state.theme.dark).reduce((obj,key) => {
		// 	obj[key] = '';
		// 	return obj;
		// }, {});
		// const light = Object.keys(this.state.theme.light).reduce((obj,key) => {
		// 	obj[key] = '';
		// 	return obj;
		// }, {});
		this.setState({ allTokens });
	}
	
	setAllTokens = (newTokens, theme) => {
		this.setState({
			allTokens: createAllTokens(newTokens),
			theme: theme ? theme : this.state.theme
		});
	}
	
	updateThemeName = (name) => {
		this.setState({
			themeName: name
		});
	}
	
	render() {
		// save state to localstorage
		lsSet('state', this.state);
		
		const { allTokens, currentTheme, theme, themeName } = this.state;
		
		const tokenNames = Object.keys(allTokens);
		const cssProperties = tokenNames.reduce((obj, name) => {
			const value = allTokens[name].computedValue;
			if (value) {
				obj[`--${name.replace('.value','').replace(/\./g,'-')}`] = allTokens[name].computedValue;
			}
			return obj;
		}, {});
		
		return (
			<Router>
				<div className={`app ${currentTheme}`} style={cssProperties}>
					<Header />
					<ScrollToTop />
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/about">
							<AboutPage />
						</Route>
						<Route path="/editor">
							<SecondaryHeader clearState={this.clearState} resetState={this.resetState} changeTheme={this.changeTheme} currentTheme={currentTheme} />
							<Panels onResize={onResize}>
								<div className="editor-pane">
									<Switch>
										<Route path="/editor/export">
											<ExportPage
												theme={theme}
												themeName={themeName}
												updateThemeName={this.updateThemeName}
												currentTheme={currentTheme}
												allTokens={allTokens} />
										</Route>
										<Route path="/editor/import">
											<ImportPage
												allTokens={allTokens}
												tokenNames={tokenNames}
												importTheme={this.importTheme}
												updateTokens={this.updateTokens}
												clearState={this.clearState}
												resetState={this.resetState}
												setAllTokens={this.setAllTokens}
												setState={this.setState.bind(this)}
												showToast={this.showToast} />
										</Route>
										<Route path="/editor/base">
											<BasePage
												tokens={allTokens}
												updateTokens={this.updateTokens}
												updateToken={this.updateToken}
												resetState={this.resetState} />
										</Route>
										<Route path="/editor/theme">
											<ThemePage
												tokens={allTokens}
												tokenNames={tokenNames}
												currentTheme={currentTheme}
												changeTheme={this.changeTheme}
												updateToken={this.updateToken} />
										</Route>
										<Route path="/editor/application">
											<ApplicationPage
												tokens={allTokens}
												tokenNames={tokenNames}
												updateToken={this.updateToken} />
										</Route>
										<Route path="/editor/syntax">
											<SyntaxPage
												tokens={allTokens}
												tokenNames={tokenNames}
												updateFontStyle={this.updateFontStyle}
												updateToken={this.updateToken} />
										</Route>
										{/* Default route */}
										<Route>
											<BasePage
												tokens={allTokens}
												updateTokens={this.updateTokens}
												updateToken={this.updateToken}
												resetState={this.resetState} />
										</Route>
									</Switch>
								</div>
								
								{({windowWidth,mainWidth}) => (
									<div tabIndex="-1" className="preview-pane vscode">
										<Workbench theme={currentTheme}>
											<VSCodeEditor
												windowWidth={windowWidth}
												mainWidth={mainWidth}
												currentTheme={currentTheme}
												syntaxTokens={createResolvedTokenObject(allTokens, `syntax`)}
												applicationTokens={createResolvedTokenObject(allTokens, `application`)} />
										</Workbench>
									</div>
								)}
							</Panels>
						</Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
