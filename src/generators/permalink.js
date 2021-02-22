import lzString from 'lz-string';
import getCompressedState from '../helpers/getCompressedState'

const generatePermaLink = ({ theme, allTokens, themeName }) => {
	const data = getCompressedState(allTokens, theme, themeName);
	return `${window.location.href}#?theme=${lzString.compressToEncodedURIComponent(data)}`;
}

export default generatePermaLink;
