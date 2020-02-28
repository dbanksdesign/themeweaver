import React from 'react';

class CSSVar extends React.PureComponent {
	render() {
		document.documentElement.style.setProperty(
			`--${this.props.name.replace('.value','').replace(/\./g,'-')}`,
			this.props.value
		)
		return null;
	}
}

export {CSSVar}

class CSSVars extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		// compare the objects
		return JSON.stringify(nextProps.tokens) !== JSON.stringify(this.props.tokens);
	}
	
	render() {
		return (
			<>
				{Object.keys(this.props.tokens).map((key) => {
					const refs = this.props.tokens[key];
					return (
						<CSSVar name={key} value={refs[refs.length-1]} />
				)})}
			</>
		)
	}
}

export default CSSVars
