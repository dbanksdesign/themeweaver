const stripAlpha = (hex) => {
	return hex.substr(0, 7);
}

const generateSlack = (allTokens) => {
	const theme = [
		stripAlpha(allTokens[`theme.background.secondary`].computedValue), // Column BG
		stripAlpha(allTokens[`theme.background.primary`].computedValue), // Menu BG Hover
		stripAlpha(allTokens[`theme.background.interactive.hover`].computedValue), // Active Item
		stripAlpha(allTokens[`theme.font.primary`].computedValue), // Active Item Text
		stripAlpha(allTokens[`theme.background.interactive.base`].computedValue), // Hover Item
		stripAlpha(allTokens[`theme.font.primary`].computedValue), // Text Color
		stripAlpha(allTokens[`theme.background.success`].computedValue), // Active Presence
		stripAlpha(allTokens[`theme.background.badge`].computedValue), // Mention Badge
	];
	
	return theme.map(color => color.toUpperCase()).join(',');
}

export default generateSlack
