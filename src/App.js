import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {dark as _dark, light as _light} from './_themes';
import _application from './_application';
import _syntax from './_syntax';
import CSSVars from './components/CSSVars';
import Header from './components/Header';
import Page from './components/Page';
import ScrollTop from './components/ScrollTop';
import Workbench from './components/VSCode/Workbench';
import VSCodeEditor from './components/VSCode/Editor';
import AboutPage from './pages/AboutPage';
import resolveReference from './helpers/resolveReference';
import generateTokenObjects from './helpers/generateTokenObjects';
import createResolvedTokenObject from './helpers/createResolvedTokenObject';
import { lsSet, lsGet } from './helpers/localStorage';
import CorePage from './pages/CorePage';
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

class App extends Component {
	constructor(props) {
		super(props);
		let initialState;
		// Uncomment this when going live, commenting out so hot reloads work.
		// const initialState = lsGet('state');
		
		if (initialState) {
			this.state = initialState;
		} else {
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
			
			document.body.classList.add(defaultTheme);

			this.state = {
				theme,
				allTokens,
				currentTheme: defaultTheme,
			};
		}
		
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
		// save state to localstorage
		lsSet('state', this.state);
		
		const tokenNames = Object.keys(this.state.allTokens);
		const {
			coreTokens,
			themeTokens,
			syntaxTokens,
			applicationTokens
		} = generateTokenObjects(this.state.allTokens);
		
		const resolvedSyntaxTokens = createResolvedTokenObject(this.state.allTokens, `syntax`);
		const resolvedApplicationTokens = createResolvedTokenObject(this.state.allTokens, `application`);
		
		return (
			<Router>
				<div className="app">
					<ScrollTop />
					<Header />
					<CSSVars tokens={this.state.allTokens} />
				
					<div className="editor-pane">
					<Switch>
						<Route exact path="/">
							<Page title="About">
								<AboutPage />
							</Page>
						</Route>
						<Route path="/core">
							<CorePage
								tokens={coreTokens}
								updateToken={this.updateToken} />
						</Route>
						<Route path="/theme">
							<ThemePage
								tokens={themeTokens}
								tokenNames={tokenNames}
								currentTheme={this.state.currentTheme}
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
							currentTheme={this.state.currentTheme}
							syntaxTokens={resolvedSyntaxTokens}
							applicationTokens={resolvedApplicationTokens} />
					</Workbench>
				</div>
				
					{/* <Switch>
						<Route exact path="/">
							<Page title="About">
								<AboutPage />
							</Page>
						</Route>
						<Route path="/editor">
							<EditorPage
								allTokens={this.state.allTokens}
								updateToken={this.updateToken}
								updateFontStyle={this.updateFontStyle}
								currentTheme={this.state.currentTheme}
								changeTheme={this.changeTheme}
								importTheme={this.importTheme} />
						</Route>
					</Switch> */}
				</div>
			</Router>
		)
	}
}

export default App
