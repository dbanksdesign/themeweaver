import React from 'react';

const Search = ({ placeholder, value, onChange, onClear }) => (
	<div className="tw-search">
		<input className="tw-search-input"
			placeholder={placeholder}
			type="text"
			value={value}
			onChange={onChange} />
		<button className="tw-search-clear" onClick={onClear}>
			<span className="codicon codicon-x" />
		</button>
	</div>
)

export default Search;
