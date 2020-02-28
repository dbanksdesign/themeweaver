import React from 'react';
import { useStateValue } from '../state';
import Group from './Group';

const Tokens = () => {
	const [tokens, dispatch] = useStateValue();
	console.log(tokens);
  return (
		<Group object={tokens} />
	);
}

export default Tokens;
