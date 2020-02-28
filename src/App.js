import React, { Component } from 'react';
import { monaco } from "@monaco-editor/react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as immutable from 'object-path-immutable';
import tokens from './tokens';
import Group from './components/Group';
import Editor from './components/Editor';
import VSEditor from './components/VSEditor';
import Nav from './components/Nav';
import CSSVars from './components/CSSVars';
import resolveReference from './helpers/resolveReference';
import flattenObject from './helpers/flattenObject';

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
	
	handleEditorChange = (ev, newValue) => {
		// console.log(newValue);
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
	
	render() {
		return (
			<Router>
				<Nav />
				<div onClick={this.changeTheme}>Current theme: {this.state.currentTheme}</div>
				
				<CSSVars tokens={this.state.resolvedTokens} />
				
				<Switch>
					<Route exact path="/">
						<Group object={this.state.tokens} updateToken={this.updateToken} resolveReference={this.resolveReference} currentTheme={this.state.currentTheme} />
					</Route>
					<Route path="/core">
						<h2>Core Colors</h2>
						<Group object={this.state.tokens.core} path={['core']} updateToken={this.updateToken} resolveReference={this.resolveReference} currentTheme={this.state.currentTheme} />
					</Route>
					<Route path="/theme">
						<h2>Theme Colors</h2>
						<Group object={this.state.tokens.theme} path={['theme']} updateToken={this.updateToken} resolveReference={this.resolveReference} currentTheme={this.state.currentTheme} />
					</Route>
					<Route path="/application">
						<h2>Application Colors</h2>
						<Group object={this.state.tokens.application} path={['application']} updateToken={this.updateToken} resolveReference={this.resolveReference} currentTheme={this.state.currentTheme} />
					</Route>
					<Route path="/syntax">
						<h2>Syntax Colors</h2>
						<Group object={this.state.tokens.syntax} path={['syntax']} updateToken={this.updateToken} resolveReference={this.resolveReference} currentTheme={this.state.currentTheme} />
					</Route>
					<Route path="/editor">
						{/* <Editor onChange={this.handleEditorChange} value={JSON.stringify(this.state.tokens, null, 2)} /> */}
						<VSEditor onChange={this.handleEditorChange} value={JSON.stringify(this.state.tokens, null, 2)} />
					</Route>
				</Switch>

			</Router>
		)
	}
}

export default App
