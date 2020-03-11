import React from 'react';

const Autocomplete = ({ onClick, suggestions }) => {
	return (
		<div className="token-autocomplete">
			{suggestions.map((suggestion) => (
				<div key={suggestion} className="token-autocomplete-item" onClick={e => onClick(suggestion)}>{suggestion}</div>
			))}
		</div>
	)
}

export default Autocomplete
