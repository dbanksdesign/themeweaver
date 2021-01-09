import React from 'react';
import chroma from 'chroma-js';
import stripJsonComments from 'strip-json-comments';

import {dark, light} from '../../tokens/theme';
import {allTokens} from '../../tokens/index';
// import {allTokens as nightOwlTokens} from '../../tokens/night-owl';
import createRandomStarter from '../../helpers/createRandomStarter';
import createAllTokens from '../../helpers/createAllTokens';
import FileInput from '../FileInput';
import Alert from '../Alert';
import vscodeToTheme from '../../helpers/vscodeToTheme';

// This doesn't handle nested scopes (scopes with spaces) like:
// source.elixir support.type.elixir
const massageSyntax = (tokenColors) => {
	const syntaxObject = {};
	const ignoredScopes = {};
	tokenColors.forEach(({scope, settings}) => {
		if (typeof scope === 'string') {
			syntaxObject[`syntax.${scope}`] = settings;
		} else {
			if (scope && scope.length) {
				scope.forEach(scope => {
					if (scope.indexOf(' ') < 0) {
						syntaxObject[`syntax.${scope}`] = settings;
					} else {
						ignoredScopes[scope] = settings;
					}
				});
			}
		}
	});
	return syntaxObject;
}

const massageApplication = (colors) => {
	const tokenObject = {};
	Object.keys(colors).forEach(key => {
		tokenObject[`application.${key}`] = colors[key];
	});
	return tokenObject;
}

const Errors = ({error}) => {
	if (error) {
		const content = typeof error === 'string' ? error : JSON.stringify(error);
		return (
			<Alert variant="danger">
				{content}
			</Alert>
		)
	} else {
		return null;
	}
}

const ThemeData = ({ name, tokenColors, colors, allTokens, type }) => {
	if (name) {
		let applicationColors;
		let syntaxColors;
		if (allTokens) {
			const keys = Object.keys(allTokens);
			applicationColors = keys.filter(key => key.startsWith('application')).length;
			syntaxColors = keys.filter(key => key.startsWith('syntax')).length;
		} else {
			applicationColors = Object.keys(colors).length;
			syntaxColors = tokenColors.length;
		}
		return (
			<Alert variant="success">
				<h2>{name}</h2>
				<p>Type: {type}</p>
				<p>{applicationColors} application colors</p>
				<p>{syntaxColors} syntax colors</p>
			</Alert>
		)
	} else {
		return null;
	}
}

const randomThemeSettings = {
	bordered: {
		'application.sideBar.border': '{theme.border.primary}',
		'application.activityBar.border': '{theme.border.primary}',
		'application.panel.border': '{theme.border.primary}',
		'application.statusBar.border': '{theme.border.primary}'
	},
	singleBackground: {
		'application.sideBar.background': '{theme.background.primary}',
		'application.activityBar.background': '{theme.background.primary}',
		'application.panel.background': '{theme.background.primary}',
		'application.statusBar.background': '{theme.background.primary}',
	},
	highlightedTab: {
		'application.tab.activeBackground': '{theme.background.interactive.base}'
	},
	borderedTab: {
		'application.tab.activeBorderTop': '{theme.border.active}'
	},
	coloredStatusBar: {
		'application.statusBar.background': '{theme.background.selection.secondary.active}',
		'application.statusBar.foreground': '{theme.font.primary}',
		'application.statusBar.border': '{theme.border.info}',
	}
}

