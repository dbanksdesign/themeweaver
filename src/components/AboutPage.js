import React from 'react';

const AboutPage = ({ applicationBackground }) => (
	<>
		<p>Themeweaver is an application to create VS Code themes (and other IDE themes in the future...).</p>
		{JSON.stringify(applicationBackground)}
	</>
)

export default AboutPage
