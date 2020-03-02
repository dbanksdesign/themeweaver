// These didn't fit in any other category, and
// https://code.visualstudio.com/api/references/theme-color
// calls these "base" colors
export default {
	// This applies to focused sections in the sidebar as well
	// as focused inputs
	"focusBorder": { "value": "{border.secondary.value}" },
	"foreground": { "value": "{font.primary.value}" },
	"descriptionForeground": { "value": "{font.secondary.value}" },
	"errorForeground": { "value": "{font.danger.value}" },
	
	// Icons are the ones in the panel, not the ones in the activity bar
	"icon": {
		"foreground": { "value": "{font.primary.value}" },
	},
	
	// Selection background for elements not in the editor, like selecting
	// text in an input
	"selection": {
		"background": { "value": "{background.selection.primary.active.value}" }
	},
	
	// Widgets are the quick command palette, notifications, quick search, etc.
	"widget": {
		"shadow": { "value": "#0000" }
	}
}
