import React from 'react';
import './StarterButton.scss';

const StarterButton = ({ onClick, label, colors, darkColors, bg, darkBg }) => {
	return (
		<button onClick={onClick} className="starter-button" style={{borderColor: darkBg}}>
			<span className="starter-button-colors" style={{background: darkBg}}>
				{darkColors.map(color => <span key={color} className="starter-color" style={{backgroundColor: color, borderColor: darkBg}} />)}
			</span>
			<span className="starter-button-colors" style={{background: bg}}>
				{colors.map(color => <span key={color} className="starter-color" style={{backgroundColor: color, borderColor: bg}} />)}
			</span>
		</button>
	)
};

export default StarterButton;
