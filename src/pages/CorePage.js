import React from 'react';
import Token from '../components/Token';

class CorePage extends React.Component {
	
	render() {
		const { updateToken, tokens, tokenNames } = this.props;

		return (
			<div>
				{Object.keys(tokens).map(key => (
					<Token path={key} key={key} {...tokens[key]} updateToken={updateToken} tokenNames={tokenNames} />
				))}
			</div>
		)
	}
}

export default CorePage
