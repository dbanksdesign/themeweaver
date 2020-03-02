const regex = new RegExp(
	'\\{([^}]+)\\}', 'g'
);

const themeKeys = [`background`,`font`,`border`];

function resolveReference(value, tokens, currentTheme, refs = []) {
	if (value.indexOf(`{`) < 0) {
		return [value];
	}
	
	let obj, resolvedRef;
	
	value.replace(regex, function(match, variable) {
		let path = variable.split('.');
		obj = tokens;
		
		if (themeKeys.includes(path[0])) {
			obj = obj[`theme`][currentTheme];
		}
		
		for (let index = 0; index < path.length; index++) {
			if (obj && obj.hasOwnProperty(path[index])) {
				obj = obj[path[index]];
			} else {
				obj = undefined;
			}
		}
		if (obj) {
			resolvedRef = value.replace(match, obj);
		} else {
			console.log(`cannot resolve: ${value}`);
			resolvedRef = null;
		}
	});
	
	if (resolvedRef && resolvedRef.indexOf(`{`) >= 0) {
		return resolveReference(resolvedRef, tokens, currentTheme, refs.concat(resolvedRef));
	} else {
		return refs.concat(resolvedRef);
	}
}

export default resolveReference
