// Things in markup/markdown languages. Applies to markdown files as well as 
// documentation comments if you include markdown syntax.
export default {
	"syntax": {
		"markup": {
			"bold": { 
				"value": "{font.code.28.value}",
				"fontStyle": "bold"
			},
			"italic": {
				"value": "{font.code.27.value}",
				"fontStyle": "italic"
			},
			"fenced_code": {
				"value": "{font.primary.value}",
			},
			"heading": { 
				"value": "{font.primary.value}",
				"fontStyle": "bold"
			},
			"quote": {
				"value": "{font.secondary.value}",
				"fontStyle": "italic"
			},
			"underline": {
				"link": { "value": "{font.code.26.value}" }
			}
		},
	}
}
