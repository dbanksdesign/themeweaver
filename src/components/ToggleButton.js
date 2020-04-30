import React from 'react';
import clsx from 'clsx';

import './ToggleButton.css'

const ToggleButton = ({ buttons, onClick, className }) => {
	return (
		<div className={`toggle-buttons ${className||''}`}>
			{buttons.map(({label, selected, style}) => (
				<button key={label}
					style={style}
					className={clsx(
						`toggle-button`,
						label,
						selected && 'active'
					)}
					onClick={onClick}>
					{label}
				</button>
			))}
		</div>
	)
}

export default ToggleButton
