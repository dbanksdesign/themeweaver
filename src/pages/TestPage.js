import React from 'react';
import NewToken from '../components/NewToken';
import Importer from '../components/Importer';

const TestPage = (props) => {
	const { updateToken, allTokens, tokenNames, importTheme, showToast } = props;
	const tokenProps = {
		...allTokens['theme.background.badge'],
		updateToken,
		tokenNames,
		name: 'theme.background.badge'
	}
	return (
		<div className="page-content" id="page-content">
			<div className="page-content-inner">
				<Importer importTheme={importTheme} onError={(error) => showToast(error)} />
			</div>
		</div>
	)
}

export default TestPage
