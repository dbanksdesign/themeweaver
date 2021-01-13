import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import lzString from 'lz-string';
import {dark, light, hc} from './tokens/theme';
import {allTokens as _allTokens} from './tokens/index';
import createAllTokens from './helpers/createAllTokens';
import updateToken from './helpers/updateToken';
import themeNameGenerator from './helpers/themeNameGenerator';
import { lsSet, lsGet } from './helpers/localStorage';

import HomePage from './pages/HomePage';
import BasePage from './pages/BasePage';
import ThemePage from './pages/ThemePage';
import ApplicationPage from './pages/ApplicationPage';
import SyntaxPage from './pages/SyntaxPage';
import ExportPage from './pages/ExportPage';
// import TestPage from './pages/TestPage';

import Header, {SecondaryHeader} from './components/Header';
import Workbench from './components/VSCode/Workbench';
import VSCodeEditor from './components/VSCode/Editor';
import Panels from './components/Panels';
import ScrollToTop from './components/ScrollTop';
import Modal from './components/Modal';

import createResolvedTokenObject from './helpers/createResolvedTokenObject';
import RadioGrid from './components/RadioGrid';
import getColorSettings from './helpers/getColorSettings';
import chroma from 'chroma-js';
import tokenToCSS from './helpers/tokenToCSS';

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
	browserTheme: 'light',
	currentTheme: 'dark',
	themeName: themeNameGenerator(),
	exportModal: false,
	importModal: false,
	theme
}

class App extends Component {
	
	constructor(props) {
		super(props);
		let initialState;
		let browserTheme;
		
		if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
			browserTheme = 'dark';
		} else {
			browserTheme = 'light';
		}
		
		if (process.env.NODE_ENV === 'production') {
			initialState = lsGet('state');
		}
		
		// We encode a simplified version of the state in the hash
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
		
		const state = Object.assign({}, defaultState, initialState);
		
