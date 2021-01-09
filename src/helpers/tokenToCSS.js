const tokenToCSS = ({value, computedValue}) => {
	if (value && value.indexOf('{') > -1) {
		// for now, if it is a reference with an alpha
		// just return the computed value and don't worry about referencing the original
		// TODO: make this work
		if (computedValue && computedValue.length > 7) {
			return computedValue;
		}
		return `var(--${value.replace(/\{|\}/g,'').replace(/\./g,'-')})`;
	} else {
		return value;
	}
}

export default tokenToCSS
