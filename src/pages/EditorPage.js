import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CorePage from './CorePage';
import ThemePage from './ThemePage';
import ApplicationPage from './ApplicationPage';
import SyntaxPage from './SyntaxPage';

import Importer from '../components/Importer';
import Workbench from '../components/VSCode/Workbench';
import VSCodeEditor from '../components/VSCode/Editor';
import Nav from '../components/Nav';
import Page from '../components/Page';

import download from '../helpers/download';
import tokenizeSyntaxTokens from '../helpers/tokenizeSyntaxTokens';
import createResolvedTokenObject from '../helpers/createResolvedTokenObject';

const downloadTheme = (allTokens, currentTheme) => {
	const theme = {
		name: ``,
		type: ``,
		colors: Object.keys(allTokens)
			.filter(key => key.startsWith(`application`))
			.reduce((obj, key) => {
				const name = key.replace(/application\./gi, ``);
				obj[name] = allTokens[key].computedValue;
				return obj;
			}, {}),
		tokenColors: tokenizeSyntaxTokens(
			createResolvedTokenObject(allTokens, `syntax`)
		)
	}
	console.log(theme);
	
	download(`${currentTheme}.json`, JSON.stringify(theme, null, 2));
}

const generateTokenObjects = (allTokens) => {
	const coreTokens = {}
	const themeTokens = {}
	const syntaxTokens = {}
	const applicationTokens = {}
	for (const key in allTokens) {
		if (allTokens.hasOwnProperty(key)) {
			const token = allTokens[key];
			if (key.startsWith('application')) {
				applicationTokens[key] = token;
			} else if (key.startsWith('syntax')) {
				syntaxTokens[key] = token;
			} else if (key.startsWith('theme')) {
				themeTokens[key] = token;
			} else if (key.startsWith('core')) {
				coreTokens[key] = token;
			}
		}
	}
	return {coreTokens,themeTokens,syntaxTokens,applicationTokens}
}

const EditorPage = ({ allTokens, updateToken, currentTheme, changeTheme, importTheme, updateFontStyle }) => {
	const tokenNames = Object.keys(allTokens);
	const {
		coreTokens,
		themeTokens,
		syntaxTokens,
		applicationTokens
	} = generateTokenObjects(allTokens);
	
	const resolvedSyntaxTokens = createResolvedTokenObject(allTokens, `syntax`);
	const resolvedApplicationTokens = createResolvedTokenObject(allTokens, `application`);
	
	return (
		<>
		<div className="editor-pane">
			<Nav />
			<Switch>
				<Route path="/editor/core">
					<Page title="Core Colors">
					<CorePage
							tokens={coreTokens}
							updateToken={updateToken} />
					</Page>
				</Route>
				<Route path="/editor/theme">
					<Page title="Theme Colors">
						{/* <Importer importTheme={importTheme} /> */}
						{/* <button onClick={() => downloadTheme(allTokens, currentTheme)}>DOWNLOAD</button> */}
						<ThemePage
							tokens={themeTokens}
							tokenNames={tokenNames}
							currentTheme={currentTheme}
							changeTheme={changeTheme}
							updateToken={updateToken} />
					</Page>
				</Route>
				<Route path="/editor/application">
					<Page title="Application Colors">
						<ApplicationPage
							tokens={applicationTokens}
							tokenNames={tokenNames}
							updateToken={updateToken} />
					</Page>
				</Route>
				<Route path="/editor/syntax">
					<Page title="Syntax Colors">
						<SyntaxPage
							tokens={syntaxTokens}
							tokenNames={tokenNames}
							updateFontStyle={updateFontStyle}
							updateToken={updateToken} />
					</Page>
				</Route>
			</Switch>
		</div>

		<div className="preview-pane vscode">
			<Workbench>
				<VSCodeEditor
					currentTheme={currentTheme}
					syntaxTokens={resolvedSyntaxTokens}
					applicationTokens={resolvedApplicationTokens} />
			</Workbench>
		</div>
		</>
	)
}

export default EditorPage
