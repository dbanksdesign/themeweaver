// Code comments, you can target single, block, and documentation type comments
export default {
	"comment": {
		// Using * will work like apply to all nested scopes
		"*": { "value": "{font.tertiary.value}" },
		"line": {
			"value": "{font.tertiary.value}",
			"fontStyle": "italic"
		},
		"block": {
			"documentation": { "value": "{font.secondary.value}" }
		},
		"single": { "value": "{font.tertiary.value}" }
	},
}
