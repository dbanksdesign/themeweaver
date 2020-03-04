import React from 'react';
import ReactDOM from 'react-dom';
import { loadWASM } from "onigasm"; // peer dependency of 'monaco-textmate'
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
// import './vscode/codicon.ttf';
// import './vscode/workbench.desktop.main.css';

loadWASM("/onigasm.wasm").then(() => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
});

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
