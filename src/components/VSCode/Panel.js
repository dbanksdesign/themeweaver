import React from 'react';

const Panel = () => (
	<div className="part panel bottom">
		<div className="composite title">
			<div className="composite-bar panel-switcher-container">
				<div className="monaco-action-bar">
					<ul className="actions-container" role="toolbar" aria-label="Active View Switcher">
						<li className="action-item" role="tab" draggable="true" tabIndex="0" aria-label="Output (⇧⌘U)" title="Output (⇧⌘U)">
							<span className="action-label output" aria-label="Output (⇧⌘U)" title="Output (⇧⌘U)">
								Output
							</span>
							<div className="badge" aria-hidden="true" aria-label="Output (⇧⌘U)" title="Output (⇧⌘U)">
								<div className="badge-content" />
							</div>
						</li>
						{/* <li className="action-item" role="tab" draggable="true" tabIndex="0" aria-label="Problems (⇧⌘M) - Total 0 Problems" title="Problems (⇧⌘M) - Total 0 Problems">
							<span className="action-label" aria-label="Problems (⇧⌘M) - Total 0 Problems" title="Problems (⇧⌘M) - Total 0 Problems">Problems</span>
							<div className="badge" aria-label="Problems (⇧⌘M) - Total 12 Problems" title="Problems (⇧⌘M) - Total 12 Problems">
								<div className="badge-content">12</div>
							</div>
						</li> */}
						{/* <li className="action-item" role="tab" draggable="true" tabIndex="0" aria-label="Debug Console (⇧⌘Y)" title="Debug Console (⇧⌘Y)">
							<span className="action-label" aria-label="Debug Console (⇧⌘Y)" title="Debug Console (⇧⌘Y)">Debug Console</span>
							<div className="badge" aria-hidden="true" aria-label="Debug Console (⇧⌘Y)" title="Debug Console (⇧⌘Y)">
								<div className="badge-content" />
							</div>
						</li> */}
						<li className="action-item checked" role="tab" draggable="true" tabIndex="0" aria-label="Terminal (⌃`) active" title="Terminal (⌃`)">
							<span className="action-label terminal" aria-label="Terminal (⌃`)" title="Terminal (⌃`)">Terminal</span>
							<div className="badge" aria-hidden="true" aria-label="Terminal (⌃`)" title="Terminal (⌃`)">
								<div className="badge-content" />
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="title-actions">
				<div className="monaco-toolbar">
					<div className="monaco-action-bar animated">
						<ul className="actions-container" role="toolbar" aria-label="Terminal actions">
							<li className="action-item select-container" role="presentation">
								<select className="monaco-select-box" aria-label="Open Terminals." title="1: zsh">
									<option value="1: zsh">1: zsh</option>
									<option value="─────────" disabled="">─────────</option>
									<option value="Select Default Shell">Select Default Shell</option>
								</select>
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label codicon terminal-action codicon-add" role="button" tabIndex="0" title="New Terminal (⌃⇧`)" />
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label codicon terminal-action codicon-split-horizontal" role="button" tabIndex="0" title="Split Terminal (⌘\)" />
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label codicon terminal-action codicon-trash" role="button" tabIndex="0" title="Kill Terminal" />
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label codicon codicon-chevron-up" role="button" tabIndex="0" title="Maximize Panel Size" />
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label codicon codicon-close" role="button" tabIndex="0" title="Close Panel" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="content"></div>
	</div>
)

export default Panel
