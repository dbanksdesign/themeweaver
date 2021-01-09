import chroma from 'chroma-js';
import nearestColor from 'nearest-color';
import defaultBaseTokens from '../tokens/base';
import {dark, light} from '../tokens/theme';
import createAllTokens from '../helpers/createAllTokens';

const sortByLuminance = (a,b) => {
	const AL = chroma(a).luminance();
	const BL = chroma(b).luminance();
	if (AL === BL) {
		return 0
	}
	if (AL < BL) {
		return -1
	} else {
		return 1
	}
}

const vscodeToTheme = (vscodeTheme) => {
	const applicationTokens = Object.values(vscodeTheme.colors);
	
	const oldColors = {
		neutral: [],
		red: [],
		orange: [],
		yellow: [],
		lime: [],
		green: [],
		teal: [],
		blue: [],
		purple: [],
		pink: [],
	}
	
	applicationTokens
		.filter((value, index, array) => value && value.length && array.indexOf(value) === index)
		.forEach(value => {
			if (value.length > 7) {
				value = value.substring(0,7);
			}
			if (value.length === 5) {
				console.log(value);
				value = value.substring(0,4);
			}
	
			const [h,s,l] = chroma(value).hsl();
			if (s < 0.25 || l < 0.15 || l > 0.95) {
				oldColors.neutral.push(value)
			} else {
				if (h < 20 || h > 340) {
					oldColors.red.push(value);
				} else if (h > 20 && h < 40) {
					oldColors.orange.push(value);
				} else if (h > 40 && h < 60) {
					oldColors.yellow.push(value)
				} else if (h > 60 && h < 80) {
					oldColors.lime.push(value)
				} else if (h > 80 && h < 140) {
					oldColors.green.push(value)
				} else if (h > 140 && h < 180) {
					oldColors.teal.push(value)
				} else if (h > 180 && h < 220) {
					oldColors.blue.push(value)
				} else if (h > 220 && h < 300) {
					oldColors.purple.push(value)
				} else if (h > 300 && h < 340) {
					oldColors.pink.push(value)
				}
			}
		});
	
	const colors = ['red','orange','yellow','lime','green','teal','blue','purple','pink'];
	const newColors = {};
	
	colors.forEach(colorName => {
		let scale;
		if (oldColors[colorName].length < 1) {
			scale = chroma.scale(
				Object.keys(defaultBaseTokens)
					.filter(key => key.includes(colorName))
					.map(key => defaultBaseTokens[key])
					.sort(sortByLuminance)
			);
		} else {
			scale = chroma.scale(oldColors[colorName].sort(sortByLuminance));
		}
		newColors[colorName] = [scale(0), scale(0.1), scale(0.9), scale(1)].map(c => c.hex());
	});
	
	const neutralScale = chroma.scale(oldColors['neutral'].sort(sortByLuminance))
	newColors['grey'] = [
		neutralScale(0),
		neutralScale(0.05),
		neutralScale(0.1),
		neutralScale(0.2),
		neutralScale(0.4),
		neutralScale(0.6),
		neutralScale(0.8),
		neutralScale(0.9),
		neutralScale(1),
	].map(c => c.hex());
	
	const newBase = {};
	const shades = ['100','90','20','10'];
	const greyShades = ['100','90','80','60','40','20','10','5','0'];
	
	Object.keys(newColors).forEach(colorGroup => {
		newColors[colorGroup].forEach((colorValue,i) => {
			const colorName = colorGroup === 'grey' ? greyShades[i] : shades[i];
			newBase[`base.${colorGroup}.${colorName}`] = colorValue;
		})
	});
	
	return {
		...defaultBaseTokens,
		...dark,
		...newBase,
	};
	// need to find out primary,secondary,tertiary colors...

	// const newTheme = createAllTokens({
	// 	...defaultTokens.base,
	// 	...defaultTokens.application,
	// 	...defaultTokens.syntax,
	// 	...newBase,
	// 	...dark
	// });

	// now would need to iterate over each color in the original theme
	// and find the nearest to the computed theme values...
	
	// return newTheme;
}

export default vscodeToTheme;
