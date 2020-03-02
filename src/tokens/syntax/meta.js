// A lot of elements have a meta scope, but it takes a lower priority than more 
// specific scopes. For example, every element from the start of a class definition 
// in Javascript to the end curly brace has a scope of `meta.class`.
// The elements where this has higher specificity are things like braces
// (curly, square, round)
export default {
	"meta": {
		"brace": {
			"round": { /* () */
				"*": { "value": "{font.primary.value}" }
			},
			"square": { /* [] */
				"*": { "value": "{font.primary.value}" },
			}
		},
		"class": {
			"*": { "value": "{font.code.22.value}" }
		},
		"jsx": {
			"children": {
				"*": { "value": "{font.primary.value}" }
			}
		},
		"object": {
			"*": { "value": "{font.code.29.value}" },
			"member": {}
		},
		"property-name": {
			"css": { "value": "{font.code.5.value}" }
		},
		"property-value": {
			"css": { "value": "{font.code.5.value}" }
		},
		"property-list": {},
		"selector": {
			"*": { "value": "{font.code.5.value}" }
		},
		"structure": {
			"dictionary": {
				"*": { "value": "{font.code.28.value}" }
			}
		},
		"tag": {
			"attributes": { "value": "{font.code.29.value}" }
		},
		"type": {
			"parameters": { "value": "{font.code.23.value}" }
		},
		"var": {
			"expr": {
				"*": { "value": "{font.code.8.value}" }
			}
		}
	},
}