		this.state = {
			...state,
			browserTheme,
			colorSettings: getColorSettings(state.allTokens)
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
		console.log(value);
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
	
	changeTheme = ({ index, label, value }) => {
		const newTheme = themeMap[index];
		document.body.classList.remove(this.state.currentTheme);
		document.body.classList.add(newTheme);
		this.setState({
			currentTheme: value,
			allTokens: createAllTokens({
				...this.state.allTokens,
				...this.state.theme[value]
			}),
		})
	}
	
	importTheme = ({ application={}, syntax={}, type='light', base={} }) => {
		const allTokens = createAllTokens({
			...application,
			...syntax,
			...base
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
		this.setState({ allTokens });
	}
	
	setAllTokens = (newTokens, theme) => {
		const allTokens = createAllTokens(newTokens);
		this.setState({
			allTokens,
			theme: theme ? theme : this.state.theme,
			colorSettings: getColorSettings(allTokens)
		});
	}
	
	setHue = ({colorName, value}) => {
		const colorSettings = Object.assign({}, this.state.colorSettings, {
			[colorName]: Object.assign({}, this.state.colorSettings[colorName], {
				hue: value
			})
		});
		const hue = value;
		const tokens = Object.assign({}, this.state.allTokens);
		Object.keys(this.state.allTokens)
			.filter(key => key.includes(`base.${colorName}`))
			.forEach(path => {
				const token = tokens[path];
				const hsl = [
					hue,
					token.hsl[1],
					token.hsl[2],
				];
				const value = chroma.hsl(hsl).hex();
				updateToken({ path, value, tokens, hsl });
			});

		this.setState({
			colorSettings,
			allTokens: tokens
		});
	}
	
	setLightness = ({colorName, value}) => {
		const colorSettings = Object.assign({}, this.state.colorSettings, {
			[colorName]: Object.assign({}, this.state.colorSettings[colorName], {
				lightness: value
			})
		});
		const delta = colorSettings[colorName].lightness - this.state.colorSettings[colorName].lightness;
		const hue = colorSettings[colorName].hue;
		
		const tokens = Object.assign({}, this.state.allTokens);
		Object.keys(this.state.allTokens)
			.filter(key => key.includes(`base.${colorName}`))
			.forEach(path => {
				const token = tokens[path];
				const lightness = delta/2 + token.hsl[2];
				const hsl = [
					hue,
					token.hsl[1],
					lightness,
				];
				const value = chroma.hsl(hsl).hex();
				updateToken({ path, value, tokens, hsl });
			});

		this.setState({
			colorSettings,
			allTokens: tokens
		});
	}
	
	setSaturation = ({colorName, value}) => {
		const colorSettings = Object.assign({}, this.state.colorSettings, {
			[colorName]: Object.assign({}, this.state.colorSettings[colorName], {
				saturation: value
			})
		});
		const delta = colorSettings[colorName].saturation - this.state.colorSettings[colorName].saturation;
		const hue = colorSettings[colorName].hue;
		
		const tokens = Object.assign({}, this.state.allTokens);
		Object.keys(this.state.allTokens)
			.filter(key => key.includes(`base.${colorName}`))
			.forEach(path => {
				const token = tokens[path];
				const saturation = delta/2 + token.hsl[1];
				const hsl = [
					hue,
					saturation < 0 ? 0 : saturation,
					token.hsl[2]
				];
				const value = chroma.hsl(hsl).hex();
				updateToken({ path, value, tokens, hsl });
			});

		this.setState({
			colorSettings,
			allTokens: tokens
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
		
		const { allTokens, currentTheme, theme, themeName, exportModal, colorSettings } = this.state;
		
		const activityBar = allTokens[`application.activityBar.inactiveForeground`] && allTokens[`application.activityBar.inactiveForeground`].value;
		const tokenNames = Object.keys(allTokens);
		const cssProperties = tokenNames.reduce((obj, name) => {
			const token = allTokens[name];
			if (!token) { return obj }
			
			obj[`--${name.replace(/\./g,'-')}`] = tokenToCSS(token);
			
			return obj;
		}, {});
		
		// TODO: finish dark mode
		// document.body.className = this.state.browserTheme;
		
		return (
			<Router>
				<div id="app" className={`app ${currentTheme}`} style={cssProperties}>
					
					<ScrollToTop />
					<Switch>
						<Route exact path="/">
							<HomePage
								currentTheme={currentTheme}
								allTokens={allTokens}
								setAllTokens={this.setAllTokens}
								importTheme={this.importTheme}
								setState={this.setState.bind(this)}
								changeTheme={this.changeTheme}
								clearState={this.clearState}
								resetState={this.resetState} />
						</Route>
						{/* <Route path="/test" component={TestPage} /> */}
						<Route path="/editor">
							<Header showExport={() => this.setState({exportModal: true})}
								themeName={themeName}
								updateThemeName={this.updateThemeName} />
						
							<Panels>
								<div className="editor-pane">
									<Route path="/editor">
										<SecondaryHeader clearState={this.clearState} resetState={this.resetState} changeTheme={this.changeTheme} currentTheme={currentTheme} />
										<Switch>
										<Route path="/editor/base">
											<BasePage
												tokens={allTokens}
												setHue={this.setHue}
												setSaturation={this.setSaturation}
												setLightness={this.setLightness}
												colorSettings={colorSettings}
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
									</Route>
								</div>
								
								{({windowWidth,mainWidth}) => (
									<div className="preview-pane">
										<div className="preview-pane-controls columns">
											<div>Preview:</div>
											<RadioGrid items={[{
													value: 'dark', checked: currentTheme === 'dark'
												},{
													value: 'light', checked: currentTheme === 'light'
												}]}
												onChange={(e) => this.changeTheme({value: e.target.value})} />
										</div>

										<Workbench theme={currentTheme} activityBarInactive={activityBar}>
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
					{exportModal ? <Modal hideModal={() => this.setState({exportModal: false})}><ExportPage
											theme={theme}
											themeName={themeName}
											updateThemeName={this.updateThemeName}
											currentTheme={currentTheme}
											allTokens={allTokens} /></Modal> : null}
				</div>
			</Router>
		)
	}
}

export default App
