import React from 'react';
import Token from '../components/Token';

class ApplicationPage extends React.Component {
	
	render() {
		const { updateToken, tokens, tokenNames } = this.props;
		// This seems super inefficient...
		// const activityBarTokens = tokens.filter(token => token.path.startsWith(`application.activityBar`));

		return (
			<div>
				<h2>Activity Bar</h2>
				{Object.keys(tokens).map(key => (
					<Token path={key} key={key} {...tokens[key]} updateToken={updateToken} tokenNames={tokenNames} />
				))}
			</div>
		)
	}
}

export default ApplicationPage
