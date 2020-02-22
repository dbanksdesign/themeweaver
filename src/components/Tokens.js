import React from 'react';
import { useStateValue } from '../state';
import Token, { TokenComponent } from './Token';

const Tokens = () => {
	const [tokens, dispatch] = useStateValue();
	console.log(tokens);
  return (
		<div>
			{Object.keys(tokens).map((key) => {
				// return (<div>{key}</div>);
				return (<TokenComponent name={key} key={key} value={tokens[key]} />);
			})}
		</div>
	);
}

export default Tokens;
