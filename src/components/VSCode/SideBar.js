import React from 'react';
import Explorer from './Explorer';
import GitSidebar from './GitSidebar';
import ExtensionSidebar from './ExtensionSidebar';

const DebugSidebar = (
	<>
		<div className="composite title">
			<div className="title-label">
				<h2 draggable="true" title="Run (⇧⌘D)">Run</h2>
			</div>
			<div className="title-actions">
				<div className="monaco-toolbar">
					<div className="monaco-action-bar animated">
						<ul className="actions-container" role="toolbar" aria-label="Run actions">
							<li className="action-item start-debug-action-item" role="presentation">
								<div className="codicon codicon-debug-start" title="Start Debugging" role="button" tabIndex="0"></div>
								<div className="configuration select-container">
									<select className="monaco-select-box" aria-label="Debug Launch Configurations" title="Extension" style={{width: '80px'}}>
										<option value="Extension">Extension</option>
										<option value="─────────" disabled="">─────────</option>
										<option value="Add Configuration...">Add Configuration...</option>
									</select>
								</div>
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label codicon debug-action codicon-gear" role="button" tabIndex="0" title="Open launch.json" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="content">
			<div className="monaco-progress-container done" aria-hidden="true">
				<div className="progress-bit"></div>
			</div>
			<div className="composite viewlet debug-viewlet" id="workbench.view.debug">
				<div className="monaco-pane-view">
					<div className="monaco-split-view2 vertical">
						<div className="sash-container">
							<div className="monaco-sash mac horizontal"></div>
							<div className="monaco-sash mac horizontal"></div>
							<div className="monaco-sash mac horizontal disabled"></div>
							<div className="monaco-sash mac horizontal disabled"></div>
						</div>
						<div className="split-view-container">
							<div className="split-view-view visible">
								<div className="pane debug-pane">
									<div className="pane-header expanded" tabIndex="0" role="toolbar" aria-label="Variables Section" aria-expanded="true" draggable="true">
										<div className="twisties codicon codicon-chevron-right"></div>
										<h3 className="title">Variables</h3>
										<div className="actions">
											<div className="monaco-toolbar">
												<div className="monaco-action-bar animated">
													<ul className="actions-container" role="toolbar" aria-label="Variables actions">
														<li className="action-item" role="presentation">
															<span className="action-label codicon explorer-action codicon-collapse-all" role="button" tabIndex="0" title="Collapse All" />
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="pane-body debug-variables">
									<div className="welcome-view">
										<div className="monaco-scrollable-element  mac" role="presentation">
											<div className="welcome-view-content" tabIndex="0"></div>
											<div role="presentation" aria-hidden="true" className="invisible scrollbar horizontal">
												<div className="slider"></div>
											</div>
											<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
												<div className="slider"></div>
											</div>
											<div className="shadow"></div>
											<div className="shadow"></div>
											<div className="shadow top-left-corner"></div>
										</div>
									</div>
									<div className="debug-view-content">
										<div className="monaco-list list_id_19 mouse-support" tabIndex="0" role="tree" aria-label="Debug Variables. Use the navigation keys to navigate." data-keybinding-context="55">
											<div className="monaco-scrollable-element  mac" role="presentation">
												<div className="monaco-list-rows"></div>
												<div role="presentation" aria-hidden="true" className="invisible scrollbar horizontal">
													<div className="slider"></div>
												</div>
												<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
													<div className="slider"></div>
												</div>
												<div className="shadow"></div>
												<div className="shadow"></div>
												<div className="shadow top-left-corner"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="split-view-view visible">
							<div className="pane debug-pane">
								<div className="pane-header expanded" tabIndex="0" role="toolbar" aria-label="Watch Section" aria-expanded="true" draggable="true">
									<div className="twisties codicon codicon-chevron-right"></div>
									<h3 className="title">Watch</h3>
									<div className="actions">
										<div className="monaco-toolbar">
											<div className="monaco-action-bar animated">
												<ul className="actions-container" role="toolbar" aria-label="Watch actions">
													<li className="action-item" role="presentation">
														<span className="action-label codicon debug-action codicon-add" role="button" tabIndex="0" title="Add Expression" />
													</li>
													<li className="action-item" role="presentation">
														<span className="action-label codicon explorer-action codicon-collapse-all" role="button" tabIndex="0" title="Collapse All" />
													</li>
													<li className="action-item disabled" role="presentation">
														<span className="action-label codicon debug-action codicon-close-all disabled" role="button" aria-disabled="true" title="Remove All Expressions" />
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							<div className="pane-body debug-watch">
								<div className="welcome-view">
									<div className="monaco-scrollable-element  mac" role="presentation">
										<div className="welcome-view-content" tabIndex="0"></div>
										<div role="presentation" aria-hidden="true" className="invisible scrollbar horizontal">
											<div className="slider"></div>
										</div>
										<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
											<div className="slider"></div>
										</div>
										<div className="shadow"></div>
										<div className="shadow"></div>
										<div className="shadow top-left-corner"></div>
									</div>
								</div>
								<div className="debug-view-content">
									<div className="monaco-list list_id_20 mouse-support" tabIndex="0" role="tree" aria-label="Debug Watch Expressions. Use the navigation keys to navigate." data-keybinding-context="58">
										<div className="monaco-scrollable-element  mac" role="presentation">
											<div className="monaco-list-rows"></div>
											<div role="presentation" aria-hidden="true" className="invisible scrollbar horizontal">
												<div className="slider"></div>
											</div>
											<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
												<div className="slider"></div>
											</div>
											<div className="shadow"></div>
											<div className="shadow"></div>
											<div className="shadow top-left-corner"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="split-view-view visible">
						<div className="pane debug-pane">
							<div className="pane-header expanded" tabIndex="0" role="toolbar" aria-label="Call Stack Section" aria-expanded="true" draggable="true">
								<div className="twisties codicon codicon-chevron-right"></div>
								<div className="debug-call-stack-title">
									<h3 className="title">Call Stack</h3>
									<span className="pause-message" hidden="">
										<span className="label"></span>
									</span>
								</div>
								<div className="actions">
									<div className="monaco-toolbar">
										<div className="monaco-action-bar animated">
											<ul className="actions-container" role="toolbar" aria-label="Call Stack actions">
												<li className="action-item" role="presentation">
													<span className="action-label codicon explorer-action codicon-collapse-all" role="button" tabIndex="0" title="Collapse All" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="pane-body debug-call-stack">
								<div className="welcome-view">
									<div className="monaco-scrollable-element  mac" role="presentation">
										<div className="welcome-view-content" tabIndex="0"></div>
										<div role="presentation" aria-hidden="true" className="invisible scrollbar horizontal">
											<div className="slider"></div>
										</div>
										<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
											<div className="slider"></div>
										</div>
										<div className="shadow"></div>
										<div className="shadow"></div>
										<div className="shadow top-left-corner"></div>
									</div>
								</div>
								<div className="debug-view-content">
									<div className="monaco-list list_id_21 mouse-support" tabIndex="0" role="tree" aria-label="Debug Call Stack. Use the navigation keys to navigate." data-keybinding-context="61">
										<div className="monaco-scrollable-element  mac" role="presentation">
											<div className="monaco-list-rows"></div>
											<div role="presentation" aria-hidden="true">
												<div className="slider"></div>
											</div>
											<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
												<div className="slider"></div>
											</div>
											<div className="shadow"></div>
											<div className="shadow"></div>
											<div className="shadow top-left-corner"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="split-view-view visible">
						<div className="pane debug-pane">
							<div className="pane-header" tabIndex="0" role="toolbar" aria-label="Loaded Scripts Section" aria-expanded="false" draggable="true">
								<div className="twisties codicon codicon-chevron-right"></div>
								<h3 className="title">Loaded Scripts</h3>
								<div className="actions">
									<div className="monaco-toolbar">
										<div className="monaco-action-bar animated">
											<ul className="actions-container" role="toolbar" aria-label="Loaded Scripts actions"></ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="split-view-view visible">
						<div className="pane debug-pane">
							<div className="pane-header expanded" tabIndex="0" role="toolbar" aria-label="Breakpoints Section" aria-expanded="true" draggable="true">
								<div className="twisties codicon codicon-chevron-right"></div>
								<h3 className="title">Breakpoints</h3>
								<div className="actions">
									<div className="monaco-toolbar">
										<div className="monaco-action-bar animated">
											<ul className="actions-container" role="toolbar" aria-label="Breakpoints actions">
												<li className="action-item" role="presentation">
													<span className="action-label codicon debug-action codicon-add" role="button" tabIndex="0" title="Add Function Breakpoint" />
												</li>
												<li className="action-item disabled" role="presentation">
													<span className="action-label codicon debug-action codicon-activate-breakpoints disabled" role="button" aria-disabled="true" title="Deactivate Breakpoints" />
												</li>
												<li className="action-item disabled" role="presentation">
													<span className="action-label codicon debug-action codicon-close-all disabled" role="button" aria-disabled="true" title="Remove All Breakpoints" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="pane-body debug-breakpoints">
								<div className="welcome-view">
									<div className="monaco-scrollable-element  mac" role="presentation">
										<div className="welcome-view-content" tabIndex="0"></div>
										<div role="presentation" aria-hidden="true" className="invisible scrollbar horizontal">
											<div className="slider"></div>
										</div>
										<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
											<div className="slider"></div>
										</div>
										<div className="shadow"></div>
										<div className="shadow"></div>
										<div className="shadow top-left-corner"></div>
									</div>
								</div>
								<div className="monaco-list list_id_22 mouse-support selection-none" tabIndex="0" role="list" data-keybinding-context="64">
									<div className="monaco-scrollable-element  mac" role="presentation">
										<div className="monaco-list-rows">
											<div className="monaco-list-row" role="checkbox" aria-checked="false">
												<div className="breakpoint exception" title="All Exceptions">
													<input type="checkbox" tabIndex="-1" />
													<span className="name">All Exceptions</span>
												</div>
											</div>
											<div className="monaco-list-row" role="checkbox" aria-checked="false">
												<div className="breakpoint exception" title="Uncaught Exceptions">
													<input type="checkbox" tabIndex="-1" />
													<span className="name">Uncaught Exceptions</span>
												</div>
											</div>
											<div className="monaco-list-row" role="checkbox" aria-checked="false">
												<div className="breakpoint exception" title="Promise Rejects">
													<input type="checkbox" tabIndex="-1" />
													<span className="name">Promise Rejects</span>
												</div>
											</div>
										</div>
										<div role="presentation" aria-hidden="true" className="invisible scrollbar horizontal">
											<div className="slider"></div>
										</div>
										<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
											<div className="slider"></div>
										</div>
										<div className="shadow"></div>
										<div className="shadow"></div>
										<div className="shadow top-left-corner"></div>
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

const SearchSidebar = (
	<>
	<div className="composite title">
		<div className="title-label">
			<h2 draggable="true" title="Search (⇧⌘F)">Search</h2>
		</div>
		<div className="title-actions">
			<div className="monaco-toolbar">
				<div className="monaco-action-bar animated">
					<ul className="actions-container" role="toolbar" aria-label="Search actions">
						<li className="action-item" role="presentation">
							<span className="action-label codicon search-action codicon-refresh" role="button" tabIndex="0" title="Refresh" />
						</li>
						<li className="action-item" role="presentation">
							<span className="action-label codicon search-action codicon-clear-all" role="button" tabIndex="0" title="Clear Search Results" />
						</li>
						<li className="action-item" role="presentation">
							<span className="action-label codicon codicon-new-file" role="button" tabIndex="0" title="Open New Search Editor" />
						</li>
						<li className="action-item" role="presentation">
							<span className="action-label codicon search-action codicon-collapse-all" role="button" tabIndex="0" title="Toggle Collapse and Expand" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div className="content">
		<div className="composite viewlet" id="workbench.view.search">
			<div className="monaco-pane-view">
				<div className="monaco-split-view2 vertical">
					<div className="sash-container"></div>
					<div className="split-view-container">
						<div className="split-view-view visible">
							<div className="pane merged-header">
								<div className="pane-header expanded hidden" tabIndex="0" role="toolbar" aria-label="Search Section" aria-expanded="true" draggable="true">
									<div className="twisties codicon codicon-chevron-right"></div>
									<h3 className="title">Search</h3>
									<div className="actions">
										<div className="monaco-toolbar">
											<div className="monaco-action-bar animated">
												<ul className="actions-container" role="toolbar" aria-label="Search actions">
													<li className="action-item" role="presentation">
														<span className="action-label codicon search-action codicon-refresh" role="button" tabIndex="0" title="Refresh" />
													</li>
													<li className="action-item" role="presentation">
														<span className="action-label codicon search-action codicon-clear-all" role="button" tabIndex="0" title="Clear Search Results" />
													</li>
													<li className="action-item" role="presentation">
														<span className="action-label codicon codicon-new-file" role="button" tabIndex="0" title="Open New Search Editor" />
													</li>
													<li className="action-item" role="presentation">
														<span className="action-label codicon search-action codicon-collapse-all" role="button" tabIndex="0" title="Toggle Collapse and Expand" />
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="pane-body">
									<div className="search-view">
										<div className="search-widgets-container">
											<div className="search-widget">
												<span className="monaco-button codicon toggle-replace-button codicon-chevron-right" tabIndex="0" role="button" aria-expanded="false" title="Toggle Replace" />
												<div className="search-container input-box">
													<div className="monaco-findInput">
														<div className="monaco-scrollable-element  mac" role="presentation">
															<div className="monaco-inputbox idle" data-keybinding-context="54">
																<div className="wrapper">
																	<textarea rows="1" className="input" autoCorrect="off" autoCapitalize="off" spellCheck="false" aria-label="Search: Type Search Term and press Enter to search or Escape to cancel" placeholder="Search" title="Search"></textarea>
																	<div className="mirror">.token-field-input</div>
																</div>
															</div>
															<div role="presentation" aria-hidden="true" className="invisible scrollbar horizontal">
																<div className="slider"></div>
															</div>
															<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
																<div className="slider"></div>
															</div>
															<div className="shadow"></div>
															<div className="shadow"></div>
															<div className="shadow top-left-corner"></div>
														</div>
														<div className="controls">
															<div title="Match Case (⌥⌘C)" className="monaco-custom-checkbox codicon codicon-case-sensitive unchecked" tabIndex="0" role="checkbox" aria-checked="false" aria-label="Match Case (⌥⌘C)"></div>
															<div title="Match Whole Word (⌥⌘W)" className="monaco-custom-checkbox codicon codicon-whole-word unchecked" tabIndex="0" role="checkbox" aria-checked="false" aria-label="Match Whole Word (⌥⌘W)"></div>
															<div title="Use Regular Expression (⌥⌘R)" className="monaco-custom-checkbox codicon codicon-regex unchecked" tabIndex="0" role="checkbox" aria-checked="false" aria-label="Use Regular Expression (⌥⌘R)"></div>
														</div>
													</div>
												</div>
												<div className="replace-container disabled">
													<div className="replace-input">
														<div className="monaco-findInput">
															<div className="monaco-scrollable-element  mac" role="presentation">
																<div className="monaco-inputbox idle" data-keybinding-context="55">
																	<div className="wrapper">
																		<textarea rows="1" className="input" autoCorrect="off" autoCapitalize="off" spellCheck="false" aria-label="Replace: Type replace term and press Enter to preview or Escape to cancel" placeholder="Replace" title="Replace" ></textarea>
																		<div className="mirror">--tw-color-border-primary</div>
																	</div>
																</div>
																<div role="presentation" aria-hidden="true" className="invisible scrollbar horizontal" >
																	<div className="slider"></div>
																</div>
																<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
																	<div className="slider"></div>
																</div>
																<div className="shadow"></div>
																<div className="shadow"></div>
																<div className="shadow top-left-corner"></div>
															</div>
															<div className="controls">
																<div title="Preserve Case" className="monaco-custom-checkbox codicon codicon-preserve-case unchecked" tabIndex="0" role="checkbox" aria-checked="false" aria-label="Preserve Case"></div>
															</div>
														</div>
													</div>
													<div className="monaco-action-bar animated">
														<ul className="actions-container" role="toolbar">
															<li className="action-item" role="presentation">
																<span className="action-label codicon codicon-replace-all" role="button" title="Replace All (⌥⌘Enter)" tabIndex="0" />
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="query-details more">
												<div className="more codicon codicon-ellipsis" tabIndex="0" role="button" title="Toggle Search Details" aria-expanded="true"></div>
												<div className="file-types includes">
													<h4>files to include</h4>
													<div className="monaco-findInput">
														<div className="monaco-inputbox idle" data-keybinding-context="56">
															<div className="wrapper">
																<input className="input" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="text" wrap="off" aria-label="Search Include Patterns" />
															</div>
														</div>
														<div className="controls"></div>
													</div>
												</div>
												<div className="file-types excludes">
													<h4>files to exclude</h4>
												<div className="monaco-findInput">
													<div className="monaco-inputbox idle" data-keybinding-context="57">
														<div className="wrapper">
															<input className="input empty" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="text" wrap="off" aria-label="Search Exclude Patterns" />
														</div>
													</div>
													<div className="controls">
														<div title="Use Exclude Settings and Ignore Files" className="monaco-custom-checkbox codicon useExcludesAndIgnoreFiles codicon-exclude checked" tabIndex="0" role="checkbox" aria-checked="true" aria-label="Use Exclude Settings and Ignore Files"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="messages">
										<div className="message">
											<span>3 results in 2 files - </span>
											<span>
												<span className="pointer prominent" title="Copy current search results to an editor (⌘Enter)">Open in editor</span>
											</span>
										</div>
									</div>
									<div className="results show-file-icons">
										<div className="monaco-list list_id_19 mouse-support selection-none" tabIndex="0" role="tree" data-keybinding-context="58">
											<div className="monaco-scrollable-element  mac" role="presentation">
												<div className="monaco-list-rows">
													<div className="monaco-list-row" role="treeitem" data-index="0" data-last-element="false" aria-setsize="2" aria-posinset="1" id="list_id_19_0" aria-selected="false" aria-label="1 matches in file index.css of folder src, Search result" aria-level="1" aria-expanded="true" draggable="true">
														<div className="monaco-tl-row">
															<div className="monaco-tl-indent"></div>
															<div className="monaco-tl-twistie codicon codicon-chevron-down collapsible"></div>
															<div className="monaco-tl-contents">
																<div className="filematch">
																	<div className="monaco-icon-label file-icon index.css-name-file-icon css-ext-file-icon ext-file-icon css-lang-file-icon" title="~/Dev/themeweaver/src/index.css">
																		<div className="monaco-icon-label-container">
																			<span className="monaco-icon-name-container">
																				<span className="label-name">index.css</span>
																			</span>
																			<span className="monaco-icon-description-container">
																				<span className="label-description">src</span>
																			</span>
																		</div>
																	</div>
																	<div className="badge">
																		<div className="monaco-count-badge" title="1 match found">1</div>
																	</div>
																	<div className="actionBarContainer">
																		<div className="monaco-action-bar">
																			<ul className="actions-container" role="toolbar">
																				<li className="action-item" role="presentation">
																					<span className="action-label codicon codicon-close" role="button" tabIndex="0" title="Dismiss" />
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="monaco-list-row" role="treeitem" data-index="1" data-last-element="false" aria-setsize="1" aria-posinset="1" id="list_id_19_1" aria-selected="false" aria-label="Found term .token-field-input at column position 30 in line with text .highlight > .token-field > .token-field-input {" aria-level="2" draggable="false">
														<div className="monaco-tl-row">
															<div className="monaco-tl-indent">
																<div className="indent-guide"></div>
															</div>
															<div className="monaco-tl-twistie"></div>
															<div className="monaco-tl-contents linematch">
																<span className="plain match" title="highlight > .token-field > .token-field-input {">
																	<span>highlight &gt; .token-field &gt; </span>
																	<span className="findInFileMatch">.token-field-input</span>
																	<span className="replaceMatch"></span>
																</span>
																<span className="matchLineNum" title=""></span>
																<span className="actionBarContainer">
																	<div className="monaco-action-bar">
																		<ul className="actions-container" role="toolbar">
																			<li className="action-item" role="presentation">
																				<span className="action-label codicon codicon-close" role="button" tabIndex="0" title="Dismiss" />
																			</li>
																		</ul>
																	</div>
																</span>
															</div>
														</div>
													</div>
													<div className="monaco-list-row" role="treeitem" data-index="2" data-last-element="false" aria-setsize="2" aria-posinset="2" id="list_id_19_2" aria-selected="false" aria-label="2 matches in file Token.css of folder src/components, Search result" aria-level="1" aria-expanded="true" draggable="true">
														<div className="monaco-tl-row">
															<div className="monaco-tl-indent"></div>
															<div className="monaco-tl-twistie codicon codicon-chevron-down collapsible"></div>
															<div className="monaco-tl-contents">
																<div className="filematch">
																	<div className="monaco-icon-label file-icon token.css-name-file-icon css-ext-file-icon ext-file-icon css-lang-file-icon" title="~/Dev/themeweaver/src/components/Token.css">
																		<div className="monaco-icon-label-container">
																			<span className="monaco-icon-name-container">
																				<span className="label-name">Token.css</span>
																			</span>
																			<span className="monaco-icon-description-container">
																				<span className="label-description">src/components</span>
																			</span>
																		</div>
																	</div>
																	<div className="badge">
																		<div className="monaco-count-badge" title="2 matches found">2</div>
																	</div>
																	<div className="actionBarContainer">
																		<div className="monaco-action-bar">
																			<ul className="actions-container" role="toolbar">
																				<li className="action-item" role="presentation">
																					<span className="action-label codicon codicon-close" role="button" tabIndex="0" title="Dismiss" />
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="monaco-list-row" role="treeitem" data-index="3" data-last-element="false" aria-setsize="2" aria-posinset="1" id="list_id_19_3" aria-selected="false" aria-label="Found term .token-field-input at column position 2 in line with text .token-field-input {" aria-level="2" draggable="false">
														<div className="monaco-tl-row">
															<div className="monaco-tl-indent">
																<div className="indent-guide"></div>
															</div>
															<div className="monaco-tl-twistie"></div>
															<div className="monaco-tl-contents linematch">
																<span className="plain match" title=".token-field-input {">
																	<span className="findInFileMatch">.token-field-input</span>
																	<span className="replaceMatch"></span>
																</span>
																<span className="matchLineNum" title=""></span>
																<span className="actionBarContainer">
																	<div className="monaco-action-bar">
																		<ul className="actions-container" role="toolbar">
																			<li className="action-item" role="presentation">
																				<span className="action-label codicon codicon-close" role="button" tabIndex="0" title="Dismiss" />
																			</li>
																		</ul>
																	</div>
																</span>
															</div>
														</div>
													</div>
													<div className="monaco-list-row" role="treeitem" data-index="4" data-last-element="true" aria-setsize="2" aria-posinset="2" id="list_id_19_4" aria-selected="false" aria-label="Found term .token-field-input at column position 2 in line with text .token-field-input:focus {" aria-level="2" draggable="false">
														<div className="monaco-tl-row">
															<div className="monaco-tl-indent">
																<div className="indent-guide"></div>
															</div>
															<div className="monaco-tl-twistie"></div>
															<div className="monaco-tl-contents linematch">
																<span className="plain match" title=".token-field-input:focus {">
																	<span className="findInFileMatch">.token-field-input</span>
																	<span className="replaceMatch"></span>
																	<span>:focus </span>
																</span>
																<span className="matchLineNum" title=""></span>
																<span className="actionBarContainer">
																	<div className="monaco-action-bar">
																		<ul className="actions-container" role="toolbar">
																			<li className="action-item" role="presentation">
																				<span className="action-label codicon codicon-close" role="button" tabIndex="0" title="Dismiss" />
																			</li>
																		</ul>
																	</div>
																</span>
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
)

const ExplorerSidebar = (
	<>
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
						<div className="split-view-view visible" style={{height: "calc(100% - 57px)"}}>
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
						<div className="split-view-view">
							<div className="pane">
								<div className="pane-header">
									<div className="twisties codicon codicon-chevron-right" />
									<h3 className="title" title="Outline">outline</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);

const sidebars = [
	ExplorerSidebar,
	SearchSidebar,
	GitSidebar,
	ExtensionSidebar,
	DebugSidebar
]

const SideBar = ({ activeTab }) => (
	<div className="part sidebar left" style={{
		width: '250px'
	}}>
		{sidebars[activeTab]}
	</div>
)

export default SideBar
