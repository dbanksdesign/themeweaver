import React from 'react';
import chroma from 'chroma-js';
import stripJsonComments from 'strip-json-comments';

import {dark} from '../tokens/theme';
import {allTokens} from '../tokens/index';
import createRandomStarter from '../helpers/createRandomStarter';
import createAllTokens from '../helpers/createAllTokens';

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
		return (
			<div className="alert error">
				{JSON.stringify(error)}
			</div>
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
			<section>
				<h2>{name}</h2>
				<p>{type}</p>
				<p>{applicationColors} application colors</p>
				<p>{syntaxColors} syntax colors</p>
			</section>
		)
	} else {
		return null;
	}
}

class ImportPage extends React.Component {
	state = {
		uri: '',
		isValidURL: false
	}
	
	import = () => {
		fetch(this.state.uri, {mode: 'no-cors'})
			.then(response => {
				console.log(response);
				if (!response.ok) {
					console.log('hi');
					return Promise.reject({
						error: 'There was an issue with the URL provided',
					})
				}
				return response;
			})
			.then((response) => {
				try {
					return response.text();
				} catch (error) {
					return Promise.reject({
						error: 'There was an issue with the URL provided'
					})
				}
			})
			.then(text => {
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
			
			this.props.importTheme({
				syntax: massageSyntax(data.tokenColors),
				application: massageApplication(data.colors),
				type
			});
			this.setState({
				themeData: data,
				errors: []
			});
		} catch (error) {
			this.setState({error});
		}
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
		const newTokens = Object.assign({}, allTokens, {...dark}, createRandomStarter());
		this.props.setAllTokens(newTokens);
	}
	
	handleFileRead = () => {
		const content = this.fileReader.result;
		try {
			const themeData = JSON.parse(content);
			const {allTokens, theme, name} = themeData;
			// if it has allTokens that means it is a plain themewever theme
			if (allTokens) {
				this.props.setState({
					allTokens: createAllTokens(allTokens),
					theme,
					themeName: name
				});
			} else {
				this.importVSCode(themeData);
			}

			this.setState({
				themeData
			});
		} catch (error) {
			console.log(error);
		}
	}
	
	onUpload = (e) => {
		this.fileReader = new FileReader();
		this.fileReader.onloadend = this.handleFileRead;
		this.fileReader.readAsText(e.target.files[0]);
	}
	
	render() {
		const { clearState, resetState } = this.props;
		const { themeData, uri, error } = this.state;
		return (
			<div className="page-content" id="page-content">
				<div className="page-content-inner flow">
					<h1>Get Started</h1>
					
					<section>
						<h2>Pick a starter</h2>
						<button onClick={resetState}>Nu Disco (default)</button>
						<button onClick={this.createRandom}>Randomize!</button>
						<button onClick={clearState}>Start fresh (no colors defined)</button>
					</section>
					
					<section>
						<h2>Or use an existing theme</h2>
						<p>You can import a previously made Themeweaver theme by importing the <code>themweaver.config.json</code> file.</p>
						
						<p>You can also import a VSCode theme file. </p>
						
						<input className="file-uploader" type="file" placeholder="upload src" onChange={this.onUpload} />
						
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
			</div>
		)
	}
}

export default ImportPage
