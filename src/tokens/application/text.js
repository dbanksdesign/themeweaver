// These general text styles can show up in a lot of places like:
// git hover widget in the editor, settings pages, and welcome pages
export default {
  // You can find this is in the interactive playground page
  "textBlockQuote": {
    "background": { "value": "{background.tertiary.value}" },
    "border": { "value": "{border.active.value}" }
  },
  "textCodeBlock": {
    "background": { "value": "{background.secondary.value}" }
  },
  "textLink": {
    "activeForeground": { "value": "{font.link.primary.active.value}" },
    "foreground": { "value": "{font.link.primary.inactive.value}" }
  },
  "textPreformat": {
    "foreground": { "value": "{font.info.value}" }
  },
  // Still haven't found this
  "textSeparator": {
    "foreground": {}
  }
}
