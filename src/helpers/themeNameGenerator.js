const themeNames = [
	'Electric Boogaloo',
	'Acid Cat',
	'Marshmallow Cat',
	'Pants',
	'Translucent Steed'
];


const themeNameGenerator = () => {
	return themeNames[Math.round(Math.random() * (themeNames.length-1))];
}

export default themeNameGenerator;
