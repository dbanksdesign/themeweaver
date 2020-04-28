import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Helmet } from 'react-helmet';

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
// import generateJetbrainsPluginXML from '../generators/jetbrainsPluginXML';
import generateJetbrainsMaterial from '../generators/jetbrainsMaterial';

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
	zip.folder(`src/main/resources`);
	zip.folder(`src/main/resources/META-INF`);
	zip.folder(`src/main/resources/themes`);
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
		zip.file(`jetbrains/material/${name}.xml`, generateJetbrainsMaterial({
			name,
			allTokens: _allTokens,
			dark: themeType === 'dark'
		}));
		zip.file(`${name}.tmTheme`, createTmPlist(_allTokens, name));
		zip.file(`${name}.itermcolors`, generateiTerm(_allTokens));
		zip.file(`${name}.slack.txt`, generateSlack(_allTokens));
		zip.file(`${name}.xccolortheme`, generateXcode(_allTokens));
	});
	
	// zip.file(`src/main/resources/META-INF/plugin.xml`, generateJetbrainsPluginXML({themeName}));
	zip.file(`README.md`, readme);
	zip.file(`package.json`, JSON.stringify(
		packageJSON({
			name: themeName,
			color: allTokens[`base.primary.90`].computedValue
		}), null, 2
	));

	zip.generateAsync({type:"blob"})
		.then(function (blob) {
			saveAs(blob, `${themeName}.zip`);
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
					className="token-field-input"
					value={themeName}
					onChange={(e) => updateThemeName(e.target.value)} />
				<button onClick={() => updateThemeName(themeNameGenerator())}>
					Make me a random name!
				</button>
			</div>
		</section>
		
		<button className="primary block"
			onClick={() => downloadTheme(allTokens, theme, themeName)}>
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
				<li>Jetbrains: Android Studio, WebStorm, etc. (work-in-progress)</li>
				<li><em>More coming soon!</em> <a href="https://github.com/dbanksdesign/themeweaver">Help contribute</a>!</li>
			</ul>
		</section>
		
		<section>
			<h2>VSCode</h2>
			<ol>
				<li>Unzip the contents into <strong>~/.vscode/extensions/</strong>.</li>
				<li>Restart VSCode or reload the window with the <strong>Developer: Reload Window</strong> action.</li>
				<li>Open the theme switcher with <strong>⌘/ctrl K + T</strong>. There should be a light and dark themes with the name you entered above.</li>
			</ol>
		</section>
		
		<section>
			<h2>Jetbrains</h2>
			<p><em>Full Jetbrains integration is in the works...</em></p>
			
			<h3>Syntax highlighting</h3>
			<ol>
				<li>Unzip the contents anywhere</li>
				<li>In the Jetbrains application (Android studio, Webstorm, etc.) open the preferences</li>
				<li>Go to <strong>Editor > Color Scheme > General</strong></li>
				<li>Click on the button with 3 dots in the top and click on <strong>Import Scheme</strong></li>
				<li>Select one of the .icls files <strong>jetbrains/{themeName}-light.icls</strong> and <strong>jetbrains/{themeName}-dark.icls</strong></li>
			</ol>
		</section>
		
		<section>
			<h2>Xcode</h2>
			<ol>
				<li>Unzip the contents anywhere</li>
				<li>Copy <strong>{themeName}-light.xccolortheme</strong> and <strong>{themeName}-dark.xccolortheme</strong> into <strong>~/Library/Developer/Xcode/UserData/FontAndColorThemes</strong>.</li>
			</ol>
		</section>
		
		<section>
			<h2>iTerm</h2>
			<ol>
				<li></li>
			</ol>
		</section>
		
		<section className="flow">
			<h2>Slack</h2>
			<p>Slack theme customizations are pretty limited, but here is a Slack theme based on the theme you built! Copy and paste the code into the custom theme section of the Slack preferences.</p>
			<CopyCode
				buttonLabel="Copy slack code"
				text={generateSlack(allTokens)} />
		</section>
	</div>
	</div>
)

export default DownloadPage
