import React from 'react';

const TokenGroup = ({ title, description, children, id }) => (
	<section className="tw-token-group" id={id}>
		<h3 className="tw-token-group-title">{title}</h3>
		<p className="tw-token-group-description">{description}</p>
		{children}
	</section>
)

export default TokenGroup
