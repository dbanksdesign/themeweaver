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

export default getCompressedState;
