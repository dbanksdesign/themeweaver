const regex = new RegExp(
	'\\{([^}]+)\\}', 'g'
);

const themeKeys = [`background`,`font`,`border`];

let count = 0;

function resolveReference(value, tokens, currentTheme) {
	// count = count + 1;
	// console.log(`Ran ${count} times`);
	
	if (value.indexOf(`{`) < 0) {
		return value;
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
		resolvedRef = value.replace(match, obj);
	});
	
	if (resolvedRef.indexOf(`{`) >= 0) {
		return resolveReference(resolvedRef, tokens, currentTheme);
	} else {
		return resolvedRef;
	}
}

export default resolveReference
