import React from 'react';
// import './ActivityBar.css'

const ActivityBar = () => (
	<div className="part activitybar left" id="workbench.parts.activitybar" role="navigation">
		<div className="content">
			<div className="composite-bar">
				<div className="monaco-action-bar vertical">
					<ul className="actions-container" role="toolbar" aria-label="Active View Switcher">
						<li className="action-item checked" role="button" draggable="true" tabIndex="0" aria-label="Explorer (⇧⌘E)" title="Explorer (⇧⌘E)">
							<span className="action-label codicon-files codicon" aria-label="Explorer (⇧⌘E)" title="Explorer (⇧⌘E)" />
							<div className="badge" aria-label="Explorer (⇧⌘E)" title="Explorer (⇧⌘E)" aria-hidden="true">
							</div>
							<div className="active-item-indicator"></div>
						</li>
						
						<li className="action-item" role="button" draggable="true" tabIndex="0" aria-label="Search (⇧⌘F)" title="Search (⇧⌘F)">
							<span className="action-label codicon-search codicon" aria-label="Search (⇧⌘F)" title="Search (⇧⌘F)" />
							<div className="badge" aria-hidden="true" aria-label="Search (⇧⌘F)" title="Search (⇧⌘F)">
							</div>
							<div className="active-item-indicator"></div>
						</li>
						
						<li className="action-item" role="button" draggable="true" tabIndex="0" aria-label="Source Control (⌃⇧G) - 100 pending changes" title="Source Control (⌃⇧G) - 100 pending changes">
							<span className="action-label codicon-source-control codicon" aria-label="Source Control (⌃⇧G) - 100 pending changes" title="Source Control (⌃⇧G) - 100 pending changes" />
							<div className="badge scm-viewlet-label" aria-label="Source Control (⌃⇧G) - 100 pending changes" title="Source Control (⌃⇧G) - 100 pending changes">
								<div className="badge-content">100</div>
							</div>
							<div className="active-item-indicator"></div>
						</li>
						
						<li className="action-item" role="button" draggable="true" tabIndex="0" aria-label="Extensions (⇧⌘X)" title="Extensions (⇧⌘X)">
							<span className="action-label codicon-extensions codicon" aria-label="Extensions (⇧⌘X)" title="Extensions (⇧⌘X)" />
							<div className="badge" aria-hidden="true" aria-label="Extensions (⇧⌘X)" title="Extensions (⇧⌘X)">
							</div>
							<div className="active-item-indicator"></div>
						</li>
						
						<li className="action-item" role="button" draggable="true" tabIndex="0" aria-label="Run and Debug (⇧⌘D)" title="Run and Debug (⇧⌘D)">
							<span className="action-label codicon-debug-alt codicon" aria-label="Run and Debug (⇧⌘D)" title="Run and Debug (⇧⌘D)" />
							<div className="badge" aria-hidden="true" aria-label="Run and Debug (⇧⌘D)" title="Run and Debug (⇧⌘D)">
							</div>
							<div className="active-item-indicator"></div>
						</li>
						
						<li className="action-item" role="button" draggable="true" tabIndex="0" aria-label="Remote Explorer" title="Remote Explorer">
							<span className="action-label codicon-remote-explorer codicon" aria-label="Remote Explorer" title="Remote Explorer" />
							<div className="badge" aria-hidden="true" aria-label="Remote Explorer" title="Remote Explorer">
							</div>
							<div className="active-item-indicator"></div>
						</li>
						
						<li className="action-item" role="button" draggable="true" tabIndex="0" aria-label="GitLens" title="GitLens">
							<span className="action-label activity-workbench-view-extension-gitlens" aria-label="GitLens" title="GitLens" />
							<div className="badge" aria-hidden="true" aria-label="GitLens" title="GitLens">
							</div>
							<div className="active-item-indicator"></div>
						</li>
						
						<li className="action-item" role="button" draggable="true" tabIndex="0" aria-label="GitHub Pull Requests" title="GitHub Pull Requests">
							<span className="action-label activity-workbench-view-extension-github-pull-requests" aria-label="GitHub Pull Requests" title="GitHub Pull Requests" />
							<div className="badge" aria-hidden="true" aria-label="GitHub Pull Requests" title="GitHub Pull Requests">
							</div>
							<div className="active-item-indicator"></div>
						</li>
					</ul>
				</div>
			</div>
			<div className="global-activity">
				<div className="monaco-action-bar vertical">
					<ul className="actions-container" role="toolbar" aria-label="Manage">
						<li className="action-item" role="button" tabIndex="0" aria-label="Manage" title="Manage">
							<span className="action-label codicon-settings-gear codicon" aria-label="Manage" title="Manage" />
							<div className="badge" aria-label="Manage" title="Manage" aria-hidden="true">
							</div>
							<div className="active-item-indicator"></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
)

export default ActivityBar
