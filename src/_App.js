import React from 'react';
import produce from 'immer';
import logo from './logo.svg';
import './App.css';
import tokens from './tokens';
import flattenObject from './helpers/flattenObject';
import Group from './components/Group';
import Tokens from './components/Tokens';
import { StateProvider, useStateValue } from './state';
import ThemedButton from './components/ThemeButton';
import * as immutable from 'object-path-immutable'
// import vsCode from './vscode/index.html';

const App = () => {
  // const initialState = flattenObject(tokens);
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
				console.log(action.path.join('.'));
				const newState = immutable.set(state, action.path.join('.'), action.value);
				console.log(newState);
				return newState;
				// return state;
				// return Object.assign({}, state, {
				// 	[action.name]: action.value
				// });
				// const nextState = produce(state, draft => {
				// 	let obj = draft;
				// 	console.log(draft.get(action.path.join('.')));
				// 	// for (let index = 0; index < action.path.length; index++) {
				// 	// 	obj = obj[action.path[index]];
				// 	// }
				// 	// console.log(obj);
				// 	// obj.value = action.value;
				// });
				// console.log(nextState);
				// return nextState;
				return state;
      default:
        return state;
    }
	};
  
  return (
    <StateProvider initialState={tokens} reducer={reducer}>
      <Tokens />
    </StateProvider>
  );
}

export default App;
