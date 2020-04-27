import React from 'react';

const DebugPanel = () => (
	<div className="debug-toolbar">
		<div className="drag-area codicon codicon-gripper"></div>
		<div className="action-bar-container">
			<div className="monaco-action-bar animated">
				<ul className="actions-container" role="toolbar">
					<li className="action-item" role="presentation">
						<span className="action-label codicon codicon-debug-pause" role="button" title="Pause (F6)" tabIndex="0" />
					</li>
					<li className="action-item disabled" role="presentation">
						<span className="action-label disabled codicon codicon-debug-step-over" role="button" title="Step Over (F10)" aria-disabled="true" />
					</li>
					<li className="action-item disabled" role="presentation">
						<span className="action-label disabled codicon codicon-debug-step-into" role="button" title="Step Into (F11)" aria-disabled="true" />
					</li>
					<li className="action-item disabled" role="presentation">
						<span className="action-label disabled codicon codicon-debug-step-out" role="button" title="Step Out (⇧F11)" aria-disabled="true" />
					</li>
					<li className="action-item" role="presentation">
						<span className="action-label codicon codicon-debug-restart" role="button" title="Restart (⇧⌘F5)" tabIndex="0" />
					</li>
					<li className="action-item" role="presentation">
						<span className="action-label codicon codicon-debug-stop" role="button" title="Stop (⇧F5)" tabIndex="0" />
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default DebugPanel
