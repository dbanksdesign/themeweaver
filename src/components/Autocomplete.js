import React from 'react';
import clsx from 'clsx';

const Autocomplete = ({ onClick, suggestions, activeSuggestion }) => {
	return (
		<div className="token-autocomplete">
			{suggestions.map((suggestion, i) => (
				<div key={suggestion}
					className={clsx("token-autocomplete-item", activeSuggestion === i && 'active')}
					onClick={e => onClick(suggestion)}>
					{suggestion}
				</div>
			))}
		</div>
	)
}

export default Autocomplete
