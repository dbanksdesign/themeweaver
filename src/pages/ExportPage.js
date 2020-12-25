import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import lzString from 'lz-string';

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

const readme = ({themeName, slack}) => `Thank you for using Themeweaver!

## Instructions

### VSCode

1. Copy the contents into *~/.vscode/extensions/*.
1. Restart VSCode or reload the window with the \`Developer: Reload Window\` action.
1. Open the theme switcher with \`⌘/ctrl K + T\`. There should be a light and dark themes with the name you entered above.

### Xcode

1. Unzip the contents anywhere
1. Copy **xcode/${themeName}-light.xccolortheme** and **xcode/${themeName}-dark.xccolortheme** into **~/Library/Developer/Xcode/UserData/FontAndColorThemes**.

### Slack

Slack theme customizations are pretty limited, but here is a Slack theme based on the theme you built! Copy and paste the code into the custom theme section of the Slack preferences.

\`\`\`
${slack.dark}
\`\`\`

\`\`\`
${slack.light}
\`\`\`

### Jetbrains (IntelliJ, Android Studio, WebStorm, PhpStorm, etc.)

1. Unzip the contents anywhere
1. In the Jetbrains application (Android studio, Webstorm, etc.) open the preferences
1. Go to **Editor > Color Scheme > General**
1. Click on the button with 3 dots in the top and click on **Import Scheme**
1. Select one of the .icls files **jetbrains/${themeName}-light.icls** and **jetbrains/${themeName}-dark.icls**

### iTerm

1. Launch iTerm 2
1. Press \`CMD+i\`
1. Go to the **Colors** tab
1. Click on **Color Presets**
1. Click on **Import**
1. Select the **${themeName}-light.itermcolors** and **${themeName}-dark.itermcolors** files in the **iterm** folder

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

// const createTextmateConfig = (allTokens) => {
// 	return createTextmateRules(
// 		createResolvedTokenObject(allTokens, `syntax`)
// 	);
// }

const getCompressedState = (allTokens, theme, themeName) => {
	return JSON.stringify({
		allTokens: Object.keys(allTokens).reduce((obj, key) => {
			const token = allTokens[key];
			if (token.hasOwnProperty('foreground')) {
				obj[key] = {
					foreground: token.foreground.value,
					fontStyle: token.fontStyle,
					background: token.background.value
				};
			} else {
				obj[key] = allTokens[key].value;
			}
			
			return obj;
		}, {}),
		theme,
		name: themeName
	}, null, 2);
}

const downloadTheme = (allTokens, theme, themeName) => {
	const zip = new JSZip();
	zip.folder(`vscode`);
	zip.folder(`jetbrains`);
	zip.folder(`iterm`);
	zip.folder(`xcode`);
	zip.folder(`textmate`);
	zip.folder(`slack`);

	const src = getCompressedState(allTokens, theme, themeName);
	
	zip.file(`themeweaver.config.json`, src);
	const slack = {};
	['dark','light'].forEach(themeType => {
		const _allTokens = createAllTokens({
			...allTokens,
			...theme[themeType]
		});
		
		const name = `${themeName}-${themeType}`;
		const _theme = {
			name,
			type: themeType,
			colors: createApplicationColors(_allTokens),
			tokenColors: createSyntaxColors(_allTokens)
		}

		const jetbrainsXML = generateJetbrainsXML({ name, allTokens: _allTokens });
		slack[themeType] = generateSlack(_allTokens);
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
		zip.file(`textmate/${name}.tmTheme`, createTmPlist(_allTokens, name));
		zip.file(`iterm/${name}.itermcolors`, generateiTerm(_allTokens));
		zip.file(`slack/${name}.slack.txt`, slack[themeType]);
		zip.file(`xcode/${name}.xccolortheme`, generateXcode(_allTokens));
	});
	
	// zip.file(`src/main/resources/META-INF/plugin.xml`, generateJetbrainsPluginXML({themeName}));
	zip.file(`README.md`, readme({ themeName, slack }));
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

const generatePermaLink = ({ theme, allTokens, themeName }) => {
	const data = getCompressedState(allTokens, theme, themeName);
	return `${window.location.href}#?theme=${lzString.compressToEncodedURIComponent(data)}`;
}

