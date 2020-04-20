import React from 'react';

const ListRow = ({ label, iconClass, focused, selected, indent=0, activeIndent=0, modified, isFolder, onClick }) => {
	const indents = [...Array(indent||0).keys()];
	return (
		<div className={`monaco-list-row ${modified?'modified':''} ${focused?'focused':''} ${selected?'selected':''}`} role="treeitem" data-index="7" data-last-element="false" aria-setsize="14" aria-posinset="8" aria-label=".gitignore" aria-level="1" draggable="true" onClick={onClick}>
			<div className="monaco-tl-row">
				<div className="monaco-tl-indent">
					{indents.map((_,i) => (
						<div key={i} className={`indent-guide ${i===activeIndent ? 'active' : ''}`} />
					))}
				</div>
				<div className={`monaco-tl-twistie ${isFolder ? 'codicon codicon-chevron-down collapsible' : ''}`} style={{paddingLeft: `${(indent+1)*8}px`}}></div>
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
}

const VSCodeExplorer = () => (
	<div className="explorer-folders-view file-icon-themable-tree show-file-icons">
		<div className="monaco-list list_id_2 mouse-support element-focused selection-single">
			<div className="monaco-scrollable-element  mac">
				<div className="monaco-list-rows">
					<ListRow
						label="src"
						isFolder={true}
						iconClass="src-name-folder-icon" />
					<ListRow
						label="components"
						isFolder={true}
						iconClass="folder-icon"
						indent={1} />
					<ListRow
						label="css.css"
						iconClass="css-ext-file-icon"
						indent={1} />
					<ListRow
						label="js.js"
						focused={true}
						selected={true}
						iconClass="js-ext-file-icon"
						indent={1} />
					<ListRow
						label=".gitignore"
						modified={true}
						iconClass=".gitignore-name-file-icon gitignore-ext-file-icon ignore-lang-file-icon" />
					<ListRow
						label="package.json"
						iconClass="package.json-name-file-icon" />
					<ListRow
						label="README.md"
						iconClass="readme.md-name-file-icon" />
					</div>
				</div>
		</div>
	</div>
)

export default VSCodeExplorer
