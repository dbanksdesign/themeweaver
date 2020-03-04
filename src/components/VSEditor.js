import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Registry } from "monaco-textmate";
import { wireTmGrammars } from "monaco-editor-textmate";

const registry = new Registry({
  getGrammarDefinition: async scopeName => {
		if (scopeName === 'source.js') {
			return {
					format: 'json', // can also be `plist`
					content: await (await fetch(`/grammers/javascript.tmLanguage.json`)).text() // when format is 'json', parsed JSON also works
			}
		}
		if (scopeName === 'source.json') {
			return {
					format: 'json', // can also be `plist`
					content: await (await fetch(`/grammers/JSON.tmLanguage.json`)).text() // when format is 'json', parsed JSON also works
			}
		}
  }
});

async function liftOff(monaco) {
  // map of monaco "language id's" to TextMate scopeNames
  const grammers = new Map();
	// grammers.set("c++", "source.cpp");
	grammers.set("javascript", "source.js");
	grammers.set("json", "source.json");

  await wireTmGrammars(monaco, registry, grammers);
}

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
	
	editorWillMount = monaco => {
		monaco.languages.register({ id: "javascript" });
		monaco.languages.register({ id: "json" });
	};
	
	handleEditorDidMount = (editor, monaco) => {
		this.monaco = monaco;
		this.editor = editor;
		console.log(this.editor);
		console.log(this.monaco);
		
		editor.focus();

    liftOff(monaco).then(() => {
      // monaco.editor.setModelLanguage(editor.getModel(), "json");
    });

		this.defineTheme();
	}
	
	render() {
		// if (this.monaco) {
		// 	this.defineTheme();
		// }
		return (
			<MonacoEditor
				height="100vh"
				width="100%"
				ref="monaco"
				theme="myTheme"
				value={this.props.value}
				onChange={this.handleEditorChange}
				// editorWillMount={this.editorWillMount}
				// editorDidMount={this.handleEditorDidMount}
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
