export default {
	"syntax": {
		"punctuation": {
			"accessor": {
				"value": "{font.primary.value}"
			},
			"definition": {
				"array": {
					"value": "{font.primary.value}"
				},
				"block": {
					"value": "{font.primary.value}"
				},
				"dictionary": {
					"value": "{font.primary.value}"
				},
				"heading": { "value": "{font.code.22.value}" },
				"list": { "value": "{font.code.21.value}" },
				"parameters": {
					"value": "{font.primary.value}"
				},
				"quote": {},
				"string": {
					"*": { "value": "{font.code.25.value}" },
					"begin": {},
					"end": {}
				},
				"tag": {
					"*": { "value": "{font.primary.value}" }
				},
				"typeparameters": { "value": "{font.primary.value}" },
				
				// ${} in string templates in JS
				"template-expression": {
					"*": { "value": "{font.code.21.value}" },
					"begin": {},
					"end": {}
				},
				"variable": {}
			},
			
			"section": {
				"*": { "value": "{font.secondary.value}" },
				"interpolation": {
					"begin": {},
					"end": {}
				}
			},
			"separator": {
				"*": { "value": "{font.primary.value}" },
				"array": { /* commas between array items */ },
				"continuation": {},
				"dictionary": { /* commas between object/dictionary attributes */ }
			},
			"terminator": { /* Semicolons in JS */
				"*": { "value": "{font.tertiary.value}" },
			}
		},
	}
}
