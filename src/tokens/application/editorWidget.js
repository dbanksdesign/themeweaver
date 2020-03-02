export default {
	// The feedback widget that pops up when you click the smiley face in the
	// status bar
	"editorWidget": {
		"foreground": { "value": "{font.primary.value}" },
		"background": { "value": "{background.quaternary.value}" },
		"border": { "value": "{border.secondary.value}" },
		"resizeBorder": { "value": "{border.primary.value}" }
	},
	
	// Autocomplete in the editor
	"editorSuggestWidget": {
		"foreground": { "value": "{font.secondary.value}" },
		"background": { "value": "{background.quaternary.value}" },
		"border": { "value": "{border.secondary.value}" },
		"highlightForeground": { "value": "{font.primary.value}" },
		"selectedBackground": { "value": "{background.selection.tertiary.active.value}" }
	},
	
	// ex. Quick Fix popup or git hover popup
	"editorHoverWidget": {
		"background": { "value": "{background.tertiary.value}" },
		"border": { "value": "{border.tertiary.value}" },
		"statusBarBackground": { "value": "{background.tertiary.value}" }
	}
}
