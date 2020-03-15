import React from 'react';

const TokenGroup = ({ title, description, children, id }) => (
	<div className="section" id={id}>
		<h3>{title}</h3>
		<p>{description}</p>
		{children}
	</div>
)

export default TokenGroup
