import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BasePage from './BasePage';
import ThemePage from './ThemePage';
import ApplicationPage from './ApplicationPage';
import SyntaxPage from './SyntaxPage';
import ExportPage from './ExportPage';

import Header from '../components/Header';
import Workbench from '../components/VSCode/Workbench';
import VSCodeEditor from '../components/VSCode/Editor';
import Panels from '../components/Panels';

import generateTokenObjects from '../helpers/generateTokenObjects';
import createResolvedTokenObject from '../helpers/createResolvedTokenObject';
import ScrollToTop from '../components/ScrollTop';

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
			<ScrollToTop />
			<Panels>
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
						<Route path="/editor/base">
							<BasePage
								tokens={baseTokens}
								updateTokens={updateTokens}
								updateToken={updateToken}
								resetState={resetState} />
						</Route>
						<Route path="/editor/theme">
							<ThemePage
								tokens={themeTokens}
								tokenNames={tokenNames}
								currentTheme={currentTheme}
								changeTheme={changeTheme}
								updateToken={updateToken} />
						</Route>
						<Route path="/editor/application">
							<ApplicationPage
								tokens={applicationTokens}
								tokenNames={tokenNames}
								updateToken={updateToken} />
						</Route>
						<Route path="/editor/syntax">
							<SyntaxPage
								tokens={syntaxTokens}
								tokenNames={tokenNames}
								updateFontStyle={updateFontStyle}
								updateToken={updateToken} />
						</Route>
					</Switch>
				</div>
				
				{windowWidth => (
					<div tabIndex="-1" className="preview-pane vscode">
						<Workbench>
							<VSCodeEditor
								windowWidth={windowWidth}
								currentTheme={currentTheme}
								syntaxTokens={createResolvedTokenObject(allTokens, `syntax`)}
								applicationTokens={createResolvedTokenObject(allTokens, `application`)} />
						</Workbench>
					</div>
				)}

			</Panels>
		</>
	)
}

export default EditorPage
