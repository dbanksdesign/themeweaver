import React from 'react';
import ReactDOM from 'react-dom';
import { loadWASM } from "onigasm"; // peer dependency of 'monaco-textmate'
import MonacoEditor from 'react-monaco-editor'; // need to import this to get styles
import App from './App';
import * as serviceWorker from './serviceWorker';

import './reset.css';
import './index.css';

loadWASM("/onigasm.wasm").then(() => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
