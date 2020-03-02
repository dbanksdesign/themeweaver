// Constants are things like booleans, nulls, numbers.
export default {
	"constant": {
		"character": {
			// escape characters like /
			"escape": {}
		},
		
		// Constants built into the the language like booleans
		"language": {
			// Dart does not seem to have great syntax grammar definitions
			"dart": { "value": "{font.code.26.value}" },
			"boolean": {
				"false": { "value": "{font.code.21.value}" },
				"true": { "value": "{font.code.25.value}" },
			},
			// * import in JS
			"import-export-all": {
				"value": "{font.code.27.value}"
			},
			"null": { "value": "{font.code.21.value}" },
			"symbol": { "value": "{font.code.29.value}" },
			"undefined": { "value": "{font.code.21.value}" }
		},
		"other": {
			"placeholder": {}
		},
		"numeric": {
			"*": { "value": "{font.code.29.value}" },
			// These have more specific scopes like integer.binary and integer.decimal
			"integer": {},
			"complex": {},
			"float": {}
		}
	},
}
