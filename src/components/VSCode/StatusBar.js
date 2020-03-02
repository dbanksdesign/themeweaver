import React from 'react';
import './StatusBar.css';

const StatusBar = () => (
	<div className="part statusbar status-border-top" id="workbench.parts.statusbar" role="contentinfo">
		<div className="left-items items-container">
			<div id="status.host" className="statusbar-item left has-background-color first-visible-item" title="Open a remote window">
				<span>
					<span className="codicon codicon-remote"></span>
				</span>
			</div>
			
			<div id="status.scm" className="statusbar-item left" title="themeweaver (Git) - cra*">
				<span>
					<span className="codicon codicon-git-branch"></span> cra*
				</span>
			</div>
			
			<div id="status.scm" className="statusbar-item left" title="themeweaver (Git) - Synchronize Changes">
				<span>
					<span className="codicon codicon-sync"></span>
				</span>
			</div>
			
			<div id="status.problems" className="statusbar-item left" title="No Problems">
				<span>
					<span className="codicon codicon-error"></span> 0 
					<span className="codicon codicon-warning"></span> 0
				</span>
			</div>
			
			<div id="GitHub.vscode-pull-request-github" className="statusbar-item left last-visible-item">
				<span>
					<span className="codicon codicon-mark-github"></span> Sign in to github.com
				</span>
			</div>
		</div>
		
		<div className="right-items items-container">
			<div id="status.notifications" className="statusbar-item right last-visible-item" title="No Notifications">
				<span>
					<span className="codicon codicon-bell"></span>
				</span>
			</div>
			
			<div id="status.feedback" className="statusbar-item right" title="Tweet Feedback">
				<span>
					<span className="codicon codicon-feedback"></span>
				</span>
			</div>
			
			<div id="esbenp.prettier-vscode" className="statusbar-item right">
				<span>Prettier</span>
			</div>
			
			<div id="ban.spellright" className="statusbar-item right" title="Spelling - OFF">
				<span>
					<span className="codicon codicon-eye"></span> [off]
				</span>
			</div>
			
			<div id="status.editor.mode" className="statusbar-item right" title="Select Language Mode">
				<span>JavaScript</span>
			</div>
			<div id="status.editor.eol" className="statusbar-item right" title="Select End of Line Sequence">
				<span>LF</span>
			</div>
			<div id="status.editor.encoding" className="statusbar-item right" title="Select Encoding">
				<span>UTF-8</span>
			</div>
			<div id="status.editor.indentation" className="statusbar-item right" title="Select Indentation">
				<span>Tab Size: 2</span>
			</div>
			<div id="status.editor.selection" className="statusbar-item right" title="Go to Line">
				<span>Ln 28, Col 18</span>
			</div>
		</div>
	</div>
)

export default StatusBar
