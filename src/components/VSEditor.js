import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class VSEditor extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}
	
	handleEditorChange = (value, e) => {
		this.props.onChange(e, value);
	}
	
	render() {
		return (
			<MonacoEditor
				// height="100vh"
				// width="100%"
				ref="monaco"
				theme="myTheme"
				value={this.props.value}
				onChange={this.handleEditorChange}
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
