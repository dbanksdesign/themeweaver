// Things like `new`, import/export, and operators like conditionals or relational 
// (less than, greater than, etc.). Does not include type words like 
// `async`, `var`, `let`, etc., those are in storage.
export default {
	"keyword": {
		// Using '*' here will apply this to the `keyword` scope
		"*": { "value": "{font.code.8.value}" },
		"control": {
			"*": { "value": "{font.code.8.value}" },
			"conditional": {},
			"export": {},
			"import": {
				"value": "{font.code.8.value}",
				"fontStyle": "italic"
			},
			"from": {
				"value": "{font.code.8.value}",
				"fontStyle": "italic"
			},
			"flow": {
				"value": "{font.code.8.value}"
			}
		},
		"operator": {
			"*": { "value": "{font.primary.value}" },
			"arithmetic": {},
			"assignment": {},
			"bitwise": {},
			"logical": {
				"value": "{font.primary.value}"
			},
			"word": {}
		},
		"other": {
			"unit": { "value": "{font.code.29.value}" }
		}
	},
}
