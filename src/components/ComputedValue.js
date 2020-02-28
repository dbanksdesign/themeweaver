import React from 'react';

class ComputedValue extends React.PureComponent {
	render() {
		const { refs } = this.props;
		return (
			<div className="token-references">
				{refs.map((ref) => (
					<span className="token-reference" key={ref}>{ref}</span>
				))}
			</div>
		)
	}
}

export default ComputedValue
