import React, { useMemo } from 'react';
import produce from "immer";
import { useStateValue } from '../state';
import resolveReference from '../helpers/resolveReference';

/**
 * I want the token to only re-render when its value changes,
 * or if it has a reference and any reference in the reference 
 * chain changes. 
 * 
 * The problem is we are storing the whole token dictionary as
 * a context, which will trigger re-renders for every component
 * that uses it. 
 * 
 * I want to subscribe to only changes from a limited set of tokens.
 * What if instead we kept the context as a flattened and sorted array,
 * then memoized those references as they would not be in a deeply
 * nested object. 
 */

// const MemoizedToken = useMemo((props) => function, input)

class TokenComponent extends React.PureComponent {
	render() {
		const { name, value } = this.props;
		console.log(`renderd: ${name}`);
		const [tokens, dispatch] = useStateValue();
		const update = (e) => {
		 dispatch({
			 type: 'update',
			 name: name,
			 value: e.target.value
		 });
		}
		
		return (
			<div>
				<label>
					{name}
					<input type="text" value={value} onChange={update} />
				</label>
			</div>
		)
	}
}

export {TokenComponent}

const Token = React.memo((props) => {
  console.log(props.name);
  let computedValue;
  const { name, value } = props;
  const [tokens, dispatch] = useStateValue();
  const update = (e) => {
   dispatch({
     type: 'update',
     name: name,
     value: e.target.value
   });
  }
  
  // if (value.indexOf('{') > -1) {
  //   computedValue = resolveReference(value, tokens, 'dark');
  //   console.log(computedValue);
  // }
  
  return (
    <div>
      <label>
        {name}
        <input type="text" value={value} onChange={update} />
      </label>
    </div>
  )
});

export default Token;
