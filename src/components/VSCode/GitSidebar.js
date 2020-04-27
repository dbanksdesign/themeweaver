import React from 'react';

const GitSidebar = (
	<>
		<div className="composite title">
			<div className="title-label">
				<h2 draggable="true" title="Source Control: Git (⌃⇧G)">Source Control: Git</h2>
			</div>
			<div className="title-actions">
				<div className="monaco-toolbar">
					<div className="monaco-action-bar animated">
						<ul className="actions-container" role="toolbar" aria-label="Source Control: Git actions">
							<li className="action-item" role="presentation">
								<span className="action-label codicon scm-action toggle-view-mode codicon-list-tree" role="button" tabIndex="0" title="Toggle View Mode" />
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label codicon codicon-check" role="button" title="Commit" tabIndex="0" />
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label codicon codicon-refresh" role="button" title="Refresh" tabIndex="0" />
							</li>
							<li className="action-item" role="presentation">
								<div className="monaco-dropdown">
									<div className="dropdown-label">
										<span className="action-label codicon codicon-more" tabIndex="0" role="button" aria-haspopup="true" title="More Actions..." />
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="content">
			<div className="composite viewlet scm-viewlet" id="workbench.view.scm">
				<div className="monaco-pane-view">
					<div className="monaco-split-view2 vertical">
						<div className="sash-container"></div>
						<div className="split-view-container">
							<div className="split-view-view visible">
								<div className="pane merged-header" data-keybinding-context="97">
									<div className="pane-header scm-provider expanded hidden" tabIndex="0" role="toolbar" aria-label="themeweaver Section" aria-expanded="true" draggable="true">
										<div className="twisties codicon codicon-chevron-right"></div>
										<h3 className="title">themeweaver</h3>
										<span className="type">Git</span>
										<div className="actions">
											<div className="monaco-toolbar">
												<div className="monaco-action-bar animated">
													<ul className="actions-container" role="toolbar" aria-label="themeweaver actions">
														<li className="action-item" role="presentation">
															<span className="action-label codicon scm-action toggle-view-mode codicon-list-tree" role="button" tabIndex="0" title="Toggle View Mode" />
														</li>
														<li className="action-item" role="presentation">
															<span className="action-label codicon codicon-check" role="button" title="Commit" tabIndex="0" />
														</li>
														<li className="action-item" role="presentation">
															<span className="action-label codicon codicon-refresh" role="button" title="Refresh" tabIndex="0" />
														</li>
														<li className="action-item" role="presentation">
															<div className="monaco-dropdown">
																<div className="dropdown-label">
																	<span className="action-label codicon codicon-more" tabIndex="0" role="button" aria-haspopup="true" title="More Actions..." />
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="pane-body">
										<div className="scm-editor">
											<div className="scm-editor-container" data-keybinding-context="98" data-mode-id="plaintext">
												{/* Note: this is not the real HTML VSCode uses, but their code was super complicated for just showing this as a preview. Maybe refactor in the future. */}
												<div className="monaco-inputbox idle" data-keybinding-context="57">
													<div className="wrapper">
														<input className="input empty" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="text" wrap="off" aria-label="Search Exclude Patterns" placeholder="Message (⌘Enter to commit on 'master')" />
													</div>
												</div>
										</div>
									</div>
									<div className="scm-status show-file-icons file-icon-themable-tree list-view-mode">
										<div className="monaco-list list_id_32 mouse-support selection-none" tabIndex="0" role="tree" data-keybinding-context="99">
										<div className="monaco-scrollable-element  mac" role="presentation">
											<div className="monaco-list-rows">
												<div className="monaco-list-row" role="treeitem" data-index="0" data-last-element="false" aria-setsize="1" aria-posinset="1" id="list_id_32_0" aria-selected="false" aria-expanded="true" draggable="false">
													<div className="monaco-tl-row">
														<div className="monaco-tl-indent"></div>
														<div className="monaco-tl-twistie force-twistie codicon codicon-chevron-down collapsible"></div>
														<div className="monaco-tl-contents">
															<div className="resource-group">
																<div className="name">CHANGES</div>
																<div className="actions">
																	<div className="monaco-action-bar animated">
																		<ul className="actions-container" role="toolbar">
																			<li className="action-item" role="presentation">
																				<span className="action-label icon menu-item-action-item-icon-11" role="button" title="Stash All Changes" tabIndex="0" />
																			</li>
																			<li className="action-item" role="presentation">
																				<span className="action-label codicon codicon-discard" role="button" title="Discard All Changes" tabIndex="0" />
																			</li>
																			<li className="action-item" role="presentation">
																				<span className="action-label codicon codicon-add" role="button" title="Stage All Changes" tabIndex="0" />
																			</li>
																		</ul>
																	</div>
																</div>
																<div className="count">
																	<div className="monaco-count-badge" title="">27</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="monaco-list-row" role="treeitem" data-index="1" data-last-element="false" aria-setsize="27" aria-posinset="1" id="list_id_32_1" aria-selected="false" draggable="false">
													<div className="monaco-tl-row">
														<div className="monaco-tl-indent">
															<div className="indent-guide"></div>
														</div>
														<div className="monaco-tl-twistie"></div>
														<div className="monaco-tl-contents">
															<div className="resource" data-tooltip="Modified">
																<div className="name strike-through">
																	<div className="monaco-icon-label file-icon app.js-name-file-icon js-ext-file-icon ext-file-icon javascript-lang-file-icon monaco-decoration-itemBadge-delete" title="~/Dev/themeweaver/src/App.js • Modified">
																		<div className="monaco-icon-label-container">
																			<span className="monaco-icon-name-container">
																				<span className="label-name">
																					<span className="monaco-highlighted-label" title="~/Dev/themeweaver/src/App.js • Modified">
																						<span>App.js</span>
																					</span>
																				</span>
																			</span>
																			<span className="monaco-icon-description-container">
																				<span className="label-description">src</span>
																			</span>
																		</div>
																		<div className="actions">
																			<div className="monaco-action-bar animated">
																				<ul className="actions-container" role="toolbar">
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-go-to-file" role="button" title="Open File" tabIndex="0" />
																					</li>
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-discard" role="button" title="Discard Changes" tabIndex="0" />
																					</li>
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-add" role="button" title="Stage Changes" tabIndex="0" />
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="monaco-list-row" role="treeitem" data-index="2" data-last-element="false" aria-setsize="27" aria-posinset="2" id="list_id_32_2" aria-selected="false" draggable="false">
													<div className="monaco-tl-row">
														<div className="monaco-tl-indent">
															<div className="indent-guide"></div>
														</div>
														<div className="monaco-tl-twistie"></div>
														<div className="monaco-tl-contents">
															<div className="resource" data-tooltip="Modified">
																<div className="name">
																	<div className="monaco-icon-label file-icon index.css-name-file-icon css-ext-file-icon ext-file-icon css-lang-file-icon monaco-decoration-itemBadge-modified" title="~/Dev/themeweaver/src/index.css • Modified">
																		<div className="monaco-icon-label-container">
																			<span className="monaco-icon-name-container">
																				<span className="label-name">
																					<span className="monaco-highlighted-label" title="~/Dev/themeweaver/src/index.css • Modified">
																						<span>index.css</span>
																					</span>
																				</span>
																			</span>
																			<span className="monaco-icon-description-container">
																				<span className="label-description">src</span>
																			</span>
																		</div>
																		<div className="actions">
																			<div className="monaco-action-bar animated">
																				<ul className="actions-container" role="toolbar">
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-go-to-file" role="button" title="Open File" tabIndex="0" />
																					</li>
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-discard" role="button" title="Discard Changes" tabIndex="0" />
																					</li>
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-add" role="button" title="Stage Changes" tabIndex="0" />
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="monaco-list-row" role="treeitem" data-index="2" data-last-element="false" aria-setsize="27" aria-posinset="2" id="list_id_32_2" aria-selected="false" draggable="false">
													<div className="monaco-tl-row">
														<div className="monaco-tl-indent">
															<div className="indent-guide"></div>
														</div>
														<div className="monaco-tl-twistie"></div>
														<div className="monaco-tl-contents">
															<div className="resource" data-tooltip="Modified">
																<div className="name">
																	<div className="monaco-icon-label file-icon index.css-name-file-icon css-ext-file-icon ext-file-icon css-lang-file-icon monaco-decoration-itemBadge-added" title="~/Dev/themeweaver/src/index.css • Modified">
																		<div className="monaco-icon-label-container">
																			<span className="monaco-icon-name-container">
																				<span className="label-name">
																					<span className="monaco-highlighted-label" title="~/Dev/themeweaver/src/index.css • Modified">
																						<span>index.css</span>
																					</span>
																				</span>
																			</span>
																			<span className="monaco-icon-description-container">
																				<span className="label-description">src</span>
																			</span>
																		</div>
																		<div className="actions">
																			<div className="monaco-action-bar animated">
																				<ul className="actions-container" role="toolbar">
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-go-to-file" role="button" title="Open File" tabIndex="0" />
																					</li>
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-discard" role="button" title="Discard Changes" tabIndex="0" />
																					</li>
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-add" role="button" title="Stage Changes" tabIndex="0" />
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="monaco-list-row" role="treeitem" data-index="2" data-last-element="false" aria-setsize="27" aria-posinset="2" id="list_id_32_2" aria-selected="false" draggable="false">
													<div className="monaco-tl-row">
														<div className="monaco-tl-indent">
															<div className="indent-guide"></div>
														</div>
														<div className="monaco-tl-twistie"></div>
														<div className="monaco-tl-contents">
															<div className="resource" data-tooltip="Modified">
																<div className="name">
																	<div className="monaco-icon-label file-icon index.css-name-file-icon css-ext-file-icon ext-file-icon css-lang-file-icon monaco-decoration-itemBadge-untracked" title="~/Dev/themeweaver/src/index.css • Modified">
																		<div className="monaco-icon-label-container">
																			<span className="monaco-icon-name-container">
																				<span className="label-name">
																					<span className="monaco-highlighted-label" title="~/Dev/themeweaver/src/index.css • Modified">
																						<span>index.css</span>
																					</span>
																				</span>
																			</span>
																			<span className="monaco-icon-description-container">
																				<span className="label-description">src</span>
																			</span>
																		</div>
																		<div className="actions">
																			<div className="monaco-action-bar animated">
																				<ul className="actions-container" role="toolbar">
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-go-to-file" role="button" title="Open File" tabIndex="0" />
																					</li>
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-discard" role="button" title="Discard Changes" tabIndex="0" />
																					</li>
																					<li className="action-item" role="presentation">
																						<span className="action-label codicon codicon-add" role="button" title="Stage Changes" tabIndex="0" />
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	</>
);

export default GitSidebar
