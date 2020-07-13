import React from 'react';
import Token from '.';
import Checkbox, {CheckboxGroup} from '../Checkbox';

const SyntaxToken = ({ allTokens, path, foreground, fontStyle='', updateToken, tokenNames, updateFontStyle }) => {
	const italic = fontStyle.includes('italic');
	const bold = fontStyle.includes('bold');
	const underline = fontStyle.includes('underline');
	
	return (
		<div className="syntax-token">
			<Token {...foreground}
				name={path.replace(`syntax.`,``)}
				id={`${path}.foreground`}
				path={path}
				allTokens={allTokens}
				secondaryKey="foreground"
				updateToken={updateToken}
				tokenNames={tokenNames}>
				<CheckboxGroup>
					<Checkbox checked={italic}
						id={`${path}.italic`}
						onChange={() => updateFontStyle(path, {bold, underline, italic: !italic})}
						label="Italic" />
					<Checkbox checked={bold}
						id={`${path}.bold`}
						onChange={() => updateFontStyle(path, {bold: !bold, underline, italic})}
						label="Bold" />
					<Checkbox checked={underline}
						id={`${path}.underline`}
						onChange={() => updateFontStyle(path, {bold, underline: !underline, italic})}
						label="Underline" />
				</CheckboxGroup>
			</Token>

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
