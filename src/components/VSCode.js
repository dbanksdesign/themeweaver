import React from 'react';
import StatusBar from './StatusBar';
import ActivityBar from './ActivityBar';
import VSCodeTabs from './VSCode/Tabs';

const VSCode = () => (
	<div className="preview-pane">
		<div className="vscode">
		<ActivityBar />
		<div className="editor-group-container">
			<VSCodeTabs />
		</div>
		<StatusBar />
		</div>
	</div>
)

export default VSCode
