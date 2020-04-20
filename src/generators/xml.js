const pre = `<?xml version="1.0" encoding="UTF-8"?>`;

const post = ``;

const generateXMLRecursive = (obj, indent = `\t`) => {
	
}

const generateXML = (obj) => {
	return pre + generateXMLRecursive(obj) + post;
}

export default generateXML;
