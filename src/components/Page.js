import React from 'react';

const Page = ({ children, title }) => (
	<div className="app-page">
		<h1>{title}</h1>
		{children}
	</div>
)

export default Page
