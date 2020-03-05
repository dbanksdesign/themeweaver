import React from 'react';

const Page = ({ children, title }) => (
	<div className="app-page">
		{title && <h1>{title}</h1>}
		{children}
	</div>
)

export default Page
