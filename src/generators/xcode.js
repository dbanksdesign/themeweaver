import generatePlist from './plist';
import chroma from 'chroma-js';

const colorToArray = (color) => {
	return chroma(color).rgba(false)
		.map((val,i) => i === 3 ? val : val / 255) // alpha is 0-1, rgb is 0-255
		.join(' ');
}

const generateXcode = (allTokens) => {
	return generatePlist({
		'DVTConsoleDebuggerInputTextColor': colorToArray(
			allTokens[`application.input.foreground`].computedValue
		),
		// 'DVTConsoleDebuggerInputTextFont': ,
		'DVTConsoleDebuggerOutputTextColor': colorToArray(
			allTokens[`application.foreground`].computedValue
		),
		// 'DVTConsoleDebuggerOutputTextFont': ,
		'DVTConsoleDebuggerPromptTextColor': colorToArray(
			allTokens[`application.editorLink.activeForeground`].computedValue
		),
		// 'DVTConsoleDebuggerPromptTextFont': ,
		'DVTConsoleExectuableInputTextColor': colorToArray(
			allTokens[`application.input.foreground`].computedValue
		),
		// font
		// 'DVTConsoleExectuableInputTextFont': ,
		'DVTConsoleExectuableOutputTextColor': colorToArray(
			allTokens[`application.foreground`].computedValue
		),
		// font
		// 'DVTConsoleExectuableOutputTextFont': ,
		'DVTConsoleTextBackgroundColor': colorToArray(
			allTokens[`application.editor.background`].computedValue
		),
		'DVTConsoleTextInsertionPointColor': colorToArray(
			allTokens[`application.terminalCursor.background`].computedValue
		),
		'DVTConsoleTextSelectionColor': colorToArray(
			allTokens[`application.terminal.selectionBackground`].computedValue
		),
		'DVTDebuggerInstructionPointerColor': colorToArray(
			allTokens[`application.foreground`].computedValue
		),
		'DVTSourceTextBackground': colorToArray(
			allTokens[`application.editor.background`].computedValue
		),
		'DVTSourceTextBlockDimBackgroundColor': colorToArray(
			allTokens[`application.input.background`].computedValue
		),
		'DVTSourceTextInsertionPointColor': colorToArray(
			allTokens[`application.editorCursor.foreground`].computedValue
		),
		'DVTSourceTextInvisiblesColor': colorToArray(
			allTokens[`application.editorWhitespace.foreground`].computedValue
		),
		'DVTSourceTextSelectionColor': colorToArray(
			allTokens[`application.selection.background`].computedValue
		),
		'DVTSourceTextSyntaxColors': {
			'xcode.syntax.attribute': colorToArray(
				allTokens[`syntax.meta.tag.attributes`].foreground.computedValue
			),
			'xcode.syntax.character': colorToArray(
				allTokens[`syntax.string`].foreground.computedValue
			),
			'xcode.syntax.comment': colorToArray(
				allTokens[`syntax.comment`].foreground.computedValue
			),
			'xcode.syntax.comment.doc': colorToArray(
				allTokens[`syntax.comment.block.documentation`].foreground.computedValue
			),
			'xcode.syntax.comment.doc.keyword': colorToArray(
				allTokens[`syntax.keyword`].foreground.computedValue
			),
			'xcode.syntax.identifier.class': colorToArray(
				allTokens[`syntax.meta.class`].foreground.computedValue
			),
			'xcode.syntax.identifier.class.system': colorToArray(
				allTokens[`syntax.meta.class`].foreground.computedValue
			),
			'xcode.syntax.identifier.constant': colorToArray(
				allTokens[`syntax.variable.other.constant`].foreground.computedValue
			),
			'xcode.syntax.identifier.constant.system': colorToArray(
				allTokens[`syntax.variable.other.constant`].foreground.computedValue
			),
			'xcode.syntax.identifier.function': colorToArray(
				allTokens[`syntax.support.function`].foreground.computedValue
			),
			'xcode.syntax.identifier.function.system': colorToArray(
				allTokens[`syntax.support.function`].foreground.computedValue
			),
			'xcode.syntax.identifier.macro': colorToArray(
				allTokens[`syntax.string.key`].foreground.computedValue
			),
			'xcode.syntax.identifier.macro.system': colorToArray(
				allTokens[`syntax.string.key`].foreground.computedValue
			),
			'xcode.syntax.identifier.type': colorToArray(
				allTokens[`syntax.support.type.vendored`].foreground.computedValue
			),
			'xcode.syntax.identifier.type.system': colorToArray(
				allTokens[`syntax.support.type.vendored`].foreground.computedValue
			),
			'xcode.syntax.identifier.variable': colorToArray(
				allTokens[`syntax.variable`].foreground.computedValue
			),
			'xcode.syntax.identifier.variable.system': colorToArray(
				allTokens[`syntax.variable.other`].foreground.computedValue
			),
			'xcode.syntax.keyword': colorToArray(
				allTokens[`syntax.keyword`].foreground.computedValue
			),
			'xcode.syntax.number': colorToArray(
				allTokens[`syntax.constant.numeric`].foreground.computedValue
			),
			'xcode.syntax.plain': colorToArray(
				allTokens[`syntax.string.key`].foreground.computedValue
			),
			'xcode.syntax.preprocessor': colorToArray(
				allTokens[`syntax.storage`].foreground.computedValue
			),
			'xcode.syntax.string': colorToArray(
				allTokens[`syntax.string`].foreground.computedValue
			),
			'xcode.syntax.url': colorToArray(
				allTokens[`application.textLink.foreground`].computedValue
			),
		},
	})
}

export default generateXcode
