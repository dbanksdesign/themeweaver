const refToLink = (ref) => {
	return `/editor/${ref.split('.')[0]}#${ref.replace(/\./g,'-')}`
}

export default refToLink
