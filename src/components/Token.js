import React from 'react';
import ComputedValue from './ComputedValue';
import Swatch from './Swatch';

class Token extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		const { name, value, refs } = this.props;
		// if (JSON.stringify(refs) !== JSON.stringify(nextProps.refs)) {
		// 	console.log(refs, nextProps.refs);
		// }
		// can't shallowly compare path because it is an array
		return value !== nextProps.value ||
			name !== nextProps.name ||
			JSON.stringify(refs) !== JSON.stringify(nextProps.refs);
	}
	
	render() {
		const { name, value, updateToken, path, refs } = this.props;
		const computedValue = refs[refs.length-1];
		
		return (
			<div>
				<label>
					{name}
					<input type="text" value={value} onChange={(e) => updateToken({path, value: e.target.value})} />
					<Swatch value={computedValue || value} />
					{refs && <ComputedValue refs={refs} />}
				</label>
			</div>
		)
	}
}

export default Token
