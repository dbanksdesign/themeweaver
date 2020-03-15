const createResolvedTokenObject = (resolvedTokens, startsWith) => {
	return Object.keys(resolvedTokens)
		.filter(key => key.startsWith(startsWith))
		.reduce((obj, key) => {
			const token = resolvedTokens[key];
			const name = key.replace(`${startsWith}.`,``);
			// Syntax tokens are objects
			if (token.hasOwnProperty('foreground')) {
				obj[name] = {
					foreground: token.foreground.computedValue,
					background: token.background.computedValue,
					fontStyle: token.fontStyle,
				}
			} else {
				if (token.computedValue) { obj[name] = token.computedValue; }
			}
			return obj;
		}, {});
}

export default createResolvedTokenObject
