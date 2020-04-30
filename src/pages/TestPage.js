import React from 'react';
import NewToken from '../components/NewToken';

const TestPage = (props) => {
	const { updateToken, allTokens, tokenNames } = props;
	const tokenProps = {
		...allTokens['theme.background.badge'],
		updateToken,
		tokenNames,
		name: 'theme.background.badge'
	}
	return (
		<div className="page-content" id="page-content">
			<div className="page-content-inner">
				<NewToken {...tokenProps} />
			</div>
		</div>
	)
}

export default TestPage
