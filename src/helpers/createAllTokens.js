import createToken from './createToken';

// Will resolve all references and create reference & reverseRef
// arrays on tokens.
const createAllTokens = (tokenObject) => {
	const reverse = {};
	const allTokens = {};

	for (const key in tokenObject) {
		if (tokenObject.hasOwnProperty(key)) {
			let originalValue = tokenObject[key];
			// syntax tokens are objects
			if (originalValue.hasOwnProperty('foreground')) {
				const foreground = createToken(key, originalValue.foreground, tokenObject, reverse);
				const background = createToken(key, originalValue.background, tokenObject, reverse);
				allTokens[key] = {
					foreground,
					background,
					fontStyle: originalValue.fontStyle
				};
			} else {
				const newToken = createToken(key, originalValue, tokenObject, reverse);
				allTokens[key] = newToken;
			}
		}
	}
	
	for (const key in reverse) {
		if (reverse.hasOwnProperty(key)) {
			if (allTokens[key]) {
				allTokens[key].reverseLookup = reverse[key];
			} else {
				console.log(`reverse lookup couldn't find ${key}`);
				console.log(reverse[key]);
			}
		}
	}
	
	return allTokens;
}

export default createAllTokens;
