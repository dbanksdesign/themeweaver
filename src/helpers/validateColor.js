// monaco editor craps out when given a 3 or 4 digit hex,
// even though those are completely valid. So lets make sure
// to either send back a 6 or 8 digit hex or nothing at all.
const validateColor = (hex) => {
	if (!hex) return;
	
	const rgb = hex.substring(1); // remove #
	const length = rgb.length;
	let r,g,b,a;

	switch (length) {
		case 3:
			r = rgb.substring(0,1);
			g = rgb.substring(1,2);
			b = rgb.substring(2,3);
			return `#${r}${r}${g}${g}${b}${b}`;
		case 4:
			r = rgb.substring(0,1);
			g = rgb.substring(1,2);
			b = rgb.substring(2,3);
			a = rgb.substring(3,4);
			return `#${r}${r}${g}${g}${b}${b}${a}${a}`
		case 5:
			return null;
		case 6:
			return hex;
		case 7:
			return null;
		case 8:
			return hex;
		default:
			console.log(hex);
			return null;
	}
}

export default validateColor;
