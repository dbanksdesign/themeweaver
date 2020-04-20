const firstNames = [
	'Cyber',
	'Electric',
	'Flux',
	'Rainbow',
	'Marshmallow',
	'One',
	'Alpha',
	'Omega',
	'Acid',
	'Hyper',
	'Cobalt',
	'Groove',
	'Azure',
	'Pure',
	'Deep'
];

const lastNames = [
	'Overdrive',
	'Override',
	'Dreams',
	'Nights',
	'Cat',
	'City',
	'Panic',
	'Nebula',
	'Nova',
	'Source',
	'Space',
	'Zero',
	'Boogaloo',
	'Panda',
	'Horizon',
	'Moon'
]


const themeNameGenerator = () => {
	return firstNames[Math.round(Math.random() * (firstNames.length-1))] +
		lastNames[Math.round(Math.random() * (lastNames.length-1))];
}

export default themeNameGenerator;
