import validateColor from './validateColor';

const createTextmateRules = (allTokens) => {
	const toRet = [];
	Object.keys(allTokens).forEach(key => {
		const {foreground, background, fontStyle} = allTokens[key];
		const token = {
			scope: key,
			settings: {}
		};
		
		if (foreground) {
			token.settings.foreground = validateColor(foreground);
		}
		if (background) {
			token.settings.background = validateColor(background);
		}
		if (fontStyle) { token.settings.fontStyle = fontStyle }
		
		// if *
		// if (key.indexOf('*') > -1) {
		// 	token.scope = key.replace('.*','');
		// } else {
		// 	token.scope = key;
		// }

		// Only add the token if there are any styles applied
		if (token.settings.fontStyle || token.settings.background || token.settings.foreground) {
			toRet.push(token);
		} else {
			// console.log(token);
		}
		
	});
	return toRet;
}

export default createTextmateRules
