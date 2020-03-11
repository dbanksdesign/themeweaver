import React from 'react';
import Token from '../components/Token';

class ThemePage extends React.Component {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	const { name, value, refs } = this.props;
	// 	// can't shallowly compare path because it is an array
	// 	return value !== nextProps.value ||
	// 		name !== nextProps.name ||
	// 		JSON.stringify(refs) !== JSON.stringify(nextProps.refs);
	// }
	
	render() {
		console.log(`theme page re-renderd`);
		const { updateToken, tokens, changeTheme, currentTheme, tokenNames } = this.props;

		return (
			<div>
				<button onClick={changeTheme}>Current theme: {currentTheme}</button>
				{Object.keys(tokens).map(key => (
					<Token path={key} key={key} {...tokens[key]} updateToken={updateToken} tokenNames={tokenNames} />
				))}
			</div>
		)
	}
}

export default ThemePage
