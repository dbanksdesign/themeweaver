import React from 'react';
import { useStateValue } from '../state';

const ThemedButton = () => {
  const [{ theme }, dispatch] = useStateValue();
  return (
    <button
      onClick={() => dispatch({
        type: 'changeTheme',
        newTheme: { primary: 'blue'}
      })}
    >
      I am {theme.primary} Make me blue!
    </button>
  );
}

export default ThemedButton;