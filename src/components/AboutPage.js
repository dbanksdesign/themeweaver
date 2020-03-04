import React from 'react';

const AboutPage = ({ applicationBackground }) => (
	<>
		<p>Themeweaver is an application to create VS Code themes (and other IDE themes in the future...).</p>
		{JSON.stringify(applicationBackground)}
		
		<p>NOTE: there might be some minor differences in the syntax highlighting as the editor VSCode uses (monaco) does not come with the same syntax highlighting grammers as VSCode does.</p>
	</>
)

export default AboutPage
