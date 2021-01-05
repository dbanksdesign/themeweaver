import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Workbench from '../components/VSCode/Workbench';
import VSCodeEditor from '../components/VSCode/Editor';
import Alert from '../components/Alert';
import createResolvedTokenObject from '../helpers/createResolvedTokenObject';
import {LogoWithText} from '../components/Logo';
import Importer from '../components/Importer';

import './Home.scss';

const HomePage = ({ currentTheme, allTokens, setAllTokens, setState, clearState, resetState, importTheme }) => {
	return (
		<>
		
		<div className="page-content homepage">
		<div className="home-blur" />
			<div className="">
			
			<Helmet>
				<title>Themeweaver | Code editor &amp; syntax themes in your browser!</title>
			</Helmet>
			
			<section className="home-hero">
				<div className="home-logo">
					<LogoWithText />
				</div>
				<h1 className="home-header">
					Code editor &amp; syntax themes in your browser!
				</h1>
				
			</section>
			
			<section className="home-split">
				<div className="home-split-panel">
					<Importer
						setAllTokens={setAllTokens}
						setState={setState}
						clearState={clearState}
						resetState={resetState}
						importTheme={importTheme} />
					<Link className="button block primary large" to="/editor/base">Get started</Link>
				</div>
				<div className="home-split-panel" style={{height: '100vh'}}>
					<div tabIndex="-1" className="preview-pane vscode">
						<Workbench>
							<VSCodeEditor
								currentTheme={currentTheme}
								syntaxTokens={createResolvedTokenObject(allTokens, `syntax`)}
								applicationTokens={createResolvedTokenObject(allTokens, `application`)} />
						</Workbench>
					</div>
				</div>
			</section>
			
			<section className="home-hero">
				<Alert variant="info">
					The code editor above actually works, you can edit those files! The VSCode application around it is just a prototype, you can click on the activity bar tabs, but it is not functional other than that.
				</Alert>
			</section>
			
			<section className="home-hero flow">
				<h2>How it works</h2>
				
				<p>Themeweaver uses the concept of <a href="https://designtokens.org">design tokens<sup>&trade;</sup></a> to build light and dark themes for multiple code editors and syntax highlighting environments. All changes are stored in the browser, don't worry about losing your changes. When you are ready, export your theme to multiple code editors like VSCode, Jetbrains, iTerm, etc.</p>
			</section>

			{/* <div className="home-works">
				<div className="home-works-type">
					<h3>1. Base tokens</h3>
					<p>This is the lowest level, all other tokens eventually reference base tokens. If you don't want to go deeper, you don't have to edit anything else.</p>
				</div>
				
				<div className="home-works-type">
					<h3>2. Theme tokens</h3>
					<p>Dark and light theme tokens define semantic values like primary background, interactive backround, primary font, etc. These tokens are then referenced in the application and syntax tokens. Doing this allows you to only have to edit a small number of tokens for each theme rather than all of the application and syntax tokens.</p>
				</div>
				
				<div className="home-works-type">
					<h3>3. Application tokens</h3>
					<p>Application tokens allow you to change parts of the application. Maybe you want the activity bar (on the left) to use the primary color, or you want all backgrounds the same. There are <em>a lot</em> of application tokens you can set. Go nuts.</p>
				</div>
				
				<div className="home-works-type">
					<h3>4. Syntax tokens</h3>
					<p>Syntax tokens are used for syntax highlighting rules. You can also define font styles for syntax highlighting!</p>
				</div>
			</div> */}

			
			<section className="home-hero">
				<Alert variant="warning">
					This is a work-in-progress so there might be some bugs. Also, performance might be an issue because changes have huge effects and this is running a live code editor. 
				</Alert>
			</section>
			
			<footer className="home-footer">
				<a href="https://github.com/dbanksdesign/themeweaver" aria-label="View source on Github">
					https://github.com/dbanksdesign/themeweaver
				</a>
			</footer>
		</div>
		</div>
		</>
	)
}

export default HomePage
