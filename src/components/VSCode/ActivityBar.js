import React from 'react';
import clsx from 'clsx';
import './ActivityBar.css';

const ActionItem = ({ label, icon, active, onClick, index, badge }) => {
	return (
		<li className={clsx("action-item", active && "checked")}
			role="button"
			draggable="true"
			tabIndex="0"
			aria-label={label}
			title={label}
			onClick={() => onClick(index)}>
			<span className={`action-label codicon-${icon} codicon`} aria-label={label} title={label} />
			{badge && <div className="badge scm-viewlet-label" aria-label={label} title={label}>
				<div className="badge-content">{badge}</div>
			</div>}
			<div className="active-item-indicator"></div>
		</li>
	);
};

const actionItems = [{
	label: `Explorer (⇧⌘E)`,
	icon: `files`
},{
	label: `Search (⇧⌘F)`,
	icon: `search`
},{
	label: `Source Control (⌃⇧G) - 100 pending changes`,
	icon: `source-control`,
	badge: `100`
},{
	label: `Extensions (⇧⌘X)`,
	icon: `extensions`
},{
	label: `Run and Debug (⇧⌘D)`,
	icon: `debug-alt`
}]

const ActivityBar = ({ onClick, activeTab, activityBarInactive }) => (
	<div className={clsx(
		"part activitybar left",
		activityBarInactive ? "has-inactive-foreground" : null
		)} id="workbench.parts.activitybar" role="navigation">
		<div className="content">
			<div className="composite-bar">
				<div className="monaco-action-bar vertical">
					<ul className="actions-container" role="toolbar" aria-label="Active View Switcher">
						{actionItems.map((item, i) => <ActionItem key={item.label} {...item} index={i} active={i === activeTab} onClick={onClick} />)}
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
