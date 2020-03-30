import generatePlist from './plist';
import chroma from 'chroma-js';

const colorToDictionary = (color) => {
	const rgb = chroma(color).rgba(false);
	return {
		'Red Component': rgb[0] / 255,
		'Green Component': rgb[1] / 255,
		'Blue Component': rgb[2] / 255,
		'Alpha Component': rgb[3],
		'Color Space': 'sRGB'
	}
}

const generateiTerm = (allTokens) => {
	return generatePlist({
		'Background Color': colorToDictionary(
			allTokens[`application.editor.background`].computedValue
		),
		'Foreground Color': colorToDictionary(
			allTokens[`application.editor.foreground`].computedValue
		),
		'Cursor Color': colorToDictionary(
			allTokens[`application.editorCursor.foreground`].computedValue
		),
		// 'Cursor Guide Color': '',
		// 'Cursor Text Color': '',
		'Selection Color': colorToDictionary(
			allTokens[`application.terminal.selectionBackground`].computedValue
		),
		// 'Selected Text Color': '',
		'Link Color': colorToDictionary(
			allTokens[`application.editorLink.activeForeground`].computedValue
		),
		'Badge Color': colorToDictionary(
			allTokens[`application.badge.background`].computedValue
		),
		
		'Ansi 0 Color': colorToDictionary(
			allTokens[`application.terminal.ansiBlack`].computedValue
		),
		'Ansi 1 Color': colorToDictionary(
			allTokens[`application.terminal.ansiRed`].computedValue
		),
		'Ansi 2 Color': colorToDictionary(
			allTokens[`application.terminal.ansiGreen`].computedValue
		),
		'Ansi 3 Color': colorToDictionary(
			allTokens[`application.terminal.ansiYellow`].computedValue
		),
		'Ansi 4 Color': colorToDictionary(
			allTokens[`application.terminal.ansiBlue`].computedValue
		),
		'Ansi 5 Color': colorToDictionary(
			allTokens[`application.terminal.ansiMagenta`].computedValue
		),
		'Ansi 6 Color': colorToDictionary(
			allTokens[`application.terminal.ansiCyan`].computedValue
		),
		'Ansi 7 Color': colorToDictionary(
			allTokens[`application.terminal.ansiWhite`].computedValue
		),
		'Ansi 8 Color': colorToDictionary(
			allTokens[`application.terminal.ansiBrightBlack`].computedValue
		),
		'Ansi 9 Color': colorToDictionary(
			allTokens[`application.terminal.ansiBrightRed`].computedValue
		),
		'Ansi 10 Color': colorToDictionary(
			allTokens[`application.terminal.ansiBrightGreen`].computedValue
		),
		'Ansi 11 Color': colorToDictionary(
			allTokens[`application.terminal.ansiBrightYellow`].computedValue
		),
		'Ansi 12 Color': colorToDictionary(
			allTokens[`application.terminal.ansiBrightBlue`].computedValue
		),
		'Ansi 13 Color': colorToDictionary(
			allTokens[`application.terminal.ansiBrightMagenta`].computedValue
		),
		'Ansi 14 Color': colorToDictionary(
			allTokens[`application.terminal.ansiBrightCyan`].computedValue
		),
		'Ansi 15 Color': colorToDictionary(
			allTokens[`application.terminal.ansiBrightWhite`].computedValue
		),
	})
}

export default generateiTerm
