import React from 'react';

import './TokenGroup.css';

const TokenGroup = ({ title, description, children, id }) => (
	<section className="token-group" id={id}>
		<h3 className="token-group-title">{title}</h3>
		<p className="token-group-description">{description}</p>
		{children}
	</section>
)

export default TokenGroup
