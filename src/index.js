import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useRouteMatch } from 'react-router-dom';
import Amplify, { API, Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';
import { loadWASM } from "onigasm"; // peer dependency of 'monaco-textmate'
import 'react-monaco-editor'; // need to import this to get styles
import App from './App';
import Loader from './components/Loader';
import * as serviceWorker from './serviceWorker';

import './styles/index.scss';

Amplify.configure(awsconfig);
Analytics.autoTrack('pageView', {
	enable: true,
	type: 'SPA'
});

// This is super hacky, but whatever.
// basically if someone goes to a shared theme we want to load that
// theme data from our Amplify API in dynamoDB and add it to the 
// app's state. We can't do this within a Route because it will cause
// an infinite loop of re-renders. Unless I'm doing something really dumb.
const AppWrapper = () => {
	let id;
	const match = useRouteMatch("/editor/:id");
	const [isLoaded, setIsLoaded] = useState(false);
	const [state, setState] = useState(null);
	if (match && match.params && match.params.id) {
		id = match.params.id;
	}
	useEffect(() => {
		if (id) {
			API.get('theme', `/theme/${id}`)
				.then(response => {
					if (response && response.length) {
						Analytics.record({ name: 'dynamoHit' });
						// need to test if there are items in the response array
						// there might be a bad ID given in which case it will be an empty array
						const { allTokens, name, theme } = response[0];
						if (allTokens && name && theme) {
							setState({
								allTokens: allTokens,
								themeName: name,
								theme
							});
						} else {
							console.log('something went wrong with: ', response);
						}
					} else {
						Analytics.record({ name: 'dynamoMiss' });
					}
					setIsLoaded(true);
				})
				.catch(error => {
					console.log(error);
					setIsLoaded(true);
				});
		} else {
			setIsLoaded(true);
		}
	}, [id]);

	if (!isLoaded) {
		return <Loader />
	} else {
		return (
			<App loadedTheme={state} />
		);
	}
}

loadWASM("/onigasm.wasm").then(() => {
	const rootElement = document.getElementById("root");
	ReactDOM.render(<Router><AppWrapper /></Router>, rootElement);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
