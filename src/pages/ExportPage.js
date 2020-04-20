import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Helmet } from 'react-helmet';

import tokenizeSyntaxTokens from '../helpers/tokenizeSyntaxTokens';
import createResolvedTokenObject from '../helpers/createResolvedTokenObject';
import createTextmateRules from '../helpers/createTextmateRules';
import createTmPlist from '../helpers/createTmPlist';
import createAllTokens from '../helpers/createAllTokens';
import themeNameGenerator from '../helpers/themeNameGenerator';

import generateiTerm from '../generators/iTerm';
import generateSlack from '../generators/slack';
import generateXcode from '../generators/xcode';
import generateJetbrainsJSON from '../generators/jetbrainsJSON';
import generateJetbrainsXML from '../generators/jetbrainsXML';

import CopyCode from '../components/CopyCode';

const readme = `Thank you for using Themeweaver!

## Instructions

### VSCode

### Sublime Text / TextMate

### Xcode

### Slack

### Jetbrains (IntelliJ, Android Studio, WebStorm, PhpStorm, etc.)

If you just want to use the syntax highlighting without theming the application/workbench area you can go to 
1. Go to Settings > Editor > Color Scheme
2. Click the gear icon
3. Import a theme .icls
4. Find select the appropriate .icls file in jetbrains directory
`

const packageJSON = ({ name, color }) => {
	return {
		name: name,
		description: `A kick-ass theme built with themeweaver`,
		version: `1.0.0`,
		engines: {
			vscode: "^1.38.0"
		},
		galleryBanner: {
			color: color,
			theme: "dark"
		},
		icon: "images/icon.png",
		categories: [
			"Themes"
		],
		keywords: [],
		contributes: {
			themes: [{
				label: `${name} Dark`,
				uiTheme: "vs-dark",
				path: `./vscode/${name}-dark.color-theme.json`
			},{
				label: `${name} Light`,
				uiTheme: "vs",
				path: `./vscode/${name}-light.color-theme.json`
			}]
		},
	}
}

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
	return createTextmateRules(
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
	zip.folder(`vscode`);
	zip.folder(`jetbrains`);
	['dark','light'].forEach(themeType => {
		const _allTokens = createAllTokens({
			...allTokens,
			...theme[themeType]
		});
		
		const name = `${themeName}-${themeType}`;
		const _theme = {
			name,
			type: themeName,
			colors: createApplicationColors(_allTokens),
			tokenColors: createSyntaxColors(_allTokens)
		}

		const jetbrainsXML = generateJetbrainsXML({ name, allTokens: _allTokens });
		zip.file(`vscode/${name}.color-theme.json`, JSON.stringify(_theme, null, 2));
		zip.file(`jetbrains/${name}.icls`, jetbrainsXML);
		zip.file(`jetbrains/${name}.xml`, jetbrainsXML);
		zip.file(`jetbrains/${name}.theme.json`, generateJetbrainsJSON({
			name,
			allTokens: _allTokens,
			dark: themeType === 'dark'
		}));
		zip.file(`${name}.tmTheme`, createTmPlist(_allTokens, name));
		zip.file(`${name}.itermcolors`, generateiTerm(_allTokens));
		zip.file(`${name}.slack.txt`, generateSlack(_allTokens));
		zip.file(`${name}.xccolortheme`, generateXcode(_allTokens));
	});
	
	zip.file(`README.md`, readme);
	zip.file(`package.json`, JSON.stringify(
		packageJSON({
			name: themeName,
			color: allTokens[`base.primary.90`].computedValue
		}), null, 2
	));

	zip.generateAsync({type:"blob"})
		.then(function (blob) {
			saveAs(blob, `theme.zip`);
		}, function (err) {
			console.log(err);
		});
}


const DownloadPage = ({ allTokens, theme, themeName, updateThemeName }) => (
	<div className="page-content">
		<div className="page-content-inner flow">
		<Helmet>
			<title>Export | Themeweaver</title>
		</Helmet>
		
		<h1>Export</h1>
		
		<section>
		<label htmlFor="themeName">
			First, give it a name
		</label>
		<div className="input-with-button">
			<input type="text"
				id="themeName"
				value={themeName}
				onChange={(e) => updateThemeName(e.target.value)} />
			<button onClick={() => updateThemeName(themeNameGenerator())}>
				Make me a random name!
			</button>
		</div>
		</section>
		
		<button className="primary block" onClick={() => downloadTheme(allTokens, theme, themeName)}>
			Download
		</button>
		
		<section>
		<p>The download will include a light and dark theme for:</p>
		<ul>
			<li>VSCode (JSON)</li>
			<li>TextMate (syntax highlighting only)</li>
			<li>Slack</li>
			<li>Xcode (xccolortheme)</li>
			<li>iTerm</li>
			<li>Jetbrains (Android Studio, WebStorm, etc.)</li>
			<li><em>More coming soon!</em> <a href="https://github.com/dbanksdesign/themeweaver">Help contribute</a>!</li>
		</ul>
		</section>
		
		<section>
		<h3>Quick install for VSCode</h3>
		<p>If you want to start using this theme now without creating a package, you can directly add the styles in your <strong>settings.json</strong> file. Copy the code below for application styles and syntax highlighting.</p>
		</section>
		
		<CopyCode
			buttonLabel="Copy application styles"
			text={`"workbench.colorCustomizations": ${JSON.stringify(createApplicationColors(allTokens), null, 2)}`} />

		<CopyCode
			buttonLabel="Copy syntax styles"
			text={`"editor.tokenColorCustomizations": {
    "textMateRules": ${JSON.stringify(createTextmateConfig(allTokens), null, 4)}
  }`} />
		
		<section className="flow">
		<h3>Slack</h3>
		<p>Slack theme customizations are pretty limited, but here is a Slack theme based on the theme you built! Copy and paste the code into the custom theme section of the Slack preferences.</p>
		<CopyCode
			buttonLabel="Copy slack code"
			text={generateSlack(allTokens)} />
		</section>
	</div>
	</div>
)

export default DownloadPage
