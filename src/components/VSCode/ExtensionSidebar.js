import React from 'react';

const ExtensionSidebar = (
	<>
	<div className="composite title">
		<div className="title-label">
			<h2 draggable="true" title="Extensions">EXTENSIONS</h2>
		</div>
		<div className="title-actions">
			<div className="monaco-toolbar">
				<div className="monaco-action-bar animated">
					<ul className="actions-container" role="toolbar">
						<li className="action-item disabled" role="presentation">
							<span className="action-label codicon codicon-clear-all disabled" role="button" tabIndex="0" disabled={true} title="Open launch.json" />
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
		<div className="composite viewlet scm-viewlet extensions-viewlet" id="workbench.view.extensions">
			<div className="header">
				<div className="scm-editor" data-keybinding-context="102" data-mode-id="plaintext">
					{/* Note: this is not the real HTML VSCode uses, but their code was super complicated for just showing this as a preview. Maybe refactor in the future. */}
					<div className="monaco-inputbox idle" data-keybinding-context="57">
						<div className="wrapper">
							<input className="input empty" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="text" wrap="off" aria-label="Search Exclude Patterns" placeholder="Search Extensions in Marketplace" />
						</div>
					</div>
				</div>
			</div>
			<div className="extensions"></div>
			<div className="monaco-pane-view">
				<div className="monaco-split-view2 vertical">
					<div className="split-view-view visible">
						<div className="split-view-view visible">
							<div className="pane debug-pane">
								<div className="pane-header expanded" tabIndex="0" role="toolbar" aria-label="Variables Section" aria-expanded="true" draggable="true">
									<div className="twisties codicon codicon-chevron-right"></div>
									<h3 className="title">ENABLED</h3>
									<div className="actions show"></div>
									<div className="count-badge-wrapper">
										<div className="monaco-count-badge" title="">27</div>
									</div>
								</div>
							</div>
							<div className="pane-body">
								<div className="extensions-list">
									<div className="monaco-list">
										<div className="monaco-scrollable-element mac" role="presentation">
											<div className="monaco-list-rows">
												<div className="monaco-list-row" role="listitem" title="This extension is enabled globally." draggable="false" aria-label="Beautify css/sass/scss/less. Press enter for extension details.">
													<div className="extension-bookmark-container" aria-label="Beautify css/sass/scss/less. Press enter for extension details."></div>
													<div className="extension-list-item">
														<div className="icon-container">
															<img className="icon" src="https://michelemelluso.gallerycdn.vsassets.io/extensions/michelemelluso/code-beautifier/2.3.3/1564069126232/Microsoft.VisualStudio.Services.Icons.Default" alt="Beautify CSS Logo" />
															<div className="extension-remote-badge-container"></div>
														</div>
														<div className="details">
															<div className="header-container">
																<div className="header">
																	<span className="name">Beautify css/sass/scss/less</span>
																	<span className="version">2.3.3</span>
																	<span className="install-count extension-install-count">
																		<span className="codicon codicon-cloud-download" />
																		<span className="count">654K</span>
																	</span>
																	<span className="ratings extension-ratings small" title="Rated by 46 users">
																		<span className="codicon codicon-star-full" />
																		<span className="count">4</span>
																	</span>
																	<div className="extension-remote-badge-container"></div>
																</div>
															</div>
															<div className="description ellipsis">Beautify css, sass and less code (extension for Visual Studio Code)</div>
															<div className="footer">
																<div className="author ellipsis">michelemelluso</div>
																<div className="monaco-action-bar">
																	<ul className="actions-container" role="toolbar">
																		<li className="action-item" role="presentation">
																			<span className="action-label codicon extension-action icon manage codicon-gear" role="button" title="Manage" />
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="monaco-list-row" role="listitem" title="This extension is enabled globally." aria-label="Beautify css/sass/scss/less. Press enter for extension details.">
													<div className="extension-bookmark-container" aria-label="npm. Press enter for extension details.">
														<div className="extension-bookmark">
															<div className="recommendation">
																<span className="codicon codicon-star" />
															</div>
														</div>
													</div>
													<div className="extension-list-item">
														<div className="icon-container">
															<img className="icon" src="https://eg2.gallerycdn.vsassets.io/extensions/eg2/vscode-npm-script/0.3.11/1580741085851/Microsoft.VisualStudio.Services.Icons.Default" alt="npm logo" />
															<div className="extension-remote-badge-container"></div>
														</div>
														<div className="details">
															<div className="header-container">
																<div className="header">
																	<span className="name">npm</span>
																	<span className="version">0.3.11</span>
																	<span className="install-count extension-install-count">
																		<span className="codicon codicon-cloud-download" />
																		<span className="count">2.4M</span>
																	</span>
																	<span className="ratings extension-ratings small" title="Rated by 46 users">
																		<span className="codicon codicon-star-full" />
																		<span className="count">3.5</span>
																	</span>
																	<div className="extension-remote-badge-container"></div>
																</div>
															</div>
															<div className="description ellipsis">npm support for VS Code</div>
															<div className="footer">
																<div className="author ellipsis">egamma</div>
																<div className="monaco-action-bar">
																	<ul className="actions-container" role="toolbar">
																		<li className="action-item" role="presentation">
																			<span className="action-label codicon extension-action icon manage codicon-gear" role="button" title="Manage" />
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="monaco-list-row selected" role="listitem" title="This extension is enabled globally." aria-label="Beautify css/sass/scss/less. Press enter for extension details.">
													<div className="extension-bookmark-container" aria-label="npm. Press enter for extension details.">
														<div className="extension-bookmark">
															<div className="recommendation">
																<span className="codicon codicon-star" />
															</div>
														</div>
													</div>
													<div className="extension-list-item">
														<div className="icon-container">
															<img className="icon" src="https://dbanksdesign.gallerycdn.vsassets.io/extensions/dbanksdesign/nu-disco/1.0.6/1572973325014/Microsoft.VisualStudio.Services.Icons.Default" alt="Nu Disco logo" />
															<div className="extension-remote-badge-container"></div>
														</div>
														<div className="details">
															<div className="header-container">
																<div className="header">
																	<span className="name">Nu Disco Theme</span>
																	<span className="version">1.0.6</span>
																	<span className="install-count extension-install-count">
																		<span className="codicon codicon-cloud-download" />
																		<span className="count">225</span>
																	</span>
																	<span className="ratings extension-ratings small" title="Rated by 46 users">
																		<span className="codicon codicon-star-full" />
																		<span className="count">5</span>
																	</span>
																	<div className="extension-remote-badge-container"></div>
																</div>
															</div>
															<div className="description ellipsis">A VS Code theme that boogies</div>
															<div className="footer">
																<div className="author ellipsis">dbanksdesign</div>
																<div className="monaco-action-bar">
																	<ul className="actions-container" role="toolbar">
																		<li class="action-item" role="presentation">
																			<span class="action-label extension-action label reload" role="button" title="Please reload Visual Studio Code to enable the updated extension.">Reload Required</span>
																		</li>
																		<li className="action-item" role="presentation">
																			<span className="action-label codicon extension-action icon manage codicon-gear" role="button" title="Manage" />
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
					<div className="split-view-container">
						<div className="pane debug-pane">
							<div className="pane-header expanded" tabIndex="0" role="toolbar" aria-label="Reommended Section" aria-expanded="true" draggable="true">
								<div className="twisties codicon codicon-chevron-right"></div>
								<h3 className="title">RECOMMENDED</h3>
							</div>
						<div className="pane-body debug-watch">
							<div className="debug-view-content">
							</div>
						</div>
					</div>
				</div>
					<div className="split-view-container">
					<div className="pane debug-pane">
						<div className="pane-header expanded" tabIndex="0" role="toolbar" aria-label="Disabled Section" aria-expanded="true" draggable="true">
							<div className="twisties codicon codicon-chevron-right"></div>
							<div className="debug-call-stack-title">
								<h3 className="title">DISABLED</h3>
							</div>
						</div>
						<div className="pane-body debug-call-stack">
							<div className="debug-view-content">
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

export default ExtensionSidebar;
