import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Helmet } from 'react-helmet';

import tokenizeSyntaxTokens from '../helpers/tokenizeSyntaxTokens';
import createResolvedTokenObject from '../helpers/createResolvedTokenObject';
import createTextmateRules from '../helpers/createTextmateRules';
import createTmPlist from '../helpers/createTmPlist';
import createAllTokens from '../helpers/createAllTokens';

import generateiTerm from '../generators/iTerm';
import generateSlack from '../generators/slack';
import generateXcode from '../generators/xcode';

import CopyCode from '../components/CopyCode';

const readme = `Thank you for using Themeweaver!

## Instructions

### VSCode

### Sublime Text / TextMate

### Xcode

### Slack
`

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

const downloadTheme = (allTokens, theme, themeName) => {
	const zip = new JSZip();
	['dark','light'].forEach(themeType => {
		const _allTokens = createAllTokens({
			...allTokens,
			...theme[themeType]
		});
		
		const name = `${themeName}.${themeType}`;
		const _theme = {
			name,
			type: themeName,
			colors: createApplicationColors(_allTokens),
			tokenColors: createSyntaxColors(_allTokens)
		}

		zip.file(`${name}.json`, JSON.stringify(_theme, null, 2));
		zip.file(`${name}.tmTheme`, createTmPlist(_allTokens, name));
		zip.file(`${name}.itermcolors`, generateiTerm(_allTokens));
		zip.file(`${name}.slack.txt`, generateSlack(_allTokens));
		zip.file(`${name}.xccolortheme`, generateXcode(_allTokens));
	});
	
	zip.file(`README.md`, readme);
	

	zip.generateAsync({type:"blob"})
		.then(function (blob) {
			saveAs(blob, `theme.zip`);
		}, function (err) {
			console.log(err);
		});
}


const DownloadPage = ({ allTokens, theme, themeName, updateThemeName }) => (
	<div className="page-content">
		<Helmet>
			<title>Download Your Theme | Themeweaver</title>
		</Helmet>
		<h1>Download your theme</h1>
		<label htmlFor="themeName">Theme Name</label>
		<input type="text"
			id="themeName"
			value={themeName}
			onChange={(e) => updateThemeName(e.target.value)} />
		<button onClick={() => downloadTheme(allTokens, theme, themeName)}>
			Download
		</button>
		
		<p>The download will include a light and dark theme for:</p>
		<ul>
			<li>VSCode (JSON)</li>
			<li>TextMate (syntax highlighting)</li>
			<li>Slack</li>
			<li>Xcode (xccolortheme)</li>
			<li>iTerm</li>
			<li><em>More coming soon!</em> <a href="https://github.com/dbanksdesign/themeweaver">Help contribute</a>!</li>
		</ul>
		
		<h3>Quick install for VSCode</h3>
		<p>If you want to start using this theme now without creating a package, you can directly add the styles in your <strong>settings.json</strong> file. Copy the code below for application styles and syntax highlighting.</p>
		
		<h4>Application styles</h4>
		<CopyCode
			buttonLabel="Copy application styles"
			text={`"workbench.colorCustomizations": ${JSON.stringify(createApplicationColors(allTokens), null, 2)}`} />
		
		<h4>Syntax highlighting</h4>
		<CopyCode
			buttonLabel="Copy syntax styles"
			text={`"editor.tokenColorCustomizations": {
    "textMateRules": ${JSON.stringify(createTextmateConfig(allTokens), null, 4)}
  }`} />
		
		<h3>Slack</h3>
		<p>Slack theme customizations are pretty limited, but here is a Slack theme based on the theme you built! Copy and paste the code into the custom theme section of the Slack preferences.</p>
		<CopyCode
			buttonLabel="Copy slack code"
			text={generateSlack(allTokens)} />
	</div>
)

export default DownloadPage
