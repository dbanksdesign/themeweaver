import createToken from './createToken';
import resolveReference from './resolveReference';

const updateToken = ({ path, value, secondaryKey, tokens }) => {
	let newToken = tokens[path];
	let [computedValue, refs] = resolveReference(value, tokens);
	let undefinedToken;
	
	// if this is a syntax token, use the secondary key as well
	if (secondaryKey) {
		newToken = newToken[secondaryKey];
	}
	
	const oldRefs = newToken.refs;
	const oldReverse = newToken.reverseLookup;
	
	// Don't update the computed value if it is undefined
	if (!computedValue) {
		undefinedToken = true;
		computedValue = newToken.computedValue;
	}
	
	newToken = Object.assign({}, newToken, {
		value,
		refs,
		computedValue
	});
	
	if (secondaryKey) {
		// Gotta be a better way to do this
		tokens[path][secondaryKey] = newToken;
	} else {
		tokens[path] = newToken;
	}
	
	// If the resolved token is undefined, don't change
	// the computed value yet. This creates a weird experience
	// when editing tokens.
	if (!undefinedToken) {
		// update references
		if (refs && refs.length) {
			// Update reverseLookup for references
			refs.forEach(ref => {
				if (ref && ref.indexOf('{') > -1) {
					let name = ref;
					ref.replace(/\{([^}]+)\}/gi, (match, variable) => {
						name = variable;
					});
					const newReverseLookup = tokens[name].reverseLookup || [];
					newReverseLookup.push(path);
					// Set creates unique values
					tokens[name].reverseLookup = Array.from(
						new Set(newReverseLookup.concat(oldReverse))
					).sort();
				}
			});
		}
		
		// un-ref old refs
		if (oldRefs && oldRefs.length) {
			oldRefs.forEach(ref => {
				if (ref && ref.indexOf('{') > -1) {
					let name = ref;
					ref.replace(/\{([^}]+)\}/gi, (match, variable) => {
						name = variable;
					});
					// old reference might be undefined because the text input
					// might not have finished
					const oldRef = tokens[name];
					if (oldRef) {
						const reverseLookup = tokens[name].reverseLookup;
						tokens[name].reverseLookup = reverseLookup
							.filter(key => ![path].concat(oldReverse).includes(key));
					}
				}
			});
		}

		// update tokens that reference this one (if it has any)
		if (newToken.reverseLookup) {
			newToken.reverseLookup.forEach(key => {
				const reverseToken = tokens[key];
				
				// Syntax tokens are objects with background & foreground
				if (reverseToken.hasOwnProperty('foreground')) {
					const background = createToken(key, reverseToken.background.value, tokens);
					const foreground = createToken(key, reverseToken.foreground.value, tokens);
					tokens[key] = Object.assign({}, tokens[key], {
						background,
						foreground
					});
				} else {
					const val = tokens[key].value;
					let [computedValue, refs] = resolveReference(val, tokens, [val]);

					tokens[key] = Object.assign({}, tokens[key], {
						refs,
						computedValue
					});
				}
			});
		}
	}
}

export default updateToken;
