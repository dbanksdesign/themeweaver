import validateColor from "../helpers/validateColor";

const stripAlpha = (hex) => {
	return validateColor(hex).substr(0, 7);
}

const generateSlack = (allTokens) => {
	// make sure to use application tokens as imported VSCode themes don't have
	// 'theme' tokens
	let theme = []
	
	try {
		let activePresence;
		if (allTokens[`application.gitDecoration.addedResourceForeground`]) {
			activePresence = allTokens[`application.gitDecoration.addedResourceForeground`].computedValue;
		} else {
			activePresence = allTokens[`application.gitDecoration.untrackedResourceForeground`].computedValue
		}
		
		theme = [
			// Column background
			stripAlpha(allTokens[`application.sideBar.background`].computedValue),
			// Menu background hover... this I think doesn't have any effect
			stripAlpha(allTokens[`application.list.activeSelectionBackground`].computedValue),
			// Active Item Text
			stripAlpha(allTokens[`application.list.activeSelectionForeground`].computedValue),
			// Active Item background
			stripAlpha(allTokens[`application.list.activeSelectionBackground`].computedValue),
			// Hover Item
			stripAlpha(allTokens[`application.editor.lineHighlightBackground`].computedValue),
			// Text Color
			stripAlpha(allTokens[`application.foreground`].computedValue),
			// Active Presence
			stripAlpha(activePresence),
			// Mention Badge
			stripAlpha(allTokens[`application.badge.background`].computedValue),
			// Top nav background
			stripAlpha(allTokens[`application.statusBar.background`].computedValue),
			// Top nav text
			stripAlpha(allTokens[`application.statusBar.foreground`].computedValue),
		];
	} catch (error) {
		console.log(error);
	}

	
	return theme.map(color => color.toUpperCase()).join(',');
}

export default generateSlack
