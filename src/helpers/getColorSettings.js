import chroma from 'chroma-js';

const colors = ['red','orange','yellow','lime','green','teal','blue','purple','pink','grey'];

const getColorSettings = (allTokens) => {
	const colorSettings = {};
	
	colors.forEach(colorName => {
		let hue = 0;
		let saturation = 0;
		let lightness = 0;
		
		const colors = Object.keys(allTokens)
			.filter(key => key.includes(`base.${colorName}`));
		
		colors.forEach(key => {
			const hsl = chroma(allTokens[key].value).hsl();
			hue += hsl[0] || 0;
			saturation += hsl[1] || 0;
			lightness += hsl[2] || 0;
		});
			
		colorSettings[colorName] = {
			hue: hue / colors.length,
			saturation: saturation / colors.length,
			lightness: lightness / colors.length,
		}
	});
	
	return colorSettings;
}

export default getColorSettings;
