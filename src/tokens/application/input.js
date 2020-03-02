export default {
	"input": {
		"background": { "value": "{background.tertiary.value}" },
		"border": { "value": "#0000" },
		"foreground": { "value": "{font.primary.value}" },
		"placeholderForeground": { "value": "{font.tertiary.value}" }
	},
	
	"inputValidation": {
		"errorBackground": { "value": "{background.danger.value}" },
		"errorForeground": { "value": "{font.inverse.value}" },
		"errorBorder": { "value": "{border.danger.value}" },
		
		// You can trigger this by setting git.inputValidation to "always"
		"infoBackground": { "value": "{background.info.value}" },
		"infoForeground": { "value": "{font.inverse.value}" },
		"infoBorder": { "value": "{border.info.value}" },
		
		// you can trigger this by writing a commit message in the source control panel
		// over 50 characters long
		"warningBackground": { "value": "{background.warning.value}" },
		"warningForeground": { "value": "{font.inverse.value}" },
		"warningBorder": { "value": "{border.warning.value}" }
	},
	
	// For example the buttons inside the search and search in file inputs
	"inputOption": {
		"activeBorder": { "value": "#0000" },
		"activeBackground": { "value": "{background.interactive.base.value}" }
	}
}
