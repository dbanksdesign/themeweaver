import React from 'react';
// import { monaco } from '@monaco-editor/react';
// import { ControlledEditor } from "@monaco-editor/react";
import MonacoEditor from 'react-monaco-editor';

class VSEditor extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}
	
	handleEditorChange = (value, e) => {
		// console.log(ev, value);
		// console.log(this.ref.current._themeService._theme.themeData);
		this.props.onChange(e, value);
	}
	
	handleEditorDidMount = (editor, monaco) => {
		console.log(editor, monaco);
		// const rules = editor._themeService._theme.themeData.rules
		// editor._themeService._theme.themeData.rules = rules.concat({
		// 	token: `string.key.json`,
		// 	foregrond: `ff9900`
		// });
		// editor._themeService._theme.themeData.colors['editor.background'] = `#ff9900`;
		// console.log(editor.setTheme);
		this.ref.current = editor;
	}
	
	render() {
		// console.log(window.monaco);
		// monaco
		// .init()
		// .then(monacoInstance => {
		// 	/* here is the instance of monaco, so you can use the `monaco.languages` or whatever you want */
		// 	monacoInstance.editor.defineTheme('myCustomTheme', {
		// 		base: 'vs', // can also be vs-dark or hc-black
		// 		inherit: true, // can also be false to completely replace the builtin rules
		// 		rules: [
		// 			{ token: 'string.quoted', foreground: '#ff9900', fontStyle: 'italic underline' },
		// 			{ token: 'comment.js', foreground: '008800', fontStyle: 'bold' },
		// 			{ token: 'comment.css', foreground: '0000ff' } // will inherit fontStyle from `comment` above
		// 		]
		// 	});
		// 	monacoInstance.editor.setTheme('myCustomTheme');
		// })
		// .catch(error =>
		// 	console.error("An error occurred during initialization of Monaco: ", error)
		// );
		return (
			<MonacoEditor
				height="90vh"
				theme="vs-dark"
				value={this.props.value}
				onChange={this.handleEditorChange}
				editorDidMount={this.handleEditorDidMount}
				language="javascript" />
		);
	}
}

export default VSEditor
