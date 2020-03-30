import React from 'react';

const ColorToggle = ({ buttons, onClick }) => {
	return (
		<div className="color-toggle-buttons">
			{buttons.map(({label, selected, value}) => (
				<button key={label} 
					className={`color-toggle-button ${selected?'active':''}`}
					onClick={() => onClick(value || label)}>
					{label}
				</button>
			))}
		</div>
	)
}

export default ToggleButton
