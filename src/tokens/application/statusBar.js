// The status bar is the bar at the bottom buttons and context information 
export default {
	"statusBar": {
		"background": { "value": "{background.quaternary.value}" },
		"foreground": { "value": "{font.primary.value}" },
		"border": { "value": "#0000" },
		
		"debuggingBackground": { "value": "{background.debug.value}" },
		"debuggingForeground": { "value": "{font.primary.value}" },
		"debuggingBorder": { "value": "#0000" },
		
		"noFolderBackground": { "value": "{background.primary.value}" },
		"noFolderForeground": { "value": "{font.primary.value}" },
		"noFolderBorder": { "value": "#0000" }
	},
	
	"statusBarItem": {
		"activeBackground": { "value": "{background.selection.secondary.active.value}" },
		"hoverBackground": { "value": "{background.selection.secondary.inactive.value}" },
		
		"prominentBackground": { "value": "{background.badge.value}" },
		"prominentForeground": { "value": "{font.primary.value}" },
		"prominentHoverBackground": {  },
		
		"remoteBackground": { "value": "{background.interactive.base.value}" },
		"remoteForeground": { "value": "{font.primary.value}" }
	}
}
