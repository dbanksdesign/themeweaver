import resolveReference from './resolveReference';
import createToken from './createToken';

// const createToken = (key, value, tokenObject, reverse = {}) => {
// 	const [computedValue, refs] = resolveReference(value, tokenObject);
// 	if (refs && refs.length) {
// 		refs.forEach(ref => {
// 			if (ref && ref.indexOf('{') > -1) {
// 				// TODO: handle alpha
// 				let name = ref;
// 				ref.replace(/\{([^}]+)\}/gi, (match, variable) => {
// 					name = variable;
// 				});
// 				reverse[name] = reverse[name] || [];
// 				reverse[name].push(key)
// 			}
// 		});
// 	}

// 	// value will be a string the first time, then an object
// 	// all other times...
// 	if (value && typeof value !== 'string') {
// 		value = value.value;
// 	}
// 	return {
// 		refs,
// 		computedValue,
// 		value
// 	}
// }

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
