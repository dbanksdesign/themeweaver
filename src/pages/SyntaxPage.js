import React from 'react';
import Token from '../components/Token';
import SyntaxToken from '../components/SyntaxToken';

class SyntaxPage extends React.Component {
	
	render() {
		const { updateToken, tokens, tokenNames, updateFontStyle } = this.props;

		return (
			<div>
				{Object.keys(tokens).map(key => (
					<SyntaxToken key={key}
						{...tokens[key]}
						path={key}
						updateFontStyle={updateFontStyle}
						updateToken={updateToken}
						tokenNames={tokenNames} />
					// <div key={key}>
					// 	<h5>{key}</h5>
					// 	{tokens[key].foreground.value &&
					// 		<Token {...tokens[key].foreground}
					// 			name="Foreground"
					// 			id={`${key}.foreground`}
					// 			path={key}
					// 			secondaryKey="foreground"
					// 			updateToken={updateToken}
					// 			tokenNames={tokenNames} />}
					// 	{tokens[key].background.value &&
					// 		<Token {...tokens[key].background}
					// 			name="Backgroundground"
					// 			id={`${key}.background`}
					// 			path={key}
					// 			secondaryKey="background"
					// 			updateToken={updateToken}
					// 			tokenNames={tokenNames} />}
					// </div>
					
				))}
			</div>
		)
	}
}

export default SyntaxPage
