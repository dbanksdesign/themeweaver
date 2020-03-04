import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as immutable from 'object-path-immutable';
import tokens from './tokens';
import Group from './components/Group';
import VSEditor from './components/VSEditor';
import Nav from './components/Nav';
import CSSVars from './components/CSSVars';
import Workbench from './components/VSCode/Workbench';
import VSCodeEditor from './components/VSCode/Editor';
import Page from './components/Page';
import AboutPage from './components/AboutPage';
import ColophonePage from './components/ColophonePage';
import resolveReference from './helpers/resolveReference';
import flattenObject from './helpers/flattenObject';
import download from './helpers/download';
import validateColor from './helpers/validateColor';

const resolveAllRefs = ( object, tokens, currentTheme ) => {
	const toRet = {};
	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			const value = object[key];
			if (value.indexOf('{') > -1) {
				toRet[key] = resolveReference(value, tokens, currentTheme);
			} else {
				toRet[key] = [value];
			}
		}
	}
	return toRet;
}

const createResolvedTokenObject = (resolvedTokens, startsWith) => {
	return Object.keys(resolvedTokens)
		.filter(key => key.startsWith(startsWith))
		.reduce((prev, curr) => {
			const refs = resolvedTokens[curr];
			const key = curr.replace(`${startsWith}.`,``).replace(`.value`,``);
			const value = refs[refs.length-1];
			// make sure there is a value and it is a valid 6 or 8 bit hex
			if (value && [7,9].includes(value.length)) {
				prev[key] = value;
			} else {
				console.log(validateColor(value));
			}
			return prev;
		}, {});
}

class App extends Component {
	constructor(props) {
		super(props);
		
		// initial state setup
		const defaultTheme = 'dark';
		const flatTokens = flattenObject(tokens);
		const resolvedTokens = resolveAllRefs(flatTokens, tokens, defaultTheme);
		
		this.state = {
			tokens,
			resolvedTokens,
			currentTheme: defaultTheme,
		};
	}
	
	handleEditorChange = (e, newValue) => {
		try {
			const newState = JSON.parse(newValue);
			this.setState({
				tokens: newState,
				resolvedTokens: resolveAllRefs(
					flattenObject(newState),
					newState,
					this.state.currentTheme
				)
			});
		} catch (error) {
			console.log(error);
		}
	}
	
	updateToken = ({ path, value }) => {
		const newState = immutable.set(this.state.tokens, path, value);
		this.setState({
			tokens: newState,
			// really should do a pub/sub here for efficiency
			resolvedTokens: resolveAllRefs(
				flattenObject(newState),
				newState,
				this.state.currentTheme
			)
		});
	}
	
	resolveReference = (key) => {
		return this.state.resolvedTokens[key];
	}
	
	changeTheme = () => {
		const newTheme = this.state.currentTheme === 'dark' ? 'light' : 'dark'
		this.setState({
			currentTheme: newTheme,
			resolvedTokens: resolveAllRefs(
				flattenObject(this.state.tokens),
				this.state.tokens,
				newTheme
			)
		})
	}
	
	downloadTheme = () => {
		const theme = {
			name: ``,
			type: ``,
			colors: Object.keys(this.state.resolvedTokens)
				.filter(key => key.startsWith(`application`))
				.reduce((toRet, curr) => {
					const refs = this.state.resolvedTokens[curr];
					const name = curr.replace(/application\.|\.value/gi, ``);
					toRet[name] = refs[refs.length-1];
					return toRet;
				}, {}),
			tokenColors: Object.keys(this.state.resolvedTokens)
				.filter(key => key.startsWith(`syntax`))
				.map(key => {
					const refs = this.state.resolvedTokens[key];
					return {
						scope: key.replace(/application\.|\.value|\.\*/gi, ``),
						settings: {
							foreground: refs[refs.length-1]
						}
					}
				})
		}
		
		download(`${this.state.currentTheme}.json`, theme);
	}
	
	render() {
		const syntaxTokens = createResolvedTokenObject(this.state.resolvedTokens, `syntax`);
		const applicationTokens = createResolvedTokenObject(this.state.resolvedTokens, `application`);

		return (
			<Router>
				<div className="app">
				<Nav />
				{/* <div onClick={this.changeTheme}>Current theme: {this.state.currentTheme}</div> */}
				
				<CSSVars tokens={this.state.resolvedTokens} />
				
				<div className="editor-pane">
				<Switch>
					<Route exact path="/">
						<Page title="About">
							<AboutPage applicationBackground={this.state.tokens.application.primaryBackground} />
						</Page>
					</Route>
					<Route exact path="/colophone">
						<Page title="Colophone">
							<ColophonePage />
						</Page>
					</Route>
					<Route path="/core">
						<Page title="Core Colors">
							<Group object={this.state.tokens.core}
								path={['core']}
								updateToken={this.updateToken}
								resolveReference={this.resolveReference}
								currentTheme={this.state.currentTheme} />
						</Page>
					</Route>
					<Route path="/theme">
						<Page title="Theme Colors">
							<button onClick={this.downloadTheme}>DOWNLOAD</button>
							<Group object={this.state.tokens.theme}
								path={['theme']}
								updateToken={this.updateToken}
								resolveReference={this.resolveReference}
								currentTheme={this.state.currentTheme} />
						</Page>
					</Route>
					<Route path="/application">
						<Page title="Application Colors">
							<Group object={this.state.tokens.application}
								path={['application']}
								updateToken={this.updateToken}
								resolveReference={this.resolveReference}
								currentTheme={this.state.currentTheme} />
						</Page>
					</Route>
					<Route path="/syntax">
						<Page title="Syntax Colors">
							<Group object={this.state.tokens.syntax}
								path={['syntax']}
								updateToken={this.updateToken}
								resolveReference={this.resolveReference}
								currentTheme={this.state.currentTheme} />
						</Page>
					</Route>
					<Route path="/editor">
						<Page title="JSON Editor">
							<VSEditor
								onChange={this.handleEditorChange}
								value={JSON.stringify(this.state.tokens, null, 2)}
								syntaxTokens={syntaxTokens}
								applicationTokens={applicationTokens} />
						</Page>
					</Route>
				</Switch>
				</div>
				
				<div className="preview-pane vscode">
					<Workbench>
						<VSCodeEditor
							syntaxTokens={syntaxTokens}
							applicationTokens={applicationTokens} />
					</Workbench>
				</div>
				</div>
			</Router>
		)
	}
}

export default App
