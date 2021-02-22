import chroma from 'chroma-js';
import application from '../tokens/application';
import base from '../tokens/base';
import syntax from '../tokens/syntax';

const shades = ['100','90','20','10'];
const neutralShades = ['100','90','80','60','40','20','10','5','0'];

const getRandom = (arr, n) => {
	var result = new Array(n),
			len = arr.length,
			taken = new Array(len);
	if (n > len)
			throw new RangeError("getRandom: more elements taken than available");
	while (n--) {
			var x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
}

const applicationSettings = {
	bordered: {
		'application.sideBar.border': '{theme.border.secondary}',
		'application.activityBar.border': '{theme.border.secondary}',
		'application.panel.border': '{theme.border.secondary}',
		'application.statusBar.border': '{theme.border.secondary}'
	},
	singleBackground: {
		'application.sideBar.background': '{theme.background.primary}',
		'application.activityBar.background': '{theme.background.primary}',
		'application.panel.background': '{theme.background.primary}',
		'application.statusBar.background': '{theme.background.primary}',
	},
	highlightedTab: {
		'application.tab.activeBackground': '{theme.background.interactive.base}'
	},
	borderedTab: {
		'application.tab.activeBorderTop': '{theme.border.active}'
	},
	coloredStatusBar: {
		'application.statusBar.background': '{theme.background.badge}',
		'application.statusBar.foreground': '{theme.font.primary}',
		// 'application.statusBar.border': '{theme.border.info}',
	}
}

// This will take a limited set of inputs to create a set of design tokens
const createStarter = ({ primary, secondary, tertiary, colors=[], neutral={}, overrides={} }) => {
	const starter = {
		...base,
		...application,
		...syntax,
	};
	
	if (colors.length) {
		colors.forEach(color => {
			const {h=0, s=0, l=0, name} = color;
			const _shades = name === 'neutral' ? neutralShades : shades;
			_shades.forEach(shade => {
				const tokenName = `base.${name}.${shade}`;
				const value = chroma(base[tokenName])
					.set('hsl.h', h)
					.brighten(l)
					.saturate(s).hex();
				starter[tokenName] = value;
			});
		})
	}
	
	if (primary) {
		shades.forEach(shade => {
			starter[`base.primary.${shade}`] = `{base.${primary}.${shade}}`;
		});
	}
	
	if (secondary) {
		shades.forEach(shade => {
			starter[`base.secondary.${shade}`] = `{base.${secondary}.${shade}}`;
		});
	}
	
	if (tertiary) {
		shades.forEach(shade => {
			starter[`base.tertiary.${shade}`] = `{base.${tertiary}.${shade}}`;
		});
	}
	
	
	return {
		...starter,
		...overrides,
		info: {
			darkColors: [
				starter[`base.${primary}.10`],
				starter[`base.${secondary}.10`],
				starter[`base.${tertiary}.10`],
			],
			colors: [
				starter[`base.${primary}.100`],
				starter[`base.${secondary}.100`],
				starter[`base.${tertiary}.100`],
			]
		}
	}
};

const oneDark = createStarter({
	primary: 'neutral',
	secondary: 'blue',
	tertiary: 'blue',
	colors: [{
		name: 'neutral',
		h: 1,
		s: -4,
		l: 0.25,
	}],
	overrides: {
		...applicationSettings.coloredStatusBar
	}
});

const azure = createStarter({
	primary: 'teal',
	secondary: 'blue',
	tertiary: 'blue',
	colors: [{
		name: 'neutral',
		h: 200,
		s: 0.25
	}],
	overrides: {
		...applicationSettings.bordered,
		...applicationSettings.singleBackground,
		...applicationSettings.coloredStatusBar,
	}
});

const forest = createStarter({
	primary: 'green',
	secondary: 'orange',
	tertiary: 'red',
	colors: [{
		name: 'neutral',
		h: 177
	},{
		name: 'red',
		h: 359,
		s: -0.5
	},{
		name: 'orange',
		h: 36,
		s: -0.5
	}]
});

const pastel = createStarter({
	primary: 'pink',
	secondary: 'blue',
	tertiary: 'teal',
	colors: [{
		name: 'neutral',
		h: 229,
		s: 0.25,
		l: 1
	},{
		name: 'red',
		l: 1,
		s: -0.25,
		h: 0
	},{
		name: 'orange',
		l: 1,
		s: -0.25,
		h: 40
	},{
		name: 'yellow',
		l: 1,
		s: -0.25,
		h: 60
	},{
		name: 'lime',
		l: 1,
		s: -0.25,
		h: 90
	},{
		name: 'green',
		l: 1,
		s: -0.25,
		h: 140
	},{
		name: 'teal',
		l: 0.5,
		s: -0.25,
		h: 180
	},{
		name: 'blue',
		l: 1,
		s: -0.25,
		h: 220
	},{
		name: 'purple',
		l: 1,
		s: -0.25,
		h: 280
	},{
		name: 'pink',
		l: 1,
		s: -0.25,
		h: 350
	}],
	overrides: {
		...applicationSettings.bordered,
		...applicationSettings.singleBackground,
		...applicationSettings.coloredStatusBar,
	}
});

const starters = {
	oneDark,
	azure,
	pastel,
	forest,
	nuDisco: {
		...base,
		...application,
		...syntax,
		info: {
			darkColors: [
				base[`base.pink.10`],
				base[`base.teal.10`],
				base[`base.purple.10`],
			],
			colors: [
				base[`base.pink.100`],
				base[`base.teal.100`],
				base[`base.purple.100`],
			]
		}
	}
}

const createRandomStarter = () => {
	const s = (Math.random() * 2) - 1;
	const l = (Math.random() * 2) - 1;

	const colors = [
		{
			name: 'neutral',
			h: Math.round(Math.random() * 360),
			s: (Math.random() * 4) - 2,
			l: (Math.random() * 2) - 1
		},{
			name: 'red',
			h: Math.round((Math.random() * 40) - 20), // reds 340-360 | 0-20
			s,
			l
		},{
			name: 'orange',
			h: Math.round((Math.random() * 20) + 20), // orange 20-40
			s,
			l
		},{
			name: 'yellow',
			h: Math.round((Math.random() * 20) + 40), // yellow 40-60
			s,
			l
		},{
			name: 'lime',
			h: Math.round((Math.random() * 20) + 60), // lime 60-80
			s,
			l
		},{
			name: 'green',
			h: Math.round((Math.random() * 60) + 80), // green 80-140
			s,
			l
		},{
			name: 'teal',
			h: Math.round((Math.random() * 40) + 140), // teal 140-180
			s,
			l
		},{
			name: 'blue',
			h: Math.round((Math.random() * 40) + 180), // blue 180-220
			s,
			l
		},{
			name: 'purple',
			h: Math.round((Math.random() * 80) + 220), // purple 220-300
			s,
			l
		},{
			name: 'pink',
			h: Math.round((Math.random() * 40) + 300), // pink 300-340
			s,
			l
		}
	];
	
	const configurations = Object.keys(applicationSettings);
	const configsLength = Math.round(Math.random() * configurations.length);
	const selectedConfigs = getRandom(configurations, configsLength);
	const overrides = selectedConfigs.reduce((acc, key) => {
		return {
			...acc,
			...applicationSettings[key]
		}
	}, {});
	
	return createStarter({colors, overrides})
}

export {
	starters,
	createRandomStarter
}

export default createStarter;
