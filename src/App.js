import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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

import Header from './components/Header';
import Workbench from './components/VSCode/Workbench';
import VSCodeEditor from './components/VSCode/Editor';
import Panels from './components/Panels';
import ScrollToTop from './components/ScrollTop';
import Toast from './components/Toast';
import Loader from './components/Loader';

import createResolvedTokenObject from './helpers/createResolvedTokenObject';
import RadioGrid from './components/RadioGrid';
import getColorSettings from './helpers/getColorSettings';
import chroma from 'chroma-js';
import tokenToCSS from './helpers/tokenToCSS';
import EditorPage from './pages/EditorPage';


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
	multiTheme: true,
	themeName: themeNameGenerator(),
	exportModal: false,
	importModal: false,
	theme,
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
		
		if (props.loadedTheme) {
			const { allTokens, theme, themeName } = props.loadedTheme;
			initialState = {
				allTokens: createAllTokens(allTokens),
				currentTheme: 'dark',
				theme,
				themeName
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
	
	showLoading = () => {
		this.setState({
			loading: true
		});
	}
	
	hideLoading = () => {
		this.setState({
			loading: false
		});
	}
	
	showToast = ( toast ) => {
		this.setState({
			toast
		});
		setTimeout(() => {
			this.setState({
				toast: null
			});
		}, 4000);
	}
	
	render() {
		// save state to localstorage
		lsSet('state', this.state);
		
		const { allTokens, currentTheme, theme, themeName, exportModal, colorSettings, multiTheme, loading, toast } = this.state;
		
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
			
				<div id="app" className={`app ${currentTheme}`} style={cssProperties}>
					
					<ScrollToTop />
					<Switch>
						<Route exact path="/">
							<HomePage
								currentTheme={currentTheme}
								allTokens={allTokens}
								multiTheme={multiTheme}
								setAllTokens={this.setAllTokens}
								importTheme={this.importTheme}
								setState={this.setState.bind(this)}
								changeTheme={this.changeTheme}
								clearState={this.clearState}
								resetState={this.resetState} />
						</Route>

						<Route path="/editor/:id?">
							<Header themeName={themeName}
								theme={theme}
								allTokens={allTokens}
								showLoading={this.showLoading}
								hideLoading={this.hideLoading}
								showToast={this.showToast}
								updateThemeName={this.updateThemeName} />
						
							<Panels>
								<EditorPage tabs={['Base','Theme','Application','Syntax']}
									setAllTokens={this.setAllTokens}
									updateThemeName={this.updateThemeName}>
									<BasePage
										tokens={allTokens}
										setHue={this.setHue}
										setSaturation={this.setSaturation}
										setLightness={this.setLightness}
										colorSettings={colorSettings}
										updateTokens={this.updateTokens}
										updateToken={this.updateToken}
										resetState={this.resetState} />
									<ThemePage
										tokens={allTokens}
										tokenNames={tokenNames}
										currentTheme={currentTheme}
										changeTheme={this.changeTheme}
										updateToken={this.updateToken} />
									<ApplicationPage
										tokens={allTokens}
										tokenNames={tokenNames}
										updateToken={this.updateToken} />
									<SyntaxPage
										tokens={allTokens}
										tokenNames={tokenNames}
										updateFontStyle={this.updateFontStyle}
										updateToken={this.updateToken} />
								</EditorPage>

								{({windowWidth,mainWidth}) => (
									<div className="preview-pane">
										<div className="preview-pane-controls columns">
											<div>Preview:</div>
											{multiTheme ? <RadioGrid items={[{
													value: 'dark', checked: currentTheme === 'dark'
												},{
													value: 'light', checked: currentTheme === 'light'
												}]}
												onChange={(e) => this.changeTheme({value: e.target.value})} />: null}
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
					{loading ? <Loader /> : null}
					{toast ? <Toast type={toast.type}>{toast.message}</Toast> : null}
					<input id="hidden-clipboard" />
				</div>
		)
	}
}

export default App;
