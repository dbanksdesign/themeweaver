import React from 'react';
import debounceRender from 'react-debounce-render';

class CSSVar extends React.PureComponent {
	render() {
		const { name, value } = this.props;
		if (value) {
			document.documentElement.style.setProperty(
				`--${name.replace('.value','').replace(/\./g,'-')}`,
				value
			)
		}
		// no-op component
		return null;
	}
}

export {CSSVar}

class CSSVars extends React.PureComponent {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	// compare the objects
	// 	return JSON.stringify(nextProps.tokens) !== JSON.stringify(this.props.tokens);
	// }
	
	render() {
		return (
			<>
				{Object.keys(this.props.tokens).map((key) => {
					const {computedValue} = this.props.tokens[key];
					return (
						<CSSVar key={key} name={key} value={computedValue} />
					)
				})}
			</>
		)
	}
}

export default debounceRender(CSSVars, 100)
