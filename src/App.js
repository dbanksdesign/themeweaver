import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {dark, light} from './tokens/theme';
import {allTokens as _allTokens} from './tokens/index';
import CSSVars from './components/CSSVars';
import createAllTokens from './helpers/createAllTokens';
import updateToken from './helpers/updateToken';
import { lsSet, lsGet } from './helpers/localStorage';
import HomePage from './pages/HomePage';

import BasePage from './pages/BasePage';
import ThemePage from './pages/ThemePage';
import ApplicationPage from './pages/ApplicationPage';
import SyntaxPage from './pages/SyntaxPage';
import ExportPage from './pages/ExportPage';

import Header from './components/Header';
import Workbench from './components/VSCode/Workbench';
import VSCodeEditor from './components/VSCode/Editor';
import ResizablePanels from './components/ResizablePanel';
import ScrollToTop from './components/ScrollTop';

import generateTokenObjects from './helpers/generateTokenObjects';
import createResolvedTokenObject from './helpers/createResolvedTokenObject';

const theme = {
	dark,
	light,
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
		initialState = lsGet('state');
		
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
			updateToken({ path, value, tokens });
		});
		this.setState({
			allTokens: tokens
		});
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
		
		const { allTokens, currentTheme, theme, themeName } = this.state;
		
		const tokenNames = Object.keys(allTokens);
		const {
			baseTokens,
			themeTokens,
			syntaxTokens,
			applicationTokens
		} = generateTokenObjects(allTokens);
		
		return (
			<Router>
				<div className="app">
					<CSSVars tokens={Object.assign({}, applicationTokens, themeTokens)} />
					<Header resetState={this.resetState} changeTheme={this.changeTheme} currentTheme={currentTheme} />
					<ScrollToTop />
					<ResizablePanels onResize={onResize}>
						<div className="editor-pane">
							<Switch>
								<Route exact path="/">
									<HomePage />
								</Route>
								<Route path="/editor/export">
									<ExportPage
										theme={theme}
										themeName={themeName}
										updateThemeName={this.updateThemeName}
										currentTheme={currentTheme}
										allTokens={allTokens} />
								</Route>
								<Route path="/editor/base">
									<BasePage
										tokens={baseTokens}
										updateTokens={this.updateTokens}
										updateToken={this.updateToken}
										resetState={this.resetState} />
								</Route>
								<Route path="/editor/theme">
									<ThemePage
										tokens={themeTokens}
										tokenNames={tokenNames}
										currentTheme={currentTheme}
										changeTheme={this.changeTheme}
										updateToken={this.updateToken} />
								</Route>
								<Route path="/editor/application">
									<ApplicationPage
										tokens={applicationTokens}
										tokenNames={tokenNames}
										updateToken={this.updateToken} />
								</Route>
								<Route path="/editor/syntax">
									<SyntaxPage
										tokens={syntaxTokens}
										tokenNames={tokenNames}
										updateFontStyle={this.updateFontStyle}
										updateToken={this.updateToken} />
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
					</ResizablePanels>
				</div>
			</Router>
		)
	}
}

export default App
