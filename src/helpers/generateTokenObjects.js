const generateTokenObjects = (allTokens) => {
	const coreTokens = {}
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
			} else if (key.startsWith('core')) {
				coreTokens[key] = token;
			}
		}
	}
	return {coreTokens,themeTokens,syntaxTokens,applicationTokens}
}

export default generateTokenObjects
