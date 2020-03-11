import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {dark as _dark, light as _light} from './_themes';
import _application from './_application';
import _syntax from './_syntax';
import Nav from './components/Nav';
import CSSVars from './components/CSSVars';
import Workbench from './components/VSCode/Workbench';
import VSCodeEditor from './components/VSCode/Editor';
import Header from './components/Header';
import Importer from './components/Importer';
import Page from './components/Page';
import AboutPage from './components/AboutPage';
import CorePage from './pages/CorePage';
import ThemePage from './pages/ThemePage';
import ApplicationPage from './pages/ApplicationPage';
import SyntaxPage from './pages/SyntaxPage';
import ColophonePage from './components/ColophonePage';
import resolveReference from './helpers/resolveReference';
import tokenizeSyntaxTokens from './helpers/tokenizeSyntaxTokens';
import download from './helpers/download';

const createResolvedTokenObject = (resolvedTokens, startsWith) => {
	return Object.keys(resolvedTokens)
		.filter(key => key.startsWith(startsWith))
		.reduce((obj, key) => {
			const token = resolvedTokens[key];
			const name = key.replace(`${startsWith}.`,``);
			// Syntax tokens are objects
			if (token.hasOwnProperty('foreground')) {
				obj[name] = {
					foreground: token.foreground.computedValue,
					background: token.background.computedValue,
					fontStyle: token.fontStyle,
				}
			} else {
				if (token.computedValue) { obj[name] = token.computedValue; }
			}
			return obj;
		}, {});
}

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
			if (!originalValue) {
				console.log(key);
				// break;
			} else {
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

class App extends Component {
	constructor(props) {
		super(props);
		
		// initial state setup
		const theme = {
			dark: _dark,
			light: _light
		}
		const defaultTheme = 'dark';
		const allTokens = createAllTokens({
			..._application,
			..._syntax,
			...theme[defaultTheme]
		});

		this.state = {
			theme,
			allTokens,
			currentTheme: defaultTheme,
		};
		
	}
	
	// handleEditorChange = (e, newValue) => {
	// 	try {
	// 		const newState = JSON.parse(newValue);
	// 		this.setState({
	// 			tokens: newState,
	// 			resolvedTokens: resolveAllRefs(
	// 				flattenObject(newState),
	// 				newState,
	// 				this.state.currentTheme
	// 			)
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
	
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
	
	changeTheme = () => {
		const newTheme = this.state.currentTheme === 'dark' ? 'light' : 'dark';
		this.setState({
			currentTheme: newTheme,
			allTokens: createAllTokens({
				...this.state.allTokens,
				...this.state.theme[newTheme]
			}),
		})
	}
	
	downloadTheme = () => {
		const theme = {
			name: ``,
			type: ``,
			colors: Object.keys(this.state.allTokens)
				.filter(key => key.startsWith(`application`))
				.reduce((obj, key) => {
					const name = key.replace(/application\./gi, ``);
					obj[name] = this.state.allTokens[key].computedValue;
					return obj;
				}, {}),
			tokenColors: tokenizeSyntaxTokens(
				createResolvedTokenObject(this.state.allTokens, `syntax`)
			)
		}
		console.log(theme);
		
		download(`${this.state.currentTheme}.json`, theme);
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
	
	render() {
		const resolvedSyntaxTokens = createResolvedTokenObject(this.state.allTokens, `syntax`);
		const resolvedApplicationTokens = createResolvedTokenObject(this.state.allTokens, `application`);
		const coreTokens = {}
		const themeTokens = {}
		const syntaxTokens = {}
		const applicationTokens = {}
		for (const key in this.state.allTokens) {
			if (this.state.allTokens.hasOwnProperty(key)) {
				const token = this.state.allTokens[key];
				if (key.startsWith('application')) {
					applicationTokens[key] = token;
				} else if (key.startsWith('syntax')) {
					syntaxTokens[key] = token;
				} else if (key.startsWith('theme')) {
					themeTokens[key] = token;
				} else if (key.startsWith('core')) {
					coreTokens[key] = token;
				}
			}
		}
			
		const tokenNames = Object.keys(this.state.allTokens);
		
		return (
			<Router>
				<div className="app">
					<Header />
					<CSSVars tokens={this.state.allTokens} />
				
				<div className="editor-pane">
				<Nav />
				<Switch>
					<Route exact path="/">
						<Page title="About">
							<AboutPage />
						</Page>
					</Route>
					<Route exact path="/colophone">
						<Page title="Colophone">
							<ColophonePage />
						</Page>
					</Route>
					<Route path="/core">
						<Page title="Core Colors">
						<CorePage
								tokens={coreTokens}
								updateToken={this.updateToken} />
						</Page>
					</Route>
					<Route path="/theme">
						<Page title="Theme Colors">
							<Importer importTheme={this.importTheme} />
							<button onClick={this.downloadTheme}>DOWNLOAD</button>
							<ThemePage
								tokens={themeTokens}
								tokenNames={tokenNames}
								currentTheme={this.state.currentTheme}
								changeTheme={this.changeTheme}
								updateToken={this.updateToken} />
						</Page>
					</Route>
					<Route path="/application">
						<Page title="Application Colors">
							<ApplicationPage
								tokens={applicationTokens}
								tokenNames={tokenNames}
								updateToken={this.updateToken} />
						</Page>
					</Route>
					<Route path="/syntax">
						<Page title="Syntax Colors">
							<SyntaxPage
								tokens={syntaxTokens}
								tokenNames={tokenNames}
								updateToken={this.updateToken} />
						</Page>
					</Route>
				</Switch>
				</div>
				
				<div className="preview-pane vscode">
					<Workbench>
						<VSCodeEditor
							syntaxTokens={resolvedSyntaxTokens}
							applicationTokens={resolvedApplicationTokens} />
					</Workbench>
				</div>
				</div>
			</Router>
		)
	}
}

export default App
