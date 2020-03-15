import React from 'react';
import Token from '../components/Token';
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
	title: ``,
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
// },{
// 	title: ``,
// 	description: ``,
// 	tokens:[{
		
// 	}]
}];

const Section = ({ title, description, children, id }) => (
	<div className="section" id={id}>
		<h3>{title}</h3>
		<p>{description}</p>
		{children}
	</div>
)

const anchorify = (str) => {
	return str.replace(' ','-');
}

class ApplicationPage extends React.Component {

	render() {
		const { updateToken, tokens, tokenNames } = this.props;
		const links = sections.map(section => {
			return {
				label: section.title,
				anchor: section.title.replace(' ','-')
			}
		});

		return (
			<div className="page-with-toc">
				<TOC links={links} />
				<div className="page-content">
				<p>These are all the colors the application. Edit these values if you want to change specific things.</p>
				{sections.map(section => (
					<TokenGroup {...section}
						key={section.title}
						id={section.title.replace(' ','-')}>
						{section.tokens.map(({ path, description }) => {
							if (!tokens[path]) { console.log(path); }
							return (
								<Token {...tokens[path]}
									path={path}
									key={path}
									description={description}
									updateToken={updateToken}
									tokenNames={tokenNames} />
							)
						})}
					</TokenGroup>
				))}
				</div>
			</div>
		)
	}
}

export default ApplicationPage
