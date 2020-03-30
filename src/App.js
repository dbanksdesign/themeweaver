import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {dark as _dark, light as _light} from './tokens/theme';
import {allTokens as _allTokens} from './tokens/index';
import CSSVars from './components/CSSVars';
import Header from './components/Header';
import ScrollTop from './components/ScrollTop';
import Workbench from './components/VSCode/Workbench';
import VSCodeEditor from './components/VSCode/Editor';
import resolveReference from './helpers/resolveReference';
import generateTokenObjects from './helpers/generateTokenObjects';
import createResolvedTokenObject from './helpers/createResolvedTokenObject';
import { lsSet, lsGet } from './helpers/localStorage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DownloadPage from './pages/DownloadPage';
import BasePage from './pages/BasePage';
import ThemePage from './pages/ThemePage';
import ApplicationPage from './pages/ApplicationPage';
import SyntaxPage from './pages/SyntaxPage';

const createToken = (key, value, tokenObject, reverse = {}) => {
	const [computedValue, refs] = resolveReference(value, tokenObject);
	if (refs && refs.length) {
		refs.forEach(ref => {
			if (ref && ref.indexOf('{') > -1) {
				// TODO: handle alpha
				let name = ref;
				ref.replace(/\{([^}]+)\}/gi, (match, variable) => {
					name = variable;
				});
				reverse[name] = reverse[name] || [];
				reverse[name].push(key)
			}
		});
	}

	// value will be a string the first time, then an object
	// all other times...
	if (value && typeof value !== 'string') {
		value = value.value;
	}
	return {
		refs,
		computedValue,
		value
	}
}

