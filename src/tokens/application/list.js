// List and trees like the File Explorer.
// An active list/tree has keyboard focus, an inactive does not.
export default {
	"list": {
		"activeSelectionBackground": { "value": "{background.selection.tertiary.active.value}" },
		"activeSelectionForeground": { "value": "{font.primary.value}" },
		"inactiveSelectionBackground": { "value": "{background.selection.tertiary.inactive.value}" },
		"inactiveSelectionForeground": { "value": "{font.primary.value}" },
		"focusBackground": { "value": "{background.selection.tertiary.active.value}" },
		"focusForeground": { "value": "{font.primary.value}" },
		"hoverBackground": { "value": "{background.selection.tertiary.inactive.value}" },
		"hoverForeground": { "value": "{font.primary.value}" },
		
		"dropBackground": { "value": "{background.selection.secondary.active.value}" },
		
		"highlightForeground": { "value": "{font.primary.value}" },
		"invalidItemForeground": { "value": "{font.danger.value}" },
		"errorForeground": { "value": "{font.danger.value}" },
		"warningForeground": { "value": "{font.warning.value}" }
	},
	
	// You can trigger this by placing focus in the file explorer and start typing
	"listFilterWidget": {
		"background": { "value": "{background.primary.value}" },
		"outline": { "value": "{border.secondary.value}" },
		"noMatchesOutline": { "value": "{border.danger.value}" }
	}
}
