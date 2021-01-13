import React from 'react';
import chroma from 'chroma-js';
import nightOwlTokens from '../tokens/night-owl/nightowl.json';
import nightOwlSyntax from '../tokens/night-owl/syntax';
import lightOwlTokens from '../tokens/night-owl/lightowl.json';
import lightOwlSyntax from '../tokens/night-owl/lightSyntax';

const _syntax = Object.values(nightOwlSyntax)
	.reduce((acc, curr) => {
		const value = curr.foreground;
		if (value && value.length) {
			if (acc.indexOf(value) < 0) {
				acc.push(value);
			}
		}
		return acc;
	}, []);

const _lightSyntax = Object.values(lightOwlSyntax)
	.reduce((acc, curr) => {
		const value = curr.foreground;
		if (value && value.length) {
			if (acc.indexOf(value) < 0) {
				acc.push(value);
			}
		}
		return acc;
	}, []);

const allTokens = [
	..._lightSyntax,
	..._syntax,
	...Object.values(nightOwlTokens.colors),
	...Object.values(lightOwlTokens.colors),
];

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

allTokens
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
	const scale = chroma.scale(oldColors[colorName].sort(sortByLuminance));
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

// For each color in a theme, we need to find the nearest. We need to do this
// in 2 steps: first mapping base colors to theme colors, then theme colors to app and syntax.
// We don't need to map base -> theme, we can keep those references. Instead we
// need to map app and syntax to theme's computed value... 
// That would require resolving the token object...
// const newTheme = Object.keys(dark).map(key => {
// 	const defaultValue = dark[key];
	
// })
const newBase = {};
const shades = ['100','90','20','10'];
const greyShades = ['100','90','80','60','40','20','10','5','0'];
Object.keys(newColors).forEach(colorGroup => {
	newColors[colorGroup].forEach((colorValue,i) => {
		const colorName = colorGroup === 'grey' ? greyShades[i] : shades[i];
		newBase[`base.${colorGroup}.${colorName}`] = colorValue;
	})
});

// now would need to iterate over each color in the original theme
// and find the nearest to the computed theme values...

const _all = allTokens
	.filter((value, index, array) => value && value.length && array.indexOf(value) === index)
	.sort((a, b) => {
		try {
			const ah = chroma(a).hsl()[0];
			const bh = chroma(b).hsl()[0];
			if (isNaN(ah)) {
				return 1
			}
			if (isNaN(bh)) {
				return -1
			}
			
			if (ah > bh) {
				return 1
			} else {
				return -1
			}
		} catch (error) {
			return 0
		}
	});

const sortByLuminance = (a,b) => {
	const AL = chroma(a).luminance();
	const BL = chroma(b).luminance();
	if (AL === BL) {
		return 0
	}
	if (AL < BL) {
		return 1
	} else {
		return -1
	}
}

const Swatch = ({value}) => {
	const [h,s,l] = chroma(value).hsl();
	const lum = chroma(value).luminance();
	return (
		<span style={{display:'inline-block', width:'5rem',height:'5rem',backgroundColor:value}}>{value}<br/>{Math.round(h)},{s.toFixed(2)},{l.toFixed(2)}<br/>{lum.toFixed(2)}</span>
	)
}

const TestPage = () => {
	return (
		<div className="page-content">
			{Object.keys(newColors).map(key => {
				const colors = newColors[key];
				return (
					<div>
						<h3>{key}</h3>
						{colors.sort(sortByLuminance).map(value => (<Swatch value={value} />))}
						<hr/>
					</div>
				)
			})}

			<hr/>
			<hr />
			{_all.map(value => (
				<span style={{display:'inline-block', width:'5rem',height:'5rem',backgroundColor:value}}>{value}<br/>{Math.round(chroma(value).hsl()[0])}</span>
			))}

		</div>
	);
}

export default TestPage;
