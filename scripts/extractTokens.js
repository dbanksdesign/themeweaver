const chroma = require('chroma-js');
const path = process.argv[2];

const theme = require(path);

const tokens = [];

const reverseThemeMap = {
	'editor.background': 'theme.background.primary',
	'editor.foreground': 'theme.font.primary',
	'breadcrumb.background': 'theme.background.primary',
	'dropdown.background': 'theme.background.primary',
	'editorWarning.foreground': 'theme.font.warning',
	'list.warningForeground': 'theme.font.warning',
}

const reverseBaseMap = {
	'theme.background.primary': 'base.grey.100'
}

const newTokens = {}

Object.keys(theme.colors).forEach(key => {
	const value = theme.colors[key];
	if (!tokens.includes(value)) {
		tokens.push(value);
	}
	
	const reverseKey = reverseThemeMap[key];
	
	if (reverseKey) {
		if (newTokens[reverseKey] && newTokens[reverseKey] !== value) {
			console.log(`uh oh: ${key} ${value} ${newTokens[reverseKey]}`);
			newTokens[`application.${key}`] = value;
		} else {
			newTokens[reverseKey] = value;
			newTokens[`application.${key}`] = `{${reverseKey}}`;
		}
	}
});

theme.tokenColors.forEach(tokenColor => {
	const value = tokenColor.settings.foreground;
	if (value && !tokens.includes(value)) {
		tokens.push(value);
	}
});


console.log(tokens);
console.log(tokens.length);
console.log(newTokens);

// what if I have a reverse map of application tokens to theme tokens?
// it would need to handle the case for either 2 application tokens
// that would write to the same theme token or if an application token
// doesn't map to a theme token. Or what if there are too many greys and
// we can't handle all the greys? What about unused base and theme tokens?
// Why? WHY?

