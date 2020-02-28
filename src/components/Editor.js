import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";

class Editor extends React.Component {
	render() {
		return (
			<AceEditor
				mode="javascript"
				theme="solarized_dark"
				onChange={this.props.onChange}
				name="UNIQUE_ID_OF_DIV"
				value={this.props.value}
				width="100%"
				height="100vh"
				editorProps={{ $blockScrolling: true }} />
		)
	}
}

export default Editor;
