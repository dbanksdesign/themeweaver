import React from 'react';
import chroma from 'chroma-js';
import stripJsonComments from 'strip-json-comments';

import {dark, light} from '../../tokens/theme';
import {allTokens} from '../../tokens/index';
import {starters, createRandomStarter} from '../../helpers/createStarter';
import createAllTokens from '../../helpers/createAllTokens';
import FileInput from '../FileInput';
import Alert from '../Alert';
import StarterButton from '../StarterButton';
import vscodeToTheme from '../../helpers/vscodeToTheme';
import getColorSettings from '../../helpers/getColorSettings';

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
			const allTokens = createAllTokens(newTheme);
			
			this.props.setState({
				allTokens,
				colorSettings: getColorSettings(allTokens),
				multiTheme: false,
				currentTheme: type
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
		const newTokens = starters[themeName];
		const theme = this.props.currentTheme === 'dark' ? dark : light;
		if (newTokens) {
			this.props.setAllTokens({
				...allTokens,
				...theme,
				...newTokens
			});
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
		const theme = this.props.currentTheme === 'dark' ? dark : light;
		this.props.setAllTokens({
			...allTokens,
			...theme,
			...createRandomStarter()
		});
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
		const { themeData, uri, error } = this.state;
		return (
			<div className="importer">
				<section className="flow">
					<h2>Pick a starter</h2>
					
					{Object.keys(starters).map(starterName => {
						const starter = starters[starterName];
						return (
							<StarterButton onClick={() => this.loadTheme(starterName)}
								key={starterName}
								label={starterName}
								bg={starter[`base.neutral.0`]}
								darkBg={starter[`base.neutral.100`]}
								darkColors={starter.info.darkColors}
								colors={starter.info.colors} />
						)
					})}
					<button className="button block" onClick={this.createRandom}>
						<span className="codicon" role="img" aria-label="">🎲</span>
						Randomize!
					</button>
					
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
