const lsGet = ( key ) => {
	const item = localStorage.getItem(key);
	if (item) {
		return JSON.parse(item);
	} else {
		return null;
	}
}

const lsSet = ( key, value ) => {
	localStorage.setItem(key, JSON.stringify(value));
}

export { lsSet, lsGet }
