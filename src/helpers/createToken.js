import resolveReference from './resolveReference';
import chroma from 'chroma-js';

const createToken = (key, value, tokenObject, reverse = {}) => {
	const [computedValue, refs] = resolveReference(value, tokenObject);
	if (refs && refs.length) {
		refs.forEach(ref => {
			if (ref && ref.indexOf('{') > -1) {
				// TODO: handle alpha
				let name = ref;
				ref.replace(/\{([^}]+)\}/gi, (match, variable) => {
					name = variable;
				});
				reverse[name] = reverse[name] || [];
				reverse[name].push(key)
			}
		});
	}

	// value will be a string the first time, then an object
	// all other times...
	if (value && typeof value !== 'string') {
		value = value.value;
	}
	
	let token = {
		refs,
		computedValue,
		value,
	}
	
	if (!refs && token.value && token.value.length) {
		try {
			token.hsl = chroma(token.value).hsl();
		} catch (error) {
			// console.log(token, key);
			console.log(error);
		}
		
	}
	
	return token;
}

export default createToken;
