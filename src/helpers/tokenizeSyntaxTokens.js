import validateColor from './validateColor';

const tokenizeSyntaxTokens = (tokenObject, background, foreground) => {
	const toRet = [];
	if (background && foreground) {
		toRet.push({background, foreground});
	}
	Object.keys(tokenObject).forEach(key => {
		const {foreground, background, fontStyle} = tokenObject[key];
		const token = {};
		if (foreground) {
			token.foreground = validateColor(foreground);
		}
		if (background) {
			token.background = validateColor(background);
		}
		if (fontStyle) { token.fontStyle = fontStyle }
		
		// if *
		if (key.indexOf('*') > -1) {
			token.token = key.replace('.*','');
		} else {
			token.token = key;
		}

		// Only add the token if there are any styles applied
		if (token.fontStyle || token.background || token.foreground) {
			toRet.push(token);
		} else {
			// console.log(token);
		}
		
	});
	return toRet;
}

export default tokenizeSyntaxTokens
