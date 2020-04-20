import React from 'react';
import StatusBar from './StatusBar';
import SideBar from './SideBar';
import ActivityBar from './ActivityBar';
import Panel from './Panel';

import './css/activityaction.css';
import './css/activitybar.css';
import './css/breadcrumbs.css';
import './css/breadcrumbsWidget.css';
import './css/editorgroupview.css';
import './css/explorerviewlet.css';
import './css/gridview.css';
import './css/tabs.css';
import './css/panelpart.css';
import './css/paneview.css';
import './css/part.css';
import './css/sidebarpart.css';
import './css/splitview.css';
import './css/statusbarpart.css';
import './css/tabs.css';
import './css/titlecontrol.css';
import './css/titlebarpart.css';
import './overrides.css';

const Workbench = ({ children }) => (
	<div className="monaco-workbench mac chromium fullscreen" style={{
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	}}>
		<div className="monaco-grid-view">
			<div className="monaco-grid-branch-node">
				<div className="monaco-split-view2 vertical">
					<div className="split-view-container">
						<div className="split-view-view visible" style={{flex:'1'}}>
							<div className="monaco-grid-branch-node">
								<div className="monaco-split-view2 horizontal">
									<div className="split-view-container">
										{/* Activity Bar */}
										<div className="split-view-view visible" style={{
											width: '48px'
										}}>
											<ActivityBar />
										</div>
										{/* Explorer */}
										<div className="split-view-view visible" style={{
											width: '150px'
										}}>
											<SideBar />
										</div>
										{/* Editor */}
										<div className="split-view-view visible" style={{flex:'1'}}>
											<div className="monaco-split-view2 vertical">
												<div className="split-view-container">
													<div className="split-view visible" style={{flex:'1'}}>
														{children}
													</div>
													<div className="split-view visible" style={{height:'200px'}}>
														<Panel />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="split-view-view visible" style={{height:'22px'}}>
							<StatusBar />
						</div>
					</div>
				</div>
				

				
			</div>
		</div>
	</div>
);

export default Workbench
