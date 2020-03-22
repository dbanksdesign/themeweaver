const generateTokenObjects = (allTokens) => {
	const baseTokens = {}
	const themeTokens = {}
	const syntaxTokens = {}
	const applicationTokens = {}
	for (const key in allTokens) {
		if (allTokens.hasOwnProperty(key)) {
			const token = allTokens[key];
			if (key.startsWith('application')) {
				applicationTokens[key] = token;
			} else if (key.startsWith('syntax')) {
				syntaxTokens[key] = token;
			} else if (key.startsWith('theme')) {
				themeTokens[key] = token;
			} else if (key.startsWith('base')) {
				baseTokens[key] = token;
			}
		}
	}
	return {baseTokens,themeTokens,syntaxTokens,applicationTokens}
}

export default generateTokenObjects
