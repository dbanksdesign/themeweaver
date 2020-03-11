import React from 'react';
import Explorer from './Explorer';

const SideBar = () => (
	<div className="part sidebar left" style={{
		width: '200px'
	}}>
		<div className="composite title">
			<div className="title-label">
				<h2 title="Explorer (⇧⌘E)">
					Explorer
				</h2>
			</div>
			<div className="title-actions">
				<div className="monaco-toolbar">
					<div className="monaco-action-bar animated">
						<ul className="actions-container" role="toolbar" aria-label="Explorer actions"></ul>
					</div>
				</div>
			</div>
		</div>
		<div className="content">
			<div className="composite viewlet explorer-viewlet">
				<div className="monaco-pane-view">
					<div className="monaco-split-view2 vertical">
						<div className="split-view-container">
							<div className="split-view visible">
								<div className="pane">
									<div className="pane-header expanded">
										<div className="twisties codicon codicon-chevron-right" />
										<h3 className="title" title="vscode">vscode</h3>
										<div className="actions">
											<div className="monaco-toolbar">
												<div className="monaco-action-bar animated">
													<ul className="actions-container" role="toolbar" aria-label="vscode actions">
														<li className="action-item" role="presentation">
															<span className="action-label codicon explorer-action codicon-new-file" role="button" title="New File (⌘N)" tabIndex="0" />
														</li>
														<li className="action-item" role="presentation">
															<span className="action-label codicon explorer-action codicon-new-folder" role="button" title="New Folder" tabIndex="0" />
														</li>
														<li className="action-item" role="presentation">
															<span className="action-label codicon explorer-action codicon-refresh" role="button" title="Refresh Explorer" tabIndex="0" />
														</li>
														<li className="action-item" role="presentation">
															<span className="action-label codicon explorer-action codicon-collapse-all" role="button" title="Collapse Folders in Explorer (⇧⌘C)" tabIndex="0" />
														</li>
													</ul>
												</div>
											</div>
										</div>
										
										
									</div>
									<div className="pane-body">
										<Explorer />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default SideBar
