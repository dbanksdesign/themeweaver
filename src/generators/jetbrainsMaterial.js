const generateJetbrainsMaterial = ({name, allTokens, dark}) => {
	return `<mtTheme>
  <id>a${name}df</id>
  <editorColorsScheme>${name}</editorColorsScheme>
  <dark>${dark}</dark>
  <name>${name}</name>
  <colors>
    <color id="background" value="${allTokens['application.editor.background'].computedValue}"/>
    <color id="foreground" value="${allTokens['application.editor.foreground'].computedValue}"/>
    <color id="text" value="${allTokens['theme.font.secondary'].computedValue}"/>
    <color id="highlight" value="${allTokens['theme.background.highlight.primary.active'].computedValue}"/>
    <color id="selectionBackground" value="${allTokens['theme.background.selection.primary.active'].computedValue}"/>
    <color id="selectionForeground" value="${allTokens['theme.font.primary'].computedValue}"/>
    <color id="button" value="${allTokens['theme.background.tertiary'].computedValue}"/>
    <color id="secondaryBackground" value="${allTokens['theme.background.secondary'].computedValue}"/>
    <color id="disabled" value="${allTokens['theme.font.tertiary'].computedValue}"/>
    <color id="contrast" value="${allTokens['theme.background.primary'].computedValue}"/>
    <color id="tableSelected" value="${allTokens['theme.background.selection.secondary.active'].computedValue}"/>
    <color id="secondBorder" value="${allTokens['theme.border.secondary'].computedValue}"/>
    <color id="treeSelection" value="${allTokens['theme.font.quaternary'].computedValue}"/>
    <color id="notifications" value="${allTokens['theme.background.badge'].computedValue}"/>
    <color id="accent" value="${allTokens['theme.background.info'].computedValue}"/>
    <color id="excluded" value="${allTokens['theme.font.ghost'].computedValue}"/>
  </colors>
  <themeId>${name}</themeId>
</mtTheme>`
}

export default generateJetbrainsMaterial
