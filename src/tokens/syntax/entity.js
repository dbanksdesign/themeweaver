// These are names of functions, data structures, classes, etc., but not of 
// variables which reference them. For example, `var foo = someFunction();`, 
// `someFunction()` would be an entity. Entity also includes some HTML syntax 
// like tags and tag attributes.
export default {
	// The entity scopes are generally assigned to the names of data structures,
	// types and other uniquely-identifiable constructs in code and markup. The 
	// notable exceptions are entity.name.tag and entity.other.attribute-name, 
	// which are used in HTML and XML tags.
	"entity": {
		"name": {
			"class": {},
			"struct": {},
			"enum": {},
			"union": {},
			"trait": {},
			"interface": {},
			"impl": {},
			"tag": {
				"*": { "value": "{font.code.21.value}" },
				"reference": { "value": "{font.code.8.value}" },
				"yaml": { "value": "{font.code.22.value}" },
			},
			"type": {
				"module": { "value": "{font.code.22.value}" }
			},
			"function": {
				"*": { "value": "{font.code.27.value}" },
				"constructor": {},
				"destructor": {}
			}
		},
		"other": {
			"attribute-name": {
				"id": { "value": "{font.code.22.value}" },
				"class": { "value": "{font.code.23.value}" },
				"*": { "value": "{font.code.27.value}" }
			}
		}
	}
}
