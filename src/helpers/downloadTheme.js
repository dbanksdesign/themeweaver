import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import createResolvedTokenObject from '../helpers/createResolvedTokenObject';
import createTextmateRules from '../helpers/createTextmateRules';
import createTmPlist from '../helpers/createTmPlist';
import createAllTokens from '../helpers/createAllTokens';
import themeNameGenerator from '../helpers/themeNameGenerator';
import getCompressedState from '../helpers/getCompressedState';

import generateiTerm from '../generators/iTerm';
import generateSlack from '../generators/slack';
import generateXcode from '../generators/xcode';
import generateJetbrainsJSON from '../generators/jetbrainsJSON';
import generateJetbrainsXML from '../generators/jetbrainsXML';
// import generateJetbrainsPluginXML from '../generators/jetbrainsPluginXML';
import generateJetbrainsMaterial from '../generators/jetbrainsMaterial';

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

const downloadTheme = ({allTokens, theme, themeName}) => {
	const zip = new JSZip();
	zip.folder(`vscode`);
	zip.folder(`jetbrains`);
	zip.folder(`iterm`);
	zip.folder(`xcode`);
	zip.folder(`textmate`);
	zip.folder(`slack`);

	const src = getCompressedState(allTokens, theme, themeName);
	
	zip.file(`themeweaver.config.json`, JSON.stringify(src, null, 2));
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

export default downloadTheme;
