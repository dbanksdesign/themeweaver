import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {dark, light} from './tokens/theme';
import {allTokens as _allTokens} from './tokens/index';
import CSSVars from './components/CSSVars';
import Header from './components/Header';
import ScrollTop from './components/ScrollTop';
import createAllTokens from './helpers/createAllTokens';
import updateToken from './helpers/updateToken';
import { lsSet, lsGet } from './helpers/localStorage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EditorPage from './pages/EditorPage';

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
		
		return (
			<Router>
				<div className="app">
					{/* <ScrollTop /> */}
					{/* <Header /> */}
					<CSSVars tokens={allTokens} />
				
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/about">
							<AboutPage />
						</Route>
						<Route path="/editor">
							<EditorPage
								allTokens={allTokens}
								updateToken={this.updateToken}
								updateTokens={this.updateTokens}
								currentTheme={this.currentTheme}
								changeTheme={this.changeTheme}
								updateFontStyle={this.updateFontStyle}
								resetState={this.resetState}
								updateThemeName={this.updateThemeName}
								theme={theme}
								currentTheme={currentTheme}
								themeName={themeName} />
						</Route>
					</Switch>
					
				</div>
			</Router>
		)
	}
}

export default App
