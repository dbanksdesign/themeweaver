import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const tokenizeSyntaxTokens = (tokenObject, background, foreground) => {
	const toRet = [{ background, foreground }];
	Object.keys(tokenObject).forEach(key => {
		const token = {};
		// if *
		if (key.indexOf('*') > -1) {
			token.token = key.replace('.*','');
		} else {
			token.token = key;
		}
		// if .fontStyle
		if (key.indexOf('.fontStyle') > -1) { return; }
		
		token.foreground = tokenObject[key];
		toRet.push(token);
	});
	return toRet;
}

class VSEditor extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}
	
	handleEditorChange = (value, e) => {
		this.props.onChange(e, value);
	}
	
	defineTheme = () => {
		this.monaco.editor.defineTheme(`myTheme`, {
			base: 'vs-dark',
			inherit: false,
			rules: tokenizeSyntaxTokens(
				this.props.syntaxTokens,
				this.props.applicationTokens[`editor.background`],
				this.props.applicationTokens[`editor.foreground`]
			),
			colors: this.props.applicationTokens
		});
		this.monaco.editor.setTheme(`myTheme`);
	}
	
	handleEditorDidMount = (editor, monaco) => {
		this.monaco = monaco;
		this.editor = editor;
		console.log(this.editor);
		console.log(this.monaco);

		this.defineTheme();
	}
	
	render() {
		if (this.monaco) {
			this.defineTheme();
		}
		return (
			<MonacoEditor
				height="100vh"
				width="100%"
				ref="monaco"
				theme="myTheme"
				value={this.props.value}
				onChange={this.handleEditorChange}
				editorDidMount={this.handleEditorDidMount}
				options={{
					minimap: {
						enabled: false
					}
				}}
				language="json" />
		);
	}
}

export default VSEditor
