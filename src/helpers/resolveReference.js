const regex = new RegExp(
	'\\{([^}]+)\\}', 'g'
);

const resolveReference = (value, tokens, refs) => {
	if (value && typeof value !== 'string') {
		value = value.value;
	}
	
	if (!value) {
		return [null, null];
	}
	
	if (value.indexOf(`{`) < 0) {
		return [value, refs];
	}
	
	if (!refs) {
		refs = [value];
	}
	
	let resolvedRef;
	
	value.replace(regex, function(match, variable) {
		let name = variable;
		
		let val = tokens[name];
		if (val) {
			// this is stupid but it works.
			if (val.value) { val = val.value }
			resolvedRef = value.replace(match, val);
		} else {
			// we didn't find the reference, bail!
			console.log(`didn't find reference: ${value}`)
		}
	});
	
	const newRefs = refs.concat(resolvedRef);
	
	if (resolvedRef && resolvedRef.indexOf(`{`) > -1) {
		return resolveReference(resolvedRef, tokens, newRefs);
	} else {
		if (newRefs.length > 0) {
			return [resolvedRef, newRefs];
		} else {
			return [resolvedRef, null];
		}
		
	}
}


export default resolveReference
