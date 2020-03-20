import React from 'react';
import Token from './Token';

const SyntaxToken = ({ path, foreground, background, fontStyle, updateToken, tokenNames, updateFontStyle }) => {
	
	const fontStyles = fontStyle.split(' ');
	const italic = fontStyles.includes('italic');
	const bold = fontStyles.includes('bold');
	const underline = fontStyles.includes('underline');
	
	return (
		<div className="syntax-token">
			<h4>{path.replace(`syntax.`,``)}</h4>
			<div className="checkbox-group">
				<div className="checkbox checkbox-group-item">
					<input type="checkbox"
						checked={italic}
						id={`${path}.italic`}
						onChange={() => updateFontStyle(path, {bold, underline, italic: !italic})} />
					<label htmlFor={`${path}.italic`}>Italic</label>
				</div>
				<div className="checkbox checkbox-group-item">
					<input type="checkbox"
						checked={bold}
						id={`${path}.bold`}
						onChange={() => updateFontStyle(path, {bold: !bold, underline, italic})} />
					<label htmlFor={`${path}.bold`}>Bold</label>
				</div>
				<div className="checkbox checkbox-group-item">
					<input type="checkbox"
						checked={underline}
						id={`${path}.underline`}
						onChange={() => updateFontStyle(path, {bold, underline: !underline, italic})} />
					<label htmlFor={`${path}.underline`}>Underline</label>
				</div>
			</div>
			<Token {...foreground}
				name="Foreground"
				id={`${path}.foreground`}
				path={path}
				secondaryKey="foreground"
				updateToken={updateToken}
				tokenNames={tokenNames} />
			{/* Background syntax styles don't work 😭 */}
			{/* <Token {...background}
				name="Background"
				id={`${path}.background`}
				path={path}
				secondaryKey="background"
				updateToken={updateToken}
				tokenNames={tokenNames} /> */}
		</div>
	)
}

export default SyntaxToken
