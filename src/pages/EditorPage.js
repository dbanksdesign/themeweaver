import clsx from 'clsx';
import React, { useState } from 'react';

const EditorPage = (props) => {
	const { children, tabs } = props;
	const [activeTab, setActiveTab] = useState(0);
	
	return (
		<div className="editor-pane">
			<header className="tw-header secondary">
				<nav className="tw-header-primary-nav">
					{tabs.map((tab,i) =>
						<button key={tab}
							className={clsx(
								"tw-header-nav-item",
								activeTab === i && "active"
							)}
							onClick={() => setActiveTab(i)}>
							{tab}
						</button>)}
				</nav>
			</header>
			{children[activeTab]}
		</div>
	)
}

export default EditorPage;
