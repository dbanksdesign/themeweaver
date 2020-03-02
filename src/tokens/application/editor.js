export default {
	"editor": {
		"background": { "value": "{background.primary.value}" },
		"foreground": { "value": "{font.primary.value}" },
		
		// Editor s with "highlight" in the name refer to times when parts
		// of the code are highlighted, but might not be *selected*. For example
		// when you search in the file it will *highlight* all occurrances, but
		// will only *select* one at a time.
		
		// This is the background of the selection you make with your cursor
		// It might get overridden later depending on if the selection is a 
		// wordHighlight or wordHighlightStrong
		"selectionBackground": { "value": "{background.selection.primary.active.value}" },
		// When you select text, this is the background for *other* text that
		// matches that selection
		"selectionHighlightBackground": { "value": "{background.selection.secondary.inactive.value}" },
		// When the selected text is not in the currently active window or pane
		// This also happens in the sidebar for the currently open file when
		// the cursor is not in the file tree 
		"inactiveSelectionBackground": { "value": "{background.selection.primary.inactive.value}" },
		
		// Word highlights are when you either set your cursor within a word,
		// or select only that word
		"wordHighlightBackground": { "value": "{background.highlight.primary.inactive.value}" },
		// If you highlight a word and it is special, like if it has a tip
		"wordHighlightStrongBackground": { "value": "{background.highlight.secondary.inactive.value}" },
		
		// The current selected occurance of searched text
		"findMatchBackground": { "value": "{background.highlight.primary.active.value}" },
		// All occurances of found text that are not the current selected one
		// this also applies to matches in the sidebar
		// like searching in the file explorer
		"findMatchHighlightBackground": { "value": "{background.highlight.primary.inactive.value}" },
		
		// When you "find in selection" this is the background for the selection
		"findRangeHighlightBackground": {},
		
		// Highlight below the word for which a hover is shown.
		// Hover background only happens on non-selected and non-highlighted text
		"hoverHighlightBackground": { "value": "{background.tertiary.value}" },
		
		// Background of the line(s) the cursor is currently on
		"lineHighlightBackground": { "value": "{background.secondary.value}" },
		"lineHighlightBorder": {},
		
		// When you do a search in the file and it highlights the line
		// of the match you are on
		"rangeHighlightBackground": { "value": "{background.tertiary.value}" },
		
		// These are used in debugging
		"focusedStackFrameHighlightBackground": {},
		"stackFrameHighlightBackground": {},
		
		// When you insert a snippet that has parts you need to edit,
		// those are tabstops. Similar to selecting a part of text.
		// NOTE: because the tabstop is selected, editor.selectionBackground is also
		// applied
		"snippetTabstopHighlightBackground": {},
		"snippetTabstopHighlightBorder": {},
		"snippetFinalTabstopHighlightBackground": {},
		"snippetFinalTabstopHighlightBorder": {},
	},
	
	"editorLineNumber": {
		"foreground": { "value": "{font.tertiary.value}" },
		"activeForeground": { "value": "{font.primary.value}" }
	},
	
	"editorCursor": {
		"foreground": { "value": "{background.info.value}" }
	},
	
	"editorLink": {
		"activeForeground": { "value": "{font.link.primary.inactive.value}" },
	},
	
	// Next to the line numbers
	"editorGutter": {
		"background": { "value": "{background.primary.value}" },
		"modifiedBackground": { "value": "{border.info.value}" },
		"addedBackground": { "value": "{border.success.value}" },
		"deletedBackground": { "value": "{border.danger.value}" }
	},
	
	"editorOverviewRuler": {
		"border": { "value": "{border.secondary.value}" },

		"findMatchForeground": { "value": "#00ff00CC" },
		"rangeHighlightForeground": { "value": "#0000ffCC" },
		"selectionHighlightForeground": { "value": "{background.selection.primary.inactive.value}" },

		"currentContentForeground": { "value": "#ffffffCC" },
		"incomingContentForeground": { "value": "#00ff00CC" },
		"commonContentForeground": { "value": "#0000ffCC" },

		// Git indicators, will match similar ones in editorGutter
		"modifiedForeground": { "value": "{border.info.value}" },
		"addedForeground": { "value": "{border.success.value}" },
		"deletedForeground": { "value": "{border.danger.value}" },

		// Will match squiggly lines
		"errorForeground": { "value": "{border.danger.value}" },
		"warningForeground": { "value": "{border.warning.value}" },
		"infoForeground": { "value": "{border.info.value}" },
		"bracketMatchForeground": { "value": "{application.editorBracketMatch.background.value}" },
	},
	
	// The squiggly lines when there is an error
	"editorError": {
		"foreground": { "value": "{font.danger.value}" },
		"border": {}
	},
	// The squiggly lines when there is an warning
	"editorWarning": {
		"foreground": { "value": "{font.warning.value}" },
		"border": {}
	},
	"editorInfo": {
		"foreground": { "value": "{font.info.value}" },
		"border": {}
	},
	"editorHint": {
		"foreground": { "value": "{font.active.value}" },
		"border": {}
	},
	
	// Highlights the opening and closing brackets when the cursor is on one
	// Setting: editor.matchBrackets
	"editorBracketMatch": {
		"background": { "value": "{background.highlight.secondary.inactive.value}" },
		"border": { "value": "#0000" }
	},
	
	// Shows spaces/tabs
	"editorWhitespace": {
		"foreground": { "value": "{font.ghost.value}" }
	},
	
	// Vertical line for indents
	// Setting: editor.renderIndentGuides
	// Setting: editor.highlightActiveIndentGuide
	"editorIndentGuide": {
		"background": { "value": "{border.tertiary.value}" },
		"activeBackground": { "value": "{border.primary.value}" }
	},
	
	// Vertical line at X characters, usually around 80
	// Setting: editor.rulers
	"editorRuler": {
		"foreground": { "value": "{border.secondary.value}" }
	},
	
	// Git information text in the editor
	// Setting: editor.codeLens
	"editorCodeLens": {
		"foreground": { "value": "{font.link.secondary.inactive.value}" }
	},
	
	// Unused code
	"editorUnnecessaryCode": {
		// Only sets the opacity, not the actual color
		"opacity": { "value": "#00000088" },
		"border": { "value": "{border.primary.value}" }
	}
}
