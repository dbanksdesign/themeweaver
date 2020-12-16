import chroma from 'chroma-js';
import baseTokens from '../tokens/base';


const colors = ['red','orange','yellow','lime','green','teal','blue','purple','pink'];
const shades = ['100','90','20','10'];
const greyShades = ['100','90','80','60','40','20','10','5','0'];
const brands = ['primary','secondary','tertiary'];

const createRandomStarter = () => {
	const greyHue = Math.round(Math.random() * 360);
	const greySaturation = (Math.random() * 4) - 3;
	const colorSaturation = (Math.random() * 2) - 1;
	const colorLightness = (Math.random() * 2) - 1;
	const hues = [
		Math.round((Math.random() * 40) - 20), // reds 340-360 | 0-20
		Math.round((Math.random() * 20) + 20), // orange 20-40
		Math.round((Math.random() * 20) + 40), // yellow 40-60
		Math.round((Math.random() * 20) + 60), // lime 60-80
		Math.round((Math.random() * 60) + 80), // green 80-140
		Math.round((Math.random() * 40) + 140), // teal 140-180
		Math.round((Math.random() * 40) + 180), // blue 180-220
		Math.round((Math.random() * 80) + 220), // purple 220-300
		Math.round((Math.random() * 40) + 300), // pink 300-340
	];

	const starter = Object.assign({}, baseTokens);
	colors.forEach((color,i) => {
		shades.forEach(shade => {
			const name = `base.${color}.${shade}`;
			const value = chroma(starter[name])
				.set('hsl.h', hues[i])
				.saturate(colorSaturation)
				.brighten(colorLightness)
				.hex();
			starter[name] = value;
		});
	});
	
	brands.forEach(brand => {
		const colorName = colors[Math.floor(Math.random() * colors.length)];
		shades.forEach(shade => {
			starter[`base.${brand}.${shade}`] = `{base.${colorName}.${shade}}`;
		});
	});
	
	greyShades.forEach(shade => {
		const name = `base.grey.${shade}`;
		const value = chroma(starter[name]).set('hsl.h', greyHue).saturate(greySaturation).hex();
		starter[name] = value;
	});
	
	return starter;
}

export default createRandomStarter
