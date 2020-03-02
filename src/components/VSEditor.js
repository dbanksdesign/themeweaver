import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const tokenizeSyntaxTokens = (tokenObject) => {
	const toRet = [];
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
	
	handleEditorDidMount = (editor, monaco) => {
		this.monaco = monaco;
		this.editor = editor;
		monaco.editor.defineTheme(`myTheme`, {
			base: 'vs-dark',
			inherit: false,
			rules: tokenizeSyntaxTokens(this.props.syntaxTokens),
			colors: this.props.applicationTokens
		});
		monaco.editor.setTheme(`myTheme`);
	}
	
	render() {
		// console.log(tokenizeSyntaxTokens(this.props.syntaxTokens));
		// console.log(this.props.applicationTokens);
		if (this.monaco) {
			console.log(this.editor);
			const editor = this.monaco.editor;
			editor.defineTheme(`myTheme`, {
				base: 'vs-dark',
				inherit: false,
				rules: tokenizeSyntaxTokens(this.props.syntaxTokens),
				colors: this.props.applicationTokens
			});
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
				language="json" />
		);
	}
}

export default VSEditor
