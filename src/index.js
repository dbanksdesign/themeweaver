import React from 'react';
import ReactDOM from 'react-dom';
// import { monaco } from "@monaco-editor/react";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// monaco
// 	.init()
// 	.then(monacoInstance => {
// 		/* here is the instance of monaco, so you can use the `monaco.languages` or whatever you want */
// 		window.monaco = monacoInstance
// 	})
// 	.catch(error =>
// 		console.error("An error occurred during initialization of Monaco: ", error)
// 	);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