const getRandom = (arr, n) => {
	var result = new Array(n),
			len = arr.length,
			taken = new Array(len);
	if (n > len)
			throw new RangeError("getRandom: more elements taken than available");
	while (n--) {
			var x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
}

export default class Importer extends React.Component {
	state = {
		uri: '',
		isValidURL: false
	}
	
	import = () => {
		if (!this.state.isValidURL) {
			this.setState({
				error: 'Please enter a valid URL'
			});
			return;
		}
		
		fetch(this.state.uri)
			.then(response => {
				if (!response.ok) {
					return Promise.reject({
						error: 'There was an issue with the URL provided',
					})
				}
				return response.text();
			})
			.then((text) => {
				try {
					return JSON.parse(stripJsonComments(text));
				} catch (error) {
					return Promise.reject({
						error: 'There was an error parsing the JSON'
					})
				}
			})
			.then((data) => {
				this.importVSCode(data);
			})
			.catch(({error}) => {
				this.setState({error});
			});
	}
	
	importVSCode = (data) => {
		try {
			let type = 'dark';
			if (data.type) {
				type = data.type;
			} else {
				if (data.tokenColors['editor.background']) {
					type = chroma(data.tokenColors['editor.background']).luminence() < 0.5 ? 'dark' : 'light';
				}
			}
			const newTheme = vscodeToTheme(data);
			console.log(newTheme);
			
			this.props.importTheme({
				syntax: massageSyntax(data.tokenColors),
				application: massageApplication(data.colors),
				base: newTheme,
				type
			});
			this.setState({
				themeData: data,
				error: null
			});
		} catch (error) {
			console.log(error);
			this.setState({error});
		}
	}
	
	loadTheme = (themeName) => {
		// this.props.setState({
		// 	allTokens: createAllTokens(nightOwlTokens)
		// });
	}
	
	handleChange = (e) => {
		this.setState({
			uri: e.target.value,
			isValidURL: e.target.checkValidity()
			// web standards FTW
			// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
		});
	}
	
	createRandom = () => {
		const theme = this.props.currentTheme === 'dark' ? dark : light;
		const configurations = Object.keys(randomThemeSettings);
		const configsLength = Math.round(Math.random() * configurations.length);
		const selectedConfigs = getRandom(configurations, configsLength);
		const themeSettings = selectedConfigs.reduce((acc, key) => {
			return {
				...acc,
				...randomThemeSettings[key]
			}
		}, {});
		console.log(themeSettings);
		const newTokens = Object.assign({},
			allTokens,
			{...theme},
			createRandomStarter(),
			{...themeSettings},
		);
		this.props.setAllTokens(newTokens);
	}
	
	onUpload = (content) => {
		try {
			const themeData = JSON.parse(content);
			const {allTokens, theme, name} = themeData;
			
			// if it has allTokens that means it is a plain themewever theme
			if (allTokens) {
				themeData.type = `Dark & Light`
				this.props.setState({
					allTokens: createAllTokens(allTokens),
					theme,
					themeName: name
				});
				this.setState({
					themeData,
					error: null
				});
			} else {
				this.importVSCode(themeData);
			}
		} catch (error) {
			this.setState({error: error.message});
		}
	}
	
	render() {
		const { resetState } = this.props;
		const { themeData, uri, error } = this.state;
		return (
			<div className="importer">
				<section className="flow">
					<h2>Pick a starter</h2>
					
					<button className="button block" onClick={resetState}>Nu Disco (default)</button>
					{/* <button className="button block" onClick={() => this.loadTheme('night-owl')}>Night Owl by Sarah Drasner</button> */}
					<button className="button block" onClick={this.createRandom}>Randomize!</button>
					{/* Note: clearing all colors won't work right now because chroma-js doesn't handle empty strings... */}
					{/* <button className="button block" onClick={clearState}>Start fresh (no colors defined)</button> */}
					
					<h2>Import an existing theme</h2>
					<p>You can import a previously made Themeweaver theme by importing the <code>themweaver.config.json</code> file. You can also import a VSCode theme file.</p>
					
					<FileInput label="upload" onUpload={this.onUpload} />
					
					<div className="tw-input-with-button">
						<input className="tw-input"
							type="url"
							value={uri}
							onChange={this.handleChange}
							placeholder="Enter a URL" />
						<button onClick={this.import}>Import</button>
					</div>
				</section>
				
				<Errors error={error} />
				<ThemeData {...themeData} />
			</div>
		)
	}
}
