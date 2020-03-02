import React from 'react';
import StatusBar from './StatusBar';
import ActivityBar from './ActivityBar';
import VSCodeTabs from './Tabs';

import './css/gridview.css';
import './css/tabs.css';
import './css/panelpart.css';
import './css/sidebarpart.css';
import './css/splitview.css';
import './css/statusbarpart.css';
import './css/titlecontrol.css';
import './css/titlebarpart.css';

const Workbench = () => (
	<div className="monaco-workbench mac chromium nopanel fullscreen" style={{
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
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
											left: 0,
											width: '48px'
										}}>
											<ActivityBar />
										</div>
										{/* Explorer */}
										<div className="split-view-view visible" style={{
											left: '48px',
											width: '200px'
										}}></div>
										{/* Editor */}
										<div className="split-view-view visible" style={{
											left: '248px'
										}}>
											<div className="part editor has-watermark">
												<div className="content">
													<div className="editor-group-container active">
														<VSCodeTabs />
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
