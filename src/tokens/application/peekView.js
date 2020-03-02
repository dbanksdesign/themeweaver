// Peak View is an inline preview of code. You can open it
// by clicking on the git diff borders in the gutter of the editor which brings up the current changes
export default {
  // Right click on a function/variable and click on peek view in the context menu
  "peekView": {
    "border": { "value": "{border.primary.value}" }
  },
  
  "peekViewEditor": {
    "background": { "value": "{background.primary.value}" },
    "matchHighlightBackground": { "value": "{background.quaternary.value}" },
    "matchHighlightBorder": {}
  },
  
  // 
  "peekViewResult": {
    "background": { "value": "{background.secondary.value}" },
    "fileForeground": { "value": "{font.link.primary.active.value}" },
    "lineForeground": { "value": "{font.primary.value}" },
    "matchHighlightBackground": { "value": "{application.editor.findMatchHighlightBackground.value}" },
    "selectionBackground": { "value": "{application.editor.findMatchBackground.value}" },
    "selectionForeground": {}
  },
  
  "peekViewTitle": {
    "background": { "value": "{background.tertiary.value}" }
  },
  
  "peekViewTitleDescription": {
    "foreground": { "value": "{font.primary.value}" }
  },
  
  "peekViewTitleLabel": {
    "foreground": { "value": "{font.tertiary.value}" }
  }
}