// Will resolve all references and create reference & reverseRef
// arrays on tokens.
const createAllTokens = (tokenObject) => {
	const reverse = {};
	const allTokens = {};

	for (const key in tokenObject) {
		if (tokenObject.hasOwnProperty(key)) {
			let originalValue = tokenObject[key];
			// syntax tokens are objects
			if (originalValue.hasOwnProperty('foreground')) {
				const foreground = createToken(key, originalValue.foreground, tokenObject, reverse);
				const background = createToken(key, originalValue.background, tokenObject, reverse);
				allTokens[key] = {
					foreground,
					background,
					fontStyle: originalValue.fontStyle
				};
			} else {
				const newToken = createToken(key, originalValue, tokenObject, reverse);
				allTokens[key] = newToken;
			}
		}
	}
	
	for (const key in reverse) {
		if (reverse.hasOwnProperty(key)) {
			if (allTokens[key]) {
				allTokens[key].reverseLookup = reverse[key];
			} else {
				console.log(`reverse lookup couldn't find ${key}`);
				console.log(reverse[key]);
			}
		}
	}
	
	return allTokens;
}
const theme = {
	dark: _dark,
	light: _light
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

class App extends Component {
	constructor(props) {
		super(props);
		let initialState;
		// Uncomment this when going live, commenting out so hot reloads work.
		// initialState = lsGet('state');
		
		if (initialState) {
			this.state = initialState;
		} else {
			this.state = defaultState;
		}
		document.body.classList.add(this.state.defaultTheme);
	}
	
	updateTokens = ( _tokens ) => {
		const tokens = Object.assign({}, this.state.allTokens);
		_tokens.forEach(({path, value}) => {
			this._updateToken({ path, value, tokens });
		});
		this.setState({
			allTokens: tokens
		});
	}
	
	_updateToken = ({ path, value, secondaryKey, tokens }) => {
		// if it is a theme token, update the current theme object
		// const {currentTheme} = state;
		// const newTheme = Object.assign({}, state.theme[currentTheme]);
		// if (path.startsWith('theme')) {
		// 	newTheme[path] = value;
		// }

		// const newTokens = Object.assign({}, tokens);
		let newToken = tokens[path];
		let [computedValue, refs] = resolveReference(value, tokens);
		let undefinedToken;
		
		// if this is a syntax token, use the secondary key as well
		if (secondaryKey) {
			newToken = newToken[secondaryKey];
		}
		
		const oldRefs = newToken.refs;
		const oldReverse = newToken.reverseLookup;
		
		// Don't update the computed value if it is undefined
		if (!computedValue) {
			undefinedToken = true;
			computedValue = newToken.computedValue;
		}
		
		newToken = Object.assign({}, newToken, {
			value,
			refs,
			computedValue
		});
		
		if (secondaryKey) {
			// Gotta be a better way to do this
			tokens[path][secondaryKey] = newToken;
		} else {
			tokens[path] = newToken;
		}
		
		// If the resolved token is undefined, don't change
		// the computed value yet. This creates a weird experience
		// when editing tokens.
		if (!undefinedToken) {
			// update references
			if (refs && refs.length) {
				// Update reverseLookup for references
				refs.forEach(ref => {
					if (ref && ref.indexOf('{') > -1) {
						let name = ref;
						ref.replace(/\{([^}]+)\}/gi, (match, variable) => {
							name = variable;
						});
						const newReverseLookup = tokens[name].reverseLookup || [];
						newReverseLookup.push(path);
						// Set creates unique values
						tokens[name].reverseLookup = Array.from(
							new Set(newReverseLookup.concat(oldReverse))
						).sort();
					}
				});
			}
			
			// un-ref old refs
			if (oldRefs && oldRefs.length) {
				oldRefs.forEach(ref => {
					if (ref && ref.indexOf('{') > -1) {
						let name = ref;
						ref.replace(/\{([^}]+)\}/gi, (match, variable) => {
							name = variable;
						});
						// old reference might be undefined because the text input
						// might not have finished
						const oldRef = tokens[name];
						if (oldRef) {
							const reverseLookup = tokens[name].reverseLookup;
							tokens[name].reverseLookup = reverseLookup
								.filter(key => ![path].concat(oldReverse).includes(key));
						}
					}
				});
			}

			// update tokens that reference this one (if it has any)
			if (newToken.reverseLookup) {
				newToken.reverseLookup.forEach(key => {
					const reverseToken = tokens[key];
					
					// Syntax tokens are objects with background & foreground
					if (reverseToken.hasOwnProperty('foreground')) {
						const background = createToken(key, reverseToken.background.value, tokens);
						const foreground = createToken(key, reverseToken.foreground.value, tokens);
						tokens[key] = Object.assign({}, tokens[key], {
							background,
							foreground
						});
					} else {
						const val = tokens[key].value;
						let [computedValue, refs] = resolveReference(val, tokens, [val]);
	
						tokens[key] = Object.assign({}, tokens[key], {
							refs,
							computedValue
						});
					}
				});
			}
		}
		// console.log(newTokens);
		// state = {
		// 	currentTheme: state.currentTheme,
		// 	theme: {
		// 		...state.theme,
		// 		[currentTheme]: newTheme
		// 	},
		// 	allTokens: newTokens
		// }
	}
	
	// Should probs refactor this as it is a giant method...
	updateToken = ({ path, value, secondaryKey }) => {
		// if it is a theme token, update the current theme object
		const {currentTheme} = this.state;
		const newTheme = Object.assign({}, this.state.theme[currentTheme]);
		if (path.startsWith('theme')) {
			newTheme[path] = value;
		}

		const newTokens = Object.assign({}, this.state.allTokens);
		let newToken = newTokens[path];
		let [computedValue, refs] = resolveReference(value, this.state.allTokens);
		let undefinedToken;
		
		// if this is a syntax token, use the secondary key as well
		if (secondaryKey) {
			newToken = newToken[secondaryKey];
		}
		
		const oldRefs = newToken.refs;
		const oldReverse = newToken.reverseLookup;
		
		// Don't update the computed value if it is undefined
		if (!computedValue) {
			undefinedToken = true;
			computedValue = newToken.computedValue;
		}
		
		newToken = Object.assign({}, newToken, {
			value,
			refs,
			computedValue
		});
		
		if (secondaryKey) {
			// Gotta be a better way to do this
			newTokens[path][secondaryKey] = newToken;
		} else {
			newTokens[path] = newToken;
		}
		
		// If the resolved token is undefined, don't change
		// the computed value yet. This creates a weird experience
		// when editing tokens.
		if (!undefinedToken) {
			// update references
			if (refs && refs.length) {
				// Update reverseLookup for references
				refs.forEach(ref => {
					if (ref && ref.indexOf('{') > -1) {
						let name = ref;
						ref.replace(/\{([^}]+)\}/gi, (match, variable) => {
							name = variable;
						});
						const newReverseLookup = newTokens[name].reverseLookup || [];
						newReverseLookup.push(path);
						// Set creates unique values
						newTokens[name].reverseLookup = Array.from(
							new Set(newReverseLookup.concat(oldReverse))
						).sort();
					}
				});
			}
			
			// un-ref old refs
			if (oldRefs && oldRefs.length) {
				oldRefs.forEach(ref => {
					if (ref && ref.indexOf('{') > -1) {
						let name = ref;
						ref.replace(/\{([^}]+)\}/gi, (match, variable) => {
							name = variable;
						});
						// old reference might be undefined because the text input
						// might not have finished
						const oldRef = newTokens[name];
						if (oldRef) {
							const reverseLookup = newTokens[name].reverseLookup;
							newTokens[name].reverseLookup = reverseLookup
								.filter(key => ![path].concat(oldReverse).includes(key));
						}
					}
				});
			}

			// update tokens that reference this one (if it has any)
			if (newToken.reverseLookup) {
				newToken.reverseLookup.forEach(key => {
					const reverseToken = newTokens[key];
					
					// Syntax tokens are objects with background & foreground
					if (reverseToken.hasOwnProperty('foreground')) {
						const background = createToken(key, reverseToken.background.value, newTokens);
						const foreground = createToken(key, reverseToken.foreground.value, newTokens);
						newTokens[key] = Object.assign({}, newTokens[key], {
							background,
							foreground
						});
					} else {
						const val = newTokens[key].value;
						let [computedValue, refs] = resolveReference(val, newTokens, [val]);
	
						newTokens[key] = Object.assign({}, newTokens[key], {
							refs,
							computedValue
						});
					}
				});
			}
		}
		
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
	
	changeTheme = () => {
		const newTheme = this.state.currentTheme === 'dark' ? 'light' : 'dark';
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
	
	changeColorType = () => {
		this.setState({
			colorType: this.state.colorType === `hex` ? `hsl` : `hex`
		});
	}
	
	importTheme = (newTokens) => {
		const allTokens = createAllTokens({
			...newTokens.application,
			...newTokens.syntax,
		});

		this.setState({
			allTokens
		});
	}
	
	resetState = () => {
		this.setState(defaultState);
	}
	
	updateThemeName = (name) => {
		this.setState({
			themeName: name
		});
	}
	
	render() {
		// save state to localstorage
		lsSet('state', this.state);
		
		const tokenNames = Object.keys(this.state.allTokens);
		const {
			baseTokens,
			themeTokens,
			syntaxTokens,
			applicationTokens
		} = generateTokenObjects(this.state.allTokens);
		
		const resolvedSyntaxTokens = createResolvedTokenObject(this.state.allTokens, `syntax`);
		const resolvedApplicationTokens = createResolvedTokenObject(this.state.allTokens, `application`);
		
		const { allTokens, currentTheme, theme, themeName } = this.state;
		
		return (
			<Router>
				<div className="app">
					<ScrollTop />
					<Header />
					<CSSVars tokens={allTokens} />
				
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route>
						<div className="editor-pane">
						<Switch>
							<Route path="/about">
								<AboutPage />
							</Route>
							<Route path="/download">
								<DownloadPage
									theme={theme}
									themeName={themeName}
									updateThemeName={this.updateThemeName}
									currentTheme={currentTheme}
									allTokens={allTokens} />
							</Route>
							<Route path="/base">
								<BasePage
									tokens={baseTokens}
									colorType={this.state.colorType}
									updateColorType={this.updateColorType}
									updateTokens={this.updateTokens}
									updateToken={this.updateToken}
									resetState={this.resetState} />
							</Route>
							<Route path="/theme">
								<ThemePage
									tokens={themeTokens}
									tokenNames={tokenNames}
									currentTheme={currentTheme}
									changeTheme={this.changeTheme}
									updateToken={this.updateToken} />
							</Route>
							<Route path="/application">
								<ApplicationPage
									tokens={applicationTokens}
									tokenNames={tokenNames}
									updateToken={this.updateToken} />
							</Route>
							<Route path="/syntax">
								<SyntaxPage
									tokens={syntaxTokens}
									tokenNames={tokenNames}
									updateFontStyle={this.updateFontStyle}
									updateToken={this.updateToken} />
							</Route>
						</Switch>
					</div>

					<div className="preview-pane vscode">
						<Workbench>
							<VSCodeEditor
								currentTheme={currentTheme}
								syntaxTokens={resolvedSyntaxTokens}
								applicationTokens={resolvedApplicationTokens} />
						</Workbench>
					</div>
						</Route>
					</Switch>
				

				</div>
			</Router>
		)
	}
}

export default App
