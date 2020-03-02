import React from 'react';
// import './Tabs.css';
import './css/tabs.css';

const VSCodeTabs = () => (
	<div className="title tabs show-file-icons title-border-bottom">
		<div className="tabs-and-actions-container">
			<div className="monaco-scrollable-element  mac" role="presentation">
				<div role="tablist" draggable="true" className="tabs-container">
					<div draggable="true" tabIndex="0" role="presentation" className="tab close-button-right sizing-shrink has-icon-theme" aria-label="CSSVars.js, tab" title="~/Dev/themeweaver/src/components/CSSVars.js" aria-selected="false">
						<div className="tab-border-top-container"></div>
						<div className="monaco-icon-label file-icon cssvars.js-name-file-icon js-ext-file-icon ext-file-icon javascript-lang-file-icon tab-label" title="~/Dev/themeweaver/src/components/CSSVars.js">
							<div className="monaco-icon-label-container">
								<span className="monaco-icon-name-container">
									<span className="label-name">CSSVars.js</span>
								</span>
								<span className="monaco-icon-description-container"></span>
							</div>
						</div>
						<div className="tab-close">
							<div className="monaco-action-bar animated">
								<ul className="actions-container" role="toolbar" aria-label="Tab actions">
									<li className="action-item" role="presentation">
										<span className="action-label codicon codicon-close" role="button" tabIndex="0" title="Close (⌘W)" />
									</li>
								</ul>
							</div>
						</div>
						<div className="tab-border-bottom-container"></div>
					</div>
					<div draggable="true" tabIndex="0" role="presentation" className="tab close-button-right sizing-shrink has-icon-theme active" aria-label="Editor.js, tab" title="~/Dev/themeweaver/src/components/Editor.js" aria-selected="true">
						<div className="tab-border-top-container"></div>
						<div className="monaco-icon-label file-icon editor.js-name-file-icon js-ext-file-icon ext-file-icon javascript-lang-file-icon tab-label" title="~/Dev/themeweaver/src/components/Editor.js">
							<div className="monaco-icon-label-container">
								<span className="monaco-icon-name-container">
									<span className="label-name">Editor.js</span>
								</span>
								<span className="monaco-icon-description-container"></span>
							</div>
						</div>
						<div className="tab-close">
							<div className="monaco-action-bar animated">
								<ul className="actions-container" role="toolbar" aria-label="Tab actions">
									<li className="action-item" role="presentation">
										<span className="action-label codicon codicon-close" role="button" tabIndex="0" title="Close (⌘W)" />
									</li>
								</ul>
							</div>
						</div>
						
						<div className="tab-border-bottom-container"></div>
					</div>
				</div>
				<div role="presentation" aria-hidden="true" className="invisible scrollbar horizontal">
					<div className="slider"></div>
				</div>
				<div role="presentation" aria-hidden="true" className="invisible scrollbar vertical">
					<div className="slider"></div>
				</div>
			</div>
			
			<div className="editor-actions">
				<div className="monaco-toolbar">
					<div className="monaco-action-bar animated">
						<ul className="actions-container" role="toolbar" aria-label="Editor actions">
							<li className="action-item" role="presentation">
								<span className="action-label icon menu-item-action-item-icon-3" role="button" title="Open Changes" tabIndex="0" />
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label icon menu-item-action-item-icon-5" role="button" title="Open Changes with Previous Revision (⌥⌘G ,)" tabIndex="0" />
							</li>
							<li className="action-item disabled" role="presentation">
								<span className="action-label disabled icon menu-item-action-item-icon-6" role="button" title="Show Revision Details" aria-disabled="true" />
							</li>
							<li className="action-item disabled" role="presentation">
								<span className="action-label disabled icon menu-item-action-item-icon-7" role="button" title="Open Changes with Next Revision (⌥⌘G .)" aria-disabled="true" />
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label icon menu-item-action-item-icon-8" role="button" title="Toggle File Blame Annotations (⌥⌘G B)" tabIndex="0" />
							</li>
							<li className="action-item" role="presentation">
								<span className="action-label codicon codicon-split-horizontal" role="button" title="Split Editor Right (⌘\)" tabIndex="0" />
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
	</div>
)

export default VSCodeTabs
