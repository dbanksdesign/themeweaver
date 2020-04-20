import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BasePage from './BasePage';
import ThemePage from './ThemePage';
import ApplicationPage from './ApplicationPage';
import SyntaxPage from './SyntaxPage';
import ExportPage from './ExportPage';

import Page from '../components/Page';
import Header from '../components/Header';
import Workbench from '../components/VSCode/Workbench';
import VSCodeEditor from '../components/VSCode/Editor';
import ResizablePanels from '../components/ResizablePanel';

import generateTokenObjects from '../helpers/generateTokenObjects';
import createResolvedTokenObject from '../helpers/createResolvedTokenObject';

const onResize = (width) => {
	console.log(width);
}

const EditorPage = ({ allTokens, updateToken, updateTokens, currentTheme, changeTheme, updateFontStyle, resetState, updateThemeName, theme, themeName }) => {
	const tokenNames = Object.keys(allTokens);
	const {
		baseTokens,
		themeTokens,
		syntaxTokens,
		applicationTokens
	} = generateTokenObjects(allTokens);
	
	return (
		<>
			<Header />
			<ResizablePanels onResize={onResize}>
			<div className="editor-pane">
				<Switch>
					<Route path="/editor/export">
						<ExportPage
							theme={theme}
							themeName={themeName}
							updateThemeName={updateThemeName}
							currentTheme={currentTheme}
							allTokens={allTokens} />
					</Route>
					<Route path="/editor/base" render={routeProps => (
						<Page {...routeProps}>
							<BasePage
								tokens={baseTokens}
								updateTokens={updateTokens}
								updateToken={updateToken}
								resetState={resetState} />
						</Page>
					)} />
					<Route path="/editor/theme" render={routeProps => (
						<Page {...routeProps}>
							<ThemePage
								tokens={themeTokens}
								tokenNames={tokenNames}
								currentTheme={currentTheme}
								changeTheme={changeTheme}
								updateToken={updateToken} />
						</Page>
					)} />
					<Route path="/editor/application" render={routeProps => (
						<Page {...routeProps}>
							<ApplicationPage
								tokens={applicationTokens}
								tokenNames={tokenNames}
								updateToken={updateToken} />
						</Page>
					)} />
					<Route path="/editor/syntax" render={routeProps => (
						<Page {...routeProps}>
							<SyntaxPage
								tokens={syntaxTokens}
								tokenNames={tokenNames}
								updateFontStyle={updateFontStyle}
								updateToken={updateToken} />
						</Page>
					)} />
				</Switch>
			</div>

			<div tabIndex="-1" className="preview-pane vscode">
				<Workbench>
					<VSCodeEditor
						currentTheme={currentTheme}
						syntaxTokens={createResolvedTokenObject(allTokens, `syntax`)}
						applicationTokens={createResolvedTokenObject(allTokens, `application`)} />
				</Workbench>
			</div>
			</ResizablePanels>
		</>
	)
}

export default EditorPage
