import React from 'react';
import { Helmet } from 'react-helmet';
// import Token from '../components/Token';
import NewToken from '../components/NewToken';
import TokenGroup from '../components/TokenGroup';
import TOC from '../components/TOC';

const sections = [{
	title: `Window border`,
	description: `The theme colors for VS Code window border.`,
	tokens: [{
		path: 'application.window.activeBorder',
		description: `Border color for the active (focused) window.`,
	},{
		path: 'application.window.inactiveBorder',
		description: `Border color for the inactive (unfocused) windows.`,
	}]
},{
	title: `Base Colors`,
	description: `General colors used throughout the interface that acts as a base. Some might get overriden in specific cases. Think of these as like setting base CSS styles on elements like body, a, and input.`,
	tokens: [{
		path: 'application.focusBorder',
		description: `Overall border color for focused elements. This color is only used if not overridden by a component.`,
	},{
		path: 'application.foreground',
		description: `Overall foreground color. This color is only used if not overridden by a component.`,
	},{
		path: 'application.widget.shadow',
		description: `Shadow color of widgets such as Find/Replace inside the editor.`,
	},{
		path: 'application.selection.background',
		description: `Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).`,
	},{
		path: 'application.descriptionForeground',
		description: `Foreground color for description text providing additional information, for example for a label.`,
	},{
		path: 'application.errorForeground',
		description: `Overall foreground color for error messages (this color is only used if not overridden by a component).`,
	},{
		path: 'application.icon.foreground',
		description: `The default color for icons in the workbench`,
	}]
},{
	title: `Text Colors`,
	description: `Colors inside a text document, such as the welcome page.`,
	tokens: [{
		path: `application.textBlockQuote.background`,
		description: `Background color for block quotes in text.`
	},{
		path: `application.textBlockQuote.border`,
		description: `Border color for block quotes in text.`
	},{
		path: `application.textCodeBlock.background`,
		description: `Background color for code blocks in text.`
	},{
		path: `application.textLink.activeForeground`,
		description: `Foreground color for links in text when clicked on and on mouse hover.`
	},{
		path: `application.textLink.foreground`,
		description: `Foreground color for links in text.`,
	},{
		path: `application.textPreformat.foreground`,
		description: `Foreground color for preformatted text segments.`,
	},{
		path: `application.textSeparator.foreground`,
		description: `Color for text separators.`
	}]
},{
	title: `Button control`,
	description: `A set of colors for button widgets such as Open Folder button in the Explorer of a new window.`,
	tokens: [{
		path: `application.button.background`,
		description: `Button background color.`,
	},{
		path: `application.button.foreground`,
		description: `Button foreground color.`,
	},{
		path: `application.button.hoverBackground`,
		description: `Button background color when hovering.`,
	},{
		path: `application.checkbox.background`,
		description: `Background color of checkbox widget.`,
	},{
		path: `application.checkbox.foreground`,
		description: `Foreground color of checkbox widget.`,
	},{
		path: `application.checkbox.border`,
		description: `Border color of checkbox widget`,
	}]
},{
	title: `Dropdown`,
	description: `A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the Dropdown control is not used on macOS currently.`,
	tokens: [{
		path: `application.dropdown.background`,
		description: `Dropdown background.`,
	},{
		path: `application.dropdown.listBackground`,
		description: `Dropdown list background.`,
	},{
		path: `application.dropdown.border`,
		description: `Dropdown border.`,
	},{
		path: `application.dropdown.foreground`,
		description: `Dropdown foreground.`,
	}]
},{
	title: `Input`,
	description: `Colors for input controls such as in the Search view or the Find/Replace dialog.`,
	tokens: [{
		path: `application.input.background`,
		description: `Input box background.`,
	},{
		path: `application.input.border`,
		description: `Input box border.`,
	},{
		path: `application.input.foreground`,
		description: `Input box foreground.`,
	},{
		path: `application.input.placeholderForeground`,
		description: `Input box foreground color for placeholder text.`,
	},{
		path: `application.inputOption.activeBackground`,
		description: `Background color of activated options in input fields.`,
	},{
		path: `application.inputOption.activeBorder`,
		description: `Border color of activated options in input fields.`,
	},{
		path: `application.inputValidation.errorBackground`,
		description: `Input validation background color for error severity.`,
	},{
		path: `application.inputValidation.errorForeground`,
		description: `Input validation foreground color for error severity.`,
	},{
		path: `application.inputValidation.errorBorder`,
		description: `Input validation border color for error severity.`,
	},{
		path: `application.inputValidation.infoBackground`,
		description: `Input validation background color for information severity.`,
	},{
		path: `application.inputValidation.infoForeground`,
		description: `Input validation foreground color for information severity.`,
	},{
		path: `application.inputValidation.infoBorder`,
		description: `Input validation border color for information severity.`,
	},{
		path: `application.inputValidation.warningBackground`,
		description: `Input validation background color for information warning.`,
	},{
		path: `application.inputValidation.warningForeground`,
		description: `Input validation foreground color for warning severity.`,
	},{
		path: `application.inputValidation.warningBorder`,
		description: `Input validation border color for warning severity`,
	}]
},{
	title: `Scrollbar`,
	description: ``,
	tokens: [{
		path: `application.scrollbar.shadow`,
		description: `Scrollbar slider shadow to indicate that the view is scrolled.`,
	},{
		path: `application.scrollbarSlider.activeBackground`,
		description: `Scrollbar slider background color when clicked on.`,
	},{
		path: `application.scrollbarSlider.background`,
		description: `Scrollbar slider background color.`,
	},{
		path: `application.scrollbarSlider.hoverBackground`,
		description: `Scrollbar slider background color when hovering`,
	}]
},{
	title: `Badge`,
	description: `Badges are small information labels, for example, search results count.`,
	tokens: [{
		path: `application.badge.foreground`,
		description: `Badge foreground color.`,
	},{
		path: `application.badge.background`,
		description: `Badge background color.`,
	}]
},{
	title: `Progress bar`,
	description: ``,
	tokens: [{
		path: `application.progressBar.background`,
		description: `Background color of the progress bar shown for long running operations.`
	}]
},{
	title: `Lists and tress`,
	description: ``,
	tokens: [{
		path: `application.list.activeSelectionBackground`,
		description: `List/Tree background color for the selected item when the list/tree is active.`,
	},{
		path: `application.list.activeSelectionForeground`,
		description: `List/Tree foreground color for the selected item when the list/tree is active.`,
	},{
		path: `application.list.dropBackground`,
		description: `List/Tree drag and drop background when moving items around using the mouse.`,
	},{
		path: `application.list.focusBackground`,
		description: `List/Tree background color for the focused item when the list/tree is active.`,
	},{
		path: `application.list.focusForeground`,
		description: `List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.`,
	},{
		path: `application.list.highlightForeground`,
		description: `List/Tree foreground color of the match highlights when searching inside the list/tree.`,
	},{
		path: `application.list.hoverBackground`,
		description: `List/Tree background when hovering over items using the mouse.`,
	},{
		path: `application.list.hoverForeground`,
		description: `List/Tree foreground when hovering over items using the mouse.`,
	},{
		path: `application.list.inactiveSelectionBackground`,
		description: `List/Tree background color for the selected item when the list/tree is inactive.`,
	},{
		path: `application.list.inactiveSelectionForeground`,
		description: `List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.`,
	},{
		path: `application.list.inactiveFocusBackground`,
		description: `List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.`,
	},{
		path: `application.list.invalidItemForeground`,
		description: `List/Tree foreground color for invalid items, for example an unresolved root in explorer.`,
	},{
		path: `application.list.errorForeground`,
		description: `Foreground color of list items containing errors.`,
	},{
		path: `application.list.warningForeground`,
		description: `Foreground color of list items containing warnings.`,
	},{
		path: `application.listFilterWidget.background`,
		description: `List/Tree Filter background color of typed text when searching inside the list/tree.`,
	},{
		path: `application.listFilterWidget.outline`,
		description: `List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.`,
	},{
		path: `application.listFilterWidget.noMatchesOutline`,
		description: `List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.`,
	},{
		path: `application.list.filterMatchBackground`,
		description: `Background color of the filtered matches in lists and trees.`,
	},{
		path: `application.list.filterMatchBorder`,
		description: `Border color of the filtered matches in lists and trees.`,
	},{
		path: `application.tree.indentGuidesStroke`,
		description: `Tree Widget's stroke color for indent guides.`,
	}]
},{
	title: `Activity bar`,
	description: `The Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.`,
	tokens: [{
		path: `application.activityBar.background`,
		description: `Activity Bar background color.`,
	},{
		path: `application.activityBar.dropBackground`,
		description: `Drag and drop feedback color for the Activity Bar items.`,
	},{
		path: `application.activityBar.foreground`,
		description: `Activity Bar foreground color (for example used for the icons).`,
	},{
		path: `application.activityBar.inactiveForeground`,
		description: `Activity Bar item foreground color when it is inactive.`,
	},{
		path: `application.activityBar.border`,
		description: `Activity Bar border color with the Side Bar.`,
	},{
		path: `application.activityBarBadge.background`,
		description: `Activity notification badge background color.`,
	},{
		path: `application.activityBarBadge.foreground`,
		description: `Activity notification badge foreground color.`,
	},{
		path: `application.activityBar.activeBorder`,
		description: `Activity Bar active indicator border color.`,
	},{
		path: `application.activityBar.activeBackground`,
		description: `Activity Bar optional background color for the active element.`,
	},{
		path: `application.activityBar.activeFocusBorder`,
		description: `Activity bar focus border color for the active item.`,
	}]
},{
	title: `Sidebar`,
	description: ``,
	tokens: [{
		path: `application.sideBar.background`,
		description: `Side Bar background color.`,
	},{
		path: `application.sideBar.foreground`,
		description: `Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.`,
	},{
		path: `application.sideBar.border`,
		description: `Side Bar border color on the side separating the editor.`,
	},{
		path: `application.sideBar.dropBackground`,
		description: `Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through.`,
	},{
		path: `application.sideBarTitle.foreground`,
		description: `Side Bar title foreground color.`,
	},{
		path: `application.sideBarSectionHeader.background`,
		description: `Side Bar section header background color.`,
	},{
		path: `application.sideBarSectionHeader.foreground`,
		description: `Side Bar section header foreground color.`,
	},{
		path: `application.sideBarSectionHeader.border`,
		description: `Side bar section header border color.`,
	}]
},{
	title: `Minimap`,
	description: `The Minimap shows a minified version of the current file.`,
	tokens:[{
		path: `application.minimap.findMatchHighlight`,
		description: `Highlight color for matches from search within files.`,
	},{
		path: `application.minimap.selectionHighlight`,
		description: `Highlight color for the editor selection.`,
	},{
		path: `application.minimap.errorHighlight`,
		description: `Highlight color for errors within the editor.`,
	},{
		path: `application.minimap.warningHighlight`,
		description: `Highlight color for warnings within the editor.`,
	},{
		path: `application.minimap.background`,
		description: `Minimap background color.`,
	},{
		path: `application.minimapSlider.background`,
		description: `Minimap slider background color.`,
	},{
		path: `application.minimapSlider.hoverBackground`,
		description: `Minimap slider background color when hovering.`,
	},{
		path: `application.minimapSlider.activeBackground`,
		description: `Minimap slider background color when clicked on.`,
	},{
		path: `application.minimapGutter.addedBackground`,
		description: `Minimap gutter color for added content.`,
	},{
		path: `application.minimapGutter.modifiedBackground`,
		description: `Minimap gutter color for modified content.`,
	},{
		path: `application.minimapGutter.deletedBackground`,
		description: `Minimap gutter color for deleted content.`,
	}]
},{
	title: `Editor groups & tabs`,
	description: `Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group`,
	tokens:[{
		path: `application.editorGroup.border`,
		description: `Color to separate multiple editor groups from each other.`,
	},{
		path: `application.editorGroup.dropBackground`,
		description: `Background color when dragging editors around.`,
	},{
		path: `application.editorGroupHeader.noTabsBackground`,
		description: `Background color of the editor group title header when Tabs are disabled (set "workbench.editor.showTabs": false).`,
	},{
		path: `application.editorGroupHeader.tabsBackground`,
		description: `Background color of the Tabs container.`,
	},{
		path: `application.editorGroupHeader.tabsBorder`,
		description: `Border color of the editor group title header when tabs are enabled.`,
	},{
		path: `application.editorGroup.emptyBackground`,
		description: `Background color of an empty editor group.`,
	},{
		path: `application.editorGroup.focusedEmptyBorder`,
		description: `Border color of an empty editor group that is focused.`,
	},{
		path: `application.tab.activeBackground`,
		description: `Active Tab background color in an active group.`,
	},{
		path: `application.tab.unfocusedActiveBackground`,
		description: `Active Tab background color in an inactive editor group.`,
	},{
		path: `application.tab.activeForeground`,
		description: `Active Tab foreground color in an active group.`,
	},{
		path: `application.tab.border`,
		description: `Border to separate Tabs from each other.`,
	},{
		path: `application.tab.activeBorder`,
		description: `Bottom border for the active tab.`,
	},{
		path: `application.tab.unfocusedActiveBorder`,
		description: `Bottom border for the active tab in an inactive editor group.`,
	},{
		path: `application.tab.activeBorderTop`,
		description: `Top border for the active tab.`,
	},{
		path: `application.tab.unfocusedActiveBorderTop`,
		description: `Top border for the active tab in an inactive editor group`,
	},{
		path: `application.tab.inactiveBackground`,
		description: `Inactive Tab background color.`,
	},{
		path: `application.tab.inactiveForeground`,
		description: `Inactive Tab foreground color in an active group.`,
	},{
		path: `application.tab.unfocusedActiveForeground`,
		description: `Active tab foreground color in an inactive editor group.`,
	},{
		path: `application.tab.unfocusedInactiveForeground`,
		description: `Inactive tab foreground color in an inactive editor group.`,
	},{
		path: `application.tab.hoverBackground`,
		description: `Tab background color when hovering`,
	},{
		path: `application.tab.unfocusedHoverBackground`,
		description: `Tab background color in an unfocused group when hovering`,
	},{
		path: `application.tab.hoverBorder`,
		description: `Border to highlight tabs when hovering`,
	},{
		path: `application.tab.unfocusedHoverBorder`,
		description: `Border to highlight tabs in an unfocused group when hovering`,
	},{
		path: `application.tab.activeModifiedBorder`,
		description: `Border on the top of modified (dirty) active tabs in an active group.`,
	},{
		path: `application.tab.inactiveModifiedBorder`,
		description: `Border on the top of modified (dirty) inactive tabs in an active group.`,
	},{
		path: `application.tab.unfocusedActiveModifiedBorder`,
		description: `Border on the top of modified (dirty) active tabs in an unfocused group.`,
	},{
		path: `application.tab.unfocusedInactiveModifiedBorder`,
		description: `Border on the top of modified (dirty) inactive tabs in an unfocused group.`,
	},{
		path: `application.editorPane.background`,
		description: `Background color of the editor pane visible on the left and right side of the centered editor layout`,
	}]
},{
	title: `Editor`,
	description: ``,
	tokens:[{
		path: `application.editor.background`,
		description: `Editor background color.`,
	},{
		path: `application.editor.foreground`,
		description: `Editor default foreground color.`,
	},{
		path: `application.editorLineNumber.foreground`,
		description: `Color of editor line numbers.`,
	},{
		path: `application.editorLineNumber.activeForeground`,
		description: `Color of the active editor line number.`,
	},{
		path: `application.editorCursor.background`,
		description: `The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.`,
	},{
		path: `application.editorCursor.foreground`,
		description: `Color of the editor cursor.`,
	},{
		path: `application.editor.selectionBackground`,
		description: `Color of the editor selection.`,
	},{
		path: `application.editor.selectionForeground`,
		description: `Color of the selected text for high contrast.`,
	},{
		path: `application.editor.inactiveSelectionBackground`,
		description: `Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.`,
	},{
		path: `application.editor.selectionHighlightBackground`,
		description: `Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.`,
	},{
		path: `application.editor.selectionHighlightBorder`,
		description: `Border color for regions with the same content as the selection.`,
	},{
		path: `application.editor.wordHighlightBackground`,
		description: `Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.`,
	},{
		path: `application.editor.wordHighlightBorder`,
		description: `Border color of a symbol during read-access, for example when reading a variable.`,
	},{
		path: `application.editor.wordHighlightStrongBackground`,
		description: `Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.`,
	},{
		path: `application.editor.wordHighlightStrongBorder`,
		description: `Border color of a symbol during write-access, for example when writing to a variable.`,
	},{
		path: `application.editor.findMatchBackground`,
		description: `Color of the current search match.`,
	},{
		path: `application.editor.findMatchHighlightBackground`,
		description: `Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.`,
	},{
		path: `application.editor.findRangeHighlightBackground`,
		description: `Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.`,
	},{
		path: `application.editor.findMatchBorder`,
		description: `Border color of the current search match.`,
	},{
		path: `application.editor.findMatchHighlightBorder`,
		description: `Border color of the other search matches.`,
	},{
		path: `application.editor.findRangeHighlightBorder`,
		description: `Border color the range limiting the search (Enable 'Find in Selection' in the find widget).`,
	}]
},{
	title: `Search editor`,
	description: ``,
	tokens:[{
		path: `application.searchEditor.findMatchBackground`,
		description: `Color of the editor's results.`,
	},{
		path: `application.searchEditor.findMatchBorder`,
		description: `Border color of the editor's results.`,
	},{
		path: `application.searchEditor.textInputBorder`,
		description: `Search editor text input box border.`,
	}]
},{
	title: ``,
	description: ``,
	tokens:[{
		path: `application.editor.hoverHighlightBackground`,
		description: `Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.editor.lineHighlightBackground`,
		description: `Background color for the highlight of line at the cursor position.`
	},{
		path: `application.editor.lineHighlightBorder`,
		description: `Background color for the border around the line at the cursor position.`
	},{
		path: `application.editorLink.activeForeground`,
		description: `Color of active links.`
	},{
		path: `application.editor.rangeHighlightBackground`,
		description: `Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.editor.rangeHighlightBorder`,
		description: `Background color of the border around highlighted ranges.`
	},{
		path: `application.editor.symbolHighlightBackground`,
		description: `Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.editor.symbolHighlightBorder`,
		description: `Background color of the border around highlighted symbols.`
	},{
		path: `application.editorWhitespace.foreground`,
		description: `Color of whitespace characters in the editor.`
	},{
		path: `application.editorIndentGuide.background`,
		description: `Color of the editor indentation guides.`
	},{
		path: `application.editorIndentGuide.activeBackground`,
		description: `Color of the active editor indentation guides.`
	},{
		path: `application.editorRuler.foreground`,
		description: `Color of the editor rulers.`
	},{
		path: `application.editorCodeLens.foreground`,
		description: `Foreground color of an editor CodeLens.`
	},{
		path: `application.editorLightBulb.foreground`,
		description: `The color used for the lightbulb actions icon.`
	},{
		path: `application.editorLightBulbAutoFix.foreground`,
		description: `The color used for the lightbulb auto fix actions icon.`
	},{
		path: `application.editorBracketMatch.background`,
		description: `Background color behind matching brackets.`
	},{
		path: `application.editorBracketMatch.border`,
		description: `Color for matching brackets boxes.`
	},{
		path: `application.editor.foldBackground`,
		description: `Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.`
	}]
},{
	title: `Overview ruler`,
	description: `This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.`,
	tokens:[{
		path: `application.editorOverviewRuler.border`,
		description: `Color of the overview ruler border.`
	},{
		path: `application.editorOverviewRuler.findMatchForeground`,
		description: `Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.editorOverviewRuler.rangeHighlightForeground`,
		description: `Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.editorOverviewRuler.selectionHighlightForeground`,
		description: `Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.editorOverviewRuler.wordHighlightForeground`,
		description: `Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.editorOverviewRuler.wordHighlightStrongForeground`,
		description: `Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.editorOverviewRuler.modifiedForeground`,
		description: `Overview ruler marker color for modified content.`
	},{
		path: `application.editorOverviewRuler.addedForeground`,
		description: `Overview ruler marker color for added content.`
	},{
		path: `application.editorOverviewRuler.deletedForeground`,
		description: `Overview ruler marker color for deleted content.`
	},{
		path: `application.editorOverviewRuler.errorForeground`,
		description: `Overview ruler marker color for errors.`
	},{
		path: `application.editorOverviewRuler.warningForeground`,
		description: `Overview ruler marker color for warnings.`
	},{
		path: `application.editorOverviewRuler.infoForeground`,
		description: `Overview ruler marker color for infos.`
	},{
		path: `application.editorOverviewRuler.bracketMatchForeground`,
		description: `Overview ruler marker color for matching brackets.`
	}]
},{
	title: `Editor errors and warnings`,
	description: ``,
	tokens:[{
		path: `application.editorError.foreground`,
		description: `Foreground color of error squiggles in the editor.`
	},{
		path: `application.editorError.border`,
		description: `Border color of error boxes in the editor.`
	},{
		path: `application.editorWarning.foreground`,
		description: `Foreground color of warning squiggles in the editor.`
	},{
		path: `application.editorWarning.border`,
		description: `Border color of warning boxes in the editor.`
	},{
		path: `application.editorInfo.foreground`,
		description: `Foreground color of info squiggles in the editor.`
	},{
		path: `application.editorInfo.border`,
		description: `Border color of info boxes in the editor.`
	},{
		path: `application.editorHint.foreground`,
		description: `Foreground color of hints in the editor.`
	},{
		path: `application.editorHint.border`,
		description: `Border color of hint boxes in the editor.`
	},{
		path: `application.problemsErrorIcon.foreground`,
		description: `The color used for the problems error icon.`
	},{
		path: `application.problemsWarningIcon.foreground`,
		description: `The color used for the problems warning icon.`
	},{
		path: `application.problemsInfoIcon.foreground`,
		description: `The color used for the problems info icon.`
	}]
},{
	title: `Unused source code`,
	description: ``,
	tokens:[{
		path: `application.editorUnnecessaryCode.border`,
		description: `Border color of unnecessary (unused) source code in the editor.`
	},{
		path: `application.editorUnnecessaryCode.opacity`,
		description: `Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the "editorUnnecessaryCode.border" theme color to underline unnecessary code instead of fading it out.`
	}]
},{
	title: `Editor gutter`,
	description: ``,
	tokens:[{
		path: `application.editorGutter.background`,
		description: `Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.`
	},{
		path: `application.editorGutter.modifiedBackground`,
		description: `Editor gutter background color for lines that are modified.`
	},{
		path: `application.editorGutter.addedBackground`,
		description: `Editor gutter background color for lines that are added.`
	},{
		path: `application.editorGutter.deletedBackground`,
		description: `Editor gutter background color for lines that are deleted.`
	},{
		path: `application.editorGutter.commentRangeForeground`,
		description: `Editor gutter decoration color for commenting ranges.`
	}]
},{
	title: `Diff editor colors`,
	description: `For coloring inserted and removed text, use either a background or a border color but not both`,
	tokens:[{
		path: `application.diffEditor.insertedTextBackground`,
		description: `Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.diffEditor.insertedTextBorder`,
		description: `Outline color for the text that got inserted.`
	},{
		path: `application.diffEditor.removedTextBackground`,
		description: `Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.diffEditor.removedTextBorder`,
		description: `Outline color for text that got removed.`
	},{
		path: `application.diffEditor.border`,
		description: `Border color between the two text editors`
	}]
},{
	title: `Editor widget`,
	description: `The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.`,
	tokens:[{
		path: `application.editorWidget.foreground`,
		description: `Foreground color of editor widgets, such as find/replace.`
	},{
		path: `application.editorWidget.background`,
		description: `Background color of editor widgets, such as Find/Replace.`
	},{
		path: `application.editorWidget.border`,
		description: `Border color of the editor widget unless the widget does not contain a border or defines its own border color.`
	},{
		path: `application.editorWidget.resizeBorder`,
		description: `Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.`
	},{
		path: `application.editorSuggestWidget.background`,
		description: `Background color of the suggestion widget.`
	},{
		path: `application.editorSuggestWidget.border`,
		description: `Border color of the suggestion widget.`
	},{
		path: `application.editorSuggestWidget.foreground`,
		description: `Foreground color of the suggestion widget.`
	},{
		path: `application.editorSuggestWidget.highlightForeground`,
		description: `Color of the match highlights in the suggestion widget.`
	},{
		path: `application.editorSuggestWidget.selectedBackground`,
		description: `Background color of the selected entry in the suggestion widget.`
	},{
		path: `application.editorHoverWidget.foreground`,
		description: `Foreground color of the editor hover.`
	},{
		path: `application.editorHoverWidget.background`,
		description: `Background color of the editor hover.`
	},{
		path: `application.editorHoverWidget.border`,
		description: `Border color of the editor hover.`
	},{
		path: `application.editorHoverWidget.statusBarBackground`,
		description: `Background color of the editor hover status bar`
	},{
		path: `application.debugExceptionWidget.background`,
		description: `Exception widget background color.`
	},{
		path: `application.debugExceptionWidget.border`,
		description: `Exception widget border color.`
	},{
		path: `application.editorMarkerNavigation.background`,
		description: `Editor marker navigation widget background.`
	},{
		path: `application.editorMarkerNavigationError.background`,
		description: `Editor marker navigation widget error color.`
	},{
		path: `application.editorMarkerNavigationWarning.background`,
		description: `Editor marker navigation widget warning color.`
	},{
		path: `application.editorMarkerNavigationInfo.background`,
		description: `Editor marker navigation widget info color.`
	}]
},{
	title: `Peek view colors`,
	description: `Peek views are used to show references and declarations as a view inside the editor.`,
	tokens:[{
		path: `application.peekView.border`,
		description: `Color of the peek view borders and arrow.`
	},{
		path: `application.peekViewEditor.background`,
		description: `Background color of the peek view editor.`
	},{
		path: `application.peekViewEditorGutter.background`,
		description: `Background color of the gutter in the peek view editor.`
	},{
		path: `application.peekViewEditor.matchHighlightBackground`,
		description: `Match highlight color in the peek view editor.`
	},{
		path: `application.peekViewEditor.matchHighlightBorder`,
		description: `Match highlight border color in the peek view editor.`
	},{
		path: `application.peekViewResult.background`,
		description: `Background color of the peek view result list.`
	},{
		path: `application.peekViewResult.fileForeground`,
		description: `Foreground color for file nodes in the peek view result list.`
	},{
		path: `application.peekViewResult.lineForeground`,
		description: `Foreground color for line nodes in the peek view result list.`
	},{
		path: `application.peekViewResult.matchHighlightBackground`,
		description: `Match highlight color in the peek view result list.`
	},{
		path: `application.peekViewResult.selectionBackground`,
		description: `Background color of the selected entry in the peek view result list.`
	},{
		path: `application.peekViewResult.selectionForeground`,
		description: `Foreground color of the selected entry in the peek view result list.`
	},{
		path: `application.peekViewTitle.background`,
		description: `Background color of the peek view title area.`
	},{
		path: `application.peekViewTitleDescription.foreground`,
		description: `Color of the peek view title info.`
	},{
		path: `application.peekViewTitleLabel.foreground`,
		description: `Color of the peek view title`
	}]
},{
	title: `Merge conflicts`,
	description: `Merge conflict decorations are shown when the editor contains special diff ranges.`,
	tokens:[{
		path: `application.merge.currentHeaderBackground`,
		description: `Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.merge.currentContentBackground`,
		description: `Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.merge.incomingHeaderBackground`,
		description: `Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.merge.incomingContentBackground`,
		description: `Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.merge.border`,
		description: `Border color on headers and the splitter in inline merge conflicts.`
	},{
		path: `application.merge.commonContentBackground`,
		description: `Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.merge.commonHeaderBackground`,
		description: `Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.`
	},{
		path: `application.editorOverviewRuler.currentContentForeground`,
		description: `Current overview ruler foreground for inline merge conflicts.`
	},{
		path: `application.editorOverviewRuler.incomingContentForeground`,
		description: `Incoming overview ruler foreground for inline merge conflicts.`
	},{
		path: `application.editorOverviewRuler.commonContentForeground`,
		description: `Common ancestor overview ruler foreground for inline merge conflicts`
	}]
},{
	title: `Panel`,
	description: ``,
	tokens:[{
		path: `application.panel.background`,
		description: `Panel background color.`
	},{
		path: `application.panel.border`,
		description: `Panel border color to separate the panel from the editor.`
	},{
		path: `application.panel.dropBackground`,
		description: `Drag and drop feedback color for the panel title items. The color should have transparency so that the panel entries can still shine through.`
	},{
		path: `application.panelTitle.activeBorder`,
		description: `Border color for the active panel title.`
	},{
		path: `application.panelTitle.activeForeground`,
		description: `Title color for the active panel.`
	},{
		path: `application.panelTitle.inactiveForeground`,
		description: `Title color for the inactive panel.`
	},{
		path: `application.panelInput.border`,
		description: `Input box border for inputs in the panel.`
	}]
},{
	title: `Git`,
	description: ``,
	tokens:[{
		path: `application.gitDecoration.addedResourceForeground`,
		description: `Color for added Git resources. Used for file labels and the SCM viewlet.`
	},{
		path: `application.gitDecoration.modifiedResourceForeground`,
		description: `Color for modified Git resources. Used for file labels and the SCM viewlet.`
	},{
		path: `application.gitDecoration.deletedResourceForeground`,
		description: `Color for deleted Git resources. Used for file labels and the SCM viewlet.`
	},{
		path: `application.gitDecoration.untrackedResourceForeground`,
		description: `Color for untracked Git resources. Used for file labels and the SCM viewlet.`
	},{
		path: `application.gitDecoration.ignoredResourceForeground`,
		description: `Color for ignored Git resources. Used for file labels and the SCM viewlet.`
	},{
		path: `application.gitDecoration.conflictingResourceForeground`,
		description: `Color for conflicting Git resources. Used for file labels and the SCM viewlet.`
	},{
		path: `application.gitDecoration.submoduleResourceForeground`,
		description: `Color for submodule resources.`
	}]
}];

