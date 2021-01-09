import React from 'react';
import clsx from 'clsx';
import StatusBar from './StatusBar';
import SideBar from './SideBar';
import ActivityBar from './ActivityBar';
import Panel from './Panel';
import DebugPanel from './DebugPanel';

import './css/activityaction.css';
import './css/activitybar.css';
import './css/breadcrumbs.css';
import './css/breadcrumbsWidget.css';
import './css/debugToolbar.css';
import './css/editorgroupview.css';
import './css/explorerviewlet.css';
import './css/gridview.css';
import './css/tabs.css';
import './css/panelpart.css';
import './css/paneview.css';
import './css/part.css';
import './css/scmViewlet.css';
import './css/searchview.css';
import './css/sidebarpart.css';
import './css/splitview.css';
import './css/statusbarpart.css';
import './css/tabs.css';
import './css/titlecontrol.css';
import './css/titlebarpart.css';
import './Workbench.css';
import './overrides.css';

class Workbench extends React.Component {
	state = {
		activeTab: 0,
		debug: false,
	}
	
	changeTab = (index) => {
		const debug = index === 4 ? true : false;
		this.setState({
			activeTab: index,
			debug
		});
	}
	
	render() {
		const { children, theme, activityBarInactive } = this.props;
		const { activeTab, debug } = this.state;
		return (
			<>
			<div tabIndex="-1" className="vscode" id="vscode">
			<div className={clsx("monaco-workbench mac chromium fullscreen", debug && 'debug', theme)}>
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
													<ActivityBar activityBarInactive={activityBarInactive} activeTab={activeTab} onClick={this.changeTab} />
												</div>
												{/* Explorer */}
												<div className="split-view-view visible" style={{
													width: '250px'
												}}>
													<SideBar activeTab={activeTab} />
												</div>
												{/* Editor */}
												<div className="split-view-view visible" style={{flex:'1', overflow:'hidden'}}>
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
				{debug && <DebugPanel />}
			</div>
			</div>
			</>
		)
	}
}

export default Workbench
