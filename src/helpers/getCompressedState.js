const getCompressedState = (allTokens) => {
	return Object.keys(allTokens).reduce((obj, key) => {
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
	}, {});
}

export default getCompressedState;
