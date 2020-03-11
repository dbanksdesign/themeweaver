import React from 'react';

// This doesn't handle nested scopes (scopes with spaces) like:
// source.elixir support.type.elixir
const massageSyntax = (tokenColors) => {
	const syntaxObject = {};
	tokenColors.forEach(({scope, settings}) => {
		if (typeof scope === 'string') {
			syntaxObject[`syntax.${scope}`] = settings;
		} else {
			if (scope && scope.length) {
				scope.forEach(scope => {
					if (scope.indexOf(' ') < 0) {
						syntaxObject[scope] = settings;
					} else {
						// console.log(scope);
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
		// const path = key.split('.');
		// let obj = tokenObject;
		// for (let index = 0; index < path.length; index++) {
		// 	const element = path[index];
		// 	// console.log(element);
		// 	if (!obj.hasOwnProperty(element)) {
		// 		obj[element] = {}
		// 	}
		// 	obj = obj[element];
		// }
		// obj.value = theme.colors[key];
	});
	return tokenObject;
}

class Importer extends React.Component {
	state = {
		uri: ''
	}
	
	import = () => {
		console.log(this.state.uri);
		fetch(this.state.uri).then((response) => {
			try {
				return response.json();
			} catch (error) {
				console.log(error);
			}
		}).then((data) => {
			this.props.importTheme({
				syntax: massageSyntax(data.tokenColors),
				application: massageApplication(data.colors)
			});
		});
	}
	
	handleChange = (e) => {
		this.setState({
			uri: e.target.value
		});
	}
	
	render() {
		return (
			<div>
				<input type="text" value={this.state.uri} onChange={this.handleChange} />
				<button onClick={this.import}>Import!</button>
			</div>
		)
	}
}

export default Importer
