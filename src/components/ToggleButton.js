import React from 'react';

import './ToggleButton.css'

const ToggleButton = ({ buttons, onClick }) => {
	return (
		<div className="toggle-buttons">
			{buttons.map(({label, selected}) => (
				<button className={`toggle-button ${selected?'active':''}`}
					onClick={onClick}>
					{label}
				</button>
			))}
		</div>
	)
}

export default ToggleButton