const DownloadPage = ({ allTokens, theme, themeName, updateThemeName }) => (
	<div className="page-content">
		<div className="page-content-inner flow">
		
		<h1>Export your theme</h1>
		
		<div className="columns">
			<div className="column">
				<section>
					<label htmlFor="themeName">
						Name for your beautiful creation
					</label>
					<div className="tw-input-with-button">
						<input type="text"
							id="themeName"
							className="tw-input"
							value={themeName}
							onChange={(e) => updateThemeName(e.target.value)} />
						<button onClick={() => updateThemeName(themeNameGenerator())}>
							Make me a random name!
						</button>
					</div>
				</section>
				
				<section className="flow">
					<button className="primary block large"
						onClick={() => downloadTheme(allTokens, theme, themeName)}>
						Download
					</button>
					
					<CopyCode
						buttonLabel="Copy share-able link"
						text={generatePermaLink({allTokens, theme, themeName})} />
						
					<CopyCode
						buttonLabel="Copy slack code"
						text={generateSlack(allTokens)} />
				</section>
			</div>
			
			<div className="column">
				<section>
					<p>The download will include a light and dark theme for:</p>
					<ul>
						<li>VSCode</li>
						<li>TextMate (syntax highlighting only) <strong>work-in-progress</strong></li>
						<li>Slack</li>
						<li>Xcode</li>
						<li>iTerm</li>
						<li>Jetbrains (Android Studio, WebStorm, etc.) <strong>work-in-progress</strong></li>
						<li><em>More coming soon</em> <a href="https://github.com/dbanksdesign/themeweaver">Help contribute</a>!</li>
					</ul>
				</section>
			</div>
		</div>
		
		{/* <section className="flow">
			<h2>VSCode</h2>
			<ol>
				<li>Unzip the contents into <strong>~/.vscode/extensions/</strong>.</li>
				<li>Restart VSCode or reload the window with the <strong>Developer: Reload Window</strong> action.</li>
				<li>Open the theme switcher with <strong>⌘/ctrl K + T</strong>. There should be a light and dark themes with the name you entered above.</li>
			</ol>
		</section>
		
		<section className="flow">
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
		
		<section className="flow">
			<h2>Xcode</h2>
			<ol>
				<li>Unzip the contents anywhere</li>
				<li>Copy <strong>{themeName}-light.xccolortheme</strong> and <strong>{themeName}-dark.xccolortheme</strong> into <strong>~/Library/Developer/Xcode/UserData/FontAndColorThemes</strong>.</li>
			</ol>
		</section>

		<section className="flow">
			<h2>iTerm</h2>
			<ol>
				<li>Unzip the contents anywhere</li>
				<li>Launch iTerm 2</li>
				<li>Press <code>CMD+i</code></li>
				<li>Go to the <strong>Colors</strong> tab</li>
				<li>Click on <strong>Color Presets</strong></li>
				<li>Click on <strong>Import</strong></li>
				<li>Select the <strong>{themeName}-light.itermcolors</strong> and <strong>{themeName}-dark.itermcolors</strong> files in the <strong>iterm</strong> folder you unzipped in step 1</li>
			</ol>
		</section>

		<section className="flow">
			<h2>Slack</h2>
			<p>Slack theme customizations are pretty limited, but here is a Slack theme based on the theme you built! Copy and paste the code into the custom theme section of the Slack preferences.</p>
			<CopyCode
				buttonLabel="Copy slack code"
				text={generateSlack(allTokens)} />
		</section> */}
	</div>
	</div>
)

export default DownloadPage
