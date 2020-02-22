import React from 'react';
import produce from 'immer';
import logo from './logo.svg';
import './App.css';
import tokens from './tokens';
import flattenObject from './helpers/flattenObject';
import Group from './components/Group';
import Tokens from './components/Tokens';
import { StateProvider } from './state';
import ThemedButton from './components/ThemeButton';
import vsCode from './vscode/index.html';

const App = () => {
  const initialState = flattenObject(tokens);
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
				return Object.assign({}, state, {
					[action.name]: action.value
				});
        // const nextState = produce(state, draft => {
        //   let obj = draft;
        //   for (let index = 0; index < action.path.length; index++) {
        //     obj = obj[action.path[index]];
        //   }
        //   obj.value = action.value;
        // });
				// return nextState;
				// return state;
      default:
        return state;
    }
	};
	
	console.log(initialState);
  
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Tokens />
    </StateProvider>
  );
}

export default App;
