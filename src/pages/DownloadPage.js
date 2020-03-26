import React from 'react';

import download from '../helpers/download';
import tokenizeSyntaxTokens from '../helpers/tokenizeSyntaxTokens';
import createResolvedTokenObject from '../helpers/createResolvedTokenObject';
import createTextmateRules from '../helpers/createTextmateRules';

import CopyCode from '../components/CopyCode';

const createApplicationColors = (allTokens) => {
	return Object.keys(allTokens)
	.filter(key => key.startsWith(`application`) && allTokens[key].computedValue)
	.reduce((obj, key) => {
		const name = key.replace(/application\./gi, ``);
		obj[name] = allTokens[key].computedValue;
		return obj;
	}, {});
}

const createSyntaxColors = (allTokens) => {
	return tokenizeSyntaxTokens(
		createResolvedTokenObject(allTokens, `syntax`)
	);
}

const createTextmateConfig = (allTokens) => {
	return createTextmateRules(
		createResolvedTokenObject(allTokens, `syntax`)
	);
}

const downloadTheme = (allTokens, currentTheme) => {
	const theme = {
		name: ``,
		type: ``,
		colors: createApplicationColors(allTokens),
		tokenColors: createSyntaxColors(allTokens)
	}
	download(`${currentTheme}.json`, JSON.stringify(theme, null, 2));
}

const DownloadPage = ({ allTokens, currentTheme }) => (
	<div className="page-content">
		<button onClick={() => downloadTheme(allTokens, currentTheme)}>
			Download
		</button>
		
		<h3>Quick install</h3>
		<p>If you want to start using this theme now without creating a package, you can directly add the styles in your <strong>settings.json</strong> file. Copy the code below for application styles and syntax highlighting.</p>
		
		<h4>Application styles</h4>
		<CopyCode text={`"workbench.colorCustomizations": ${JSON.stringify(createApplicationColors(allTokens), null, 2)}`} />
		
		<h4>Syntax highlighting</h4>
		<CopyCode text={`"editor.tokenColorCustomizations": {
    "textMateRules": ${JSON.stringify(createTextmateConfig(allTokens), null, 4)}
  }`} />
	</div>
)

export default DownloadPage
