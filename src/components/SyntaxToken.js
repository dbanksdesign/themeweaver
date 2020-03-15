import React from 'react';
import Token from './Token';

const SyntaxToken = ({ path, foreground, background, fontStyle, updateToken, tokenNames, updateFontStyle }) => {
	
	const fontStyles = fontStyle.split(' ');
	const italic = fontStyles.includes('italic');
	const bold = fontStyles.includes('bold');
	const underline = fontStyles.includes('underline');
	
	return (
		<div>
			<h5>{path}</h5>
			<div>{fontStyle}</div>
			<input type="checkbox"
				checked={italic}
				onChange={() => updateFontStyle(path, {bold, underline, italic: !italic})} />
			<input type="checkbox"
				checked={bold}
				onChange={() => updateFontStyle(path, {bold: !bold, underline, italic})} />
			<input type="checkbox"
				checked={underline}
				onChange={() => updateFontStyle(path, {bold, underline: !underline, italic})} />
			<Token {...foreground}
				name="Foreground"
				id={`${path}.foreground`}
				path={path}
				secondaryKey="foreground"
				updateToken={updateToken}
				tokenNames={tokenNames} />
			<Token {...background}
				name="Background"
				id={`${path}.background`}
				path={path}
				secondaryKey="background"
				updateToken={updateToken}
				tokenNames={tokenNames} />
		</div>
	)
}

export default SyntaxToken
