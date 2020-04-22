import React from 'react';

const Tab = ({ onClick, title, iconClass, label, selected }) => (
	<div draggable="true" tabIndex="0" role="presentation" className={`tab close-button-right sizing-shrink has-icon-theme ${selected ? 'active' : ''}`} aria-label="CSSVars.js, tab" title={title} onClick={onClick}>
		<div className="tab-border-top-container"></div>
		<div className={`monaco-icon-label file-icon ext-file-icon tab-label ${iconClass}`} title={title}>
			<div className="monaco-icon-label-container">
				<span className="monaco-icon-name-container">
					<span className="label-name">{label}</span>
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
)

const Breadcrumb = ({ iconClass, className, label, chevron, title }) => (
	<div className={`${className||''} monaco-breadcrumb-item`} tabIndex="-1" role="listitem">
		<div className={`monaco-icon-label file-icon ${iconClass||''} ext-file-icon`} title={title}>
		<div className="monaco-icon-label" title={title}>
			<div className="monaco-icon-label-container">
				<span className="monaco-icon-name-container">
					<span className="label-name">{label}</span>
				</span>
				<span className="monaco-icon-description-container"></span>
			</div>
		</div>
		{chevron && <div className="codicon codicon-chevron-right"></div>}
		</div>
	</div>
)

const VSCodeTabs = ({ onClick, tabs, selected }) => (
	<div className="title tabs show-file-icons title-border-bottom">
		<div className="tabs-and-actions-container">
			<div className="monaco-scrollable-element mac" role="presentation">
				<div role="tablist" draggable="true" className="tabs-container">
					{tabs.map((tab,i) => (
						<Tab {...tab}
							key={tab.title}
							onClick={() => onClick(i)}
							selected={selected === i} />
					))}
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
		<div className="tabs-breadcrumbs">
			<div className="breadcrumbs-control relative-path">
				<div className="monaco-scrollable-element  mac" role="presentation">
					<div className="monaco-breadcrumbs" tabIndex="0" role="list">
						<Breadcrumb label="src" chevron={true} />
						<Breadcrumb {...tabs[selected]} />
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default VSCodeTabs