class ApplicationPage extends React.Component {
	state = {
		filter: '',
		filteredSections: sections
	}
	
	handleFilter = (e) => {
		const filteredSections = [];
		sections.forEach(section => {
			const tokens = section.tokens
				.filter(token => token.path.indexOf(e.target.value) >= 0);
			if (tokens.length) {
				filteredSections.push(Object.assign({}, section, { tokens }))
			}
		});
		this.setState({
			filter: e.target.value,
			filteredSections
		});
	}
	
	clearSearch = (e) => {
		this.setState({
			filter: '',
			filteredSections: sections
		});
	}
	
	render() {
		const { updateToken, tokens, tokenNames } = this.props;
		const { filteredSections } = this.state;
		const links = filteredSections.map(section => {
			return {
				label: section.title,
				anchor: section.title.replace(' ','-')
			}
		});

		return (
			<>
				<Helmet>
					<title>Application Styles | Themeweaver</title>
				</Helmet>
				<TOC defaultVisibility={false} links={links} />
				<div className="page-content" id="page-content">
					<div className="page-content-inner">
					<h1>Application</h1>
					<p>These are all the colors the application. Edit these values if you want to change specific things. There are A LOT of elements you can style so this can be a bit overwhelming. It is easier to change values in Base or Theme, which will affect these values rather than editing these directly. Editing these values is Hardcore mode.</p>
					<div className="search">
						<input className="search-input" placeholder="filter application styles" type="text" value={this.state.filter} onChange={this.handleFilter} />
						<button className="search-clear" onClick={this.clearSearch}>
							<span className="codicon codicon-x" />
						</button>
					</div>
					{filteredSections.map(section => (
						<TokenGroup {...section}
							key={section.title}
							id={section.title.replace(' ','-')}>
							{section.tokens.map(({ path, description }) => {
								if (!tokens[path]) { console.log(path); }
								return (
									<NewToken {...tokens[path]}
										path={path}
										key={path}
										allTokens={tokens}
										description={description}
										updateToken={updateToken}
										tokenNames={tokenNames} />
								)
							})}
						</TokenGroup>
					))}
				</div>
				</div>
			</>
		)
	}
}

export default ApplicationPage
