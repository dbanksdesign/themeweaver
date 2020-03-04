import React from 'react';

const ListRow = ({ label, iconClass }) => (
	<div className="monaco-list-row" role="treeitem" data-index="7" data-last-element="false" aria-setsize="14" aria-posinset="8" aria-label=".gitignore" aria-level="1" draggable="true">
		<div className="monaco-tl-row">
			<div className="monaco-tl-indent"></div>
			<div className="monaco-tl-twistie"></div>
			<div className="monaco-tl-contents">
				<div className={`monaco-icon-label file-icon ${iconClass} ext-file-icon explorer-item`} title="~/Dev/nu-disco-vscode-theme/.gitignore">
					<div className="monaco-icon-label-container">
						<span className="monaco-icon-name-container">
							<span className="label-name">
								<span className="monaco-highlighted-label" title="~/Dev/nu-disco-vscode-theme/.gitignore">
									<span>{label}</span>
								</span>
							</span>
						</span>
						<span className="monaco-icon-description-container">
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
)

const VSCodeExplorer = () => (
	<div className="explorer-folders-view file-icon-themable-tree show-file-icons">
		<ListRow
			label=".gitignore"
			iconClass=".gitignore-name-file-icon gitignore-ext-file-icon ignore-lang-file-icon" />
		<ListRow
			label="src"
			iconClass="folder-icon" />
	</div>
)

export default VSCodeExplorer
