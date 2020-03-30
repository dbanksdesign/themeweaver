import createResolvedTokenObject from './createResolvedTokenObject';
import createTextmateRules from './createTextmateRules';
import generatePlist from '../generators/plist';

const createTmPlist = (allTokens, name) => {
	const tmTokens = createTextmateRules(
		createResolvedTokenObject(allTokens, `syntax`)
	)
	
	const settings = {
		background: allTokens[`application.editor.background`].computedValue,
		foreground: allTokens[`application.editor.foreground`].computedValue,
		caret: allTokens[`application.editorCursor.foreground`].computedValue,
		invisible: allTokens[`application.editorWhitespace.foreground`].computedValue,
		lineHighlight: allTokens[`application.editor.lineHighlightBackground`].computedValue,
		selection: allTokens[`application.editor.selectionBackground`].computedValue,
	}
	
	return generatePlist({
		name: name,
		settings: [settings].concat(tmTokens),
		// uuid: ``,
		colorSpaceName: `sRGB`,
		// semanticClass: ``
	});
}

export default createTmPlist;
