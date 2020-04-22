import React from 'react';

import './ToggleButton.css'

const ToggleButton = ({ buttons, onClick, className }) => {
	return (
		<div className={`toggle-buttons ${className||''}`}>
			{buttons.map(({label, selected, style}) => (
				<button key={label}
					style={style}
					className={`toggle-button ${selected?'active':''}`}
					onClick={onClick}>
					{label}
				</button>
			))}
		</div>
	)
}

export default ToggleButton
