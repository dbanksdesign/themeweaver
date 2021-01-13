import chroma from 'chroma-js';
import {dark} from '../tokens/theme';

const sortByLuminance = (a,b) => {
	const AL = chroma(a).luminance();
	const BL = chroma(b).luminance();
	if (AL === BL) {
		return 0
	}
	if (AL < BL) {
		return -1
	} else {
		return 1
	}
}

// This doesn't handle nested scopes (scopes with spaces) like:
// source.elixir support.type.elixir
// TODO: handle nested scopes
const massageSyntax = (tokenColors) => {
	const syntaxObject = {};
	const ignoredScopes = {};
	tokenColors.forEach(({scope, settings}) => {
		if (typeof scope === 'string') {
			syntaxObject[`syntax.${scope}`] = settings;
		} else {
			if (scope && scope.length) {
				scope.forEach(scope => {
					if (scope.indexOf(' ') < 0) {
						syntaxObject[`syntax.${scope}`] = settings;
					} else {
						ignoredScopes[scope] = settings;
					}
				});
			}
		}
	});
	return syntaxObject;
}

const vscodeToTheme = (vscodeTheme) => {
	const applicationTokens = Object.values(vscodeTheme.colors);
	const syntaxTokens = vscodeTheme.tokenColors
		.filter(token => token.settings.foreground && token.settings.foreground.length)
		.map(token => {
			return token.settings.foreground;
		});

	const oldColors = {
		neutral: [],
		red: [],
		orange: [],
		yellow: [],
		lime: [],
		green: [],
		teal: [],
		blue: [],
		purple: [],
		pink: [],
	}
	
	applicationTokens.concat(syntaxTokens)
		.filter((value, index, array) => value && value.length && array.indexOf(value) === index)
		.forEach(value => {
			const [h,s,l] = chroma(value).hsl();
			if (s < 0.25 || l < 0.15 || l > 0.95) {
				oldColors.neutral.push(value)
			} else {
				if (h < 20 || h > 340) {
					oldColors.red.push(value);
				} else if (h > 20 && h < 40) {
					oldColors.orange.push(value);
				} else if (h > 40 && h < 60) {
					oldColors.yellow.push(value)
				} else if (h > 60 && h < 80) {
					oldColors.lime.push(value)
				} else if (h > 80 && h < 140) {
					oldColors.green.push(value)
				} else if (h > 140 && h < 180) {
					oldColors.teal.push(value)
				} else if (h > 180 && h < 220) {
					oldColors.blue.push(value)
				} else if (h > 220 && h < 300) {
					oldColors.purple.push(value)
				} else if (h > 300 && h < 340) {
					oldColors.pink.push(value)
				}
			}
		});
	
	const colors = ['neutral','red','orange','yellow','lime','green','teal','blue','purple','pink'];
	const newColors = {};
	
	colors.forEach(colorName => {
		newColors[colorName] = oldColors[colorName].sort(sortByLuminance);
	});
	
	const newBase = {};
	
	Object.keys(newColors).forEach(colorGroup => {
		newColors[colorGroup].forEach((colorValue,i) => {
			newBase[`base.${colorGroup}.${i}`] = colorValue;
		})
	});
	
	const baseReverseLookup = Object.keys(newBase).reduce((acc, curr) => {
		acc[newBase[curr]] = curr;
		return acc;
	}, {});

	const newAppTokens = {}
	Object.keys(vscodeTheme.colors).forEach(key => {
		const color = vscodeTheme.colors[key];
		const name = baseReverseLookup[color];
		if (!color) {
			newAppTokens[`application.${key}`] = null;
		} else {
			newAppTokens[`application.${key}`] = `{${name}}`;
		}
	});
	
	const oldSyntaxTokens = massageSyntax(vscodeTheme.tokenColors);
	const newSyntaxTokens = {}
	Object.keys(oldSyntaxTokens).forEach(key => {
		const token = Object.assign({}, oldSyntaxTokens[key]);
		let {foreground, background} = token;
		if (foreground) {
			const name = baseReverseLookup[foreground];
			if (name) {
				token.foreground = `{${name}}`;
			}
		}
		newSyntaxTokens[key] = token;
	});
	
	// Create a set of empty theme tokens
	const theme = Object.keys(dark).reduce((acc, curr) => {
		acc[curr] = "";
		return acc;
	}, {});
	
	return {
		...theme,
		...newBase,
		...newAppTokens,
		...newSyntaxTokens
	};
}

// how do we match up theme tokens to newly created base tokens?
// if we take the default application tokens as the base, we could
// find which theme token each default app token references
// and have the theme token reference the base token of the exact hex
// in the imported theme. This won't work because if 2 app tokens share the same
// theme reference, but the imported theme uses different colors for them
// one will override the other. Creating 'theme' tokens if you are importing a single theme
// doesn't really matter as much?

export default vscodeToTheme;
