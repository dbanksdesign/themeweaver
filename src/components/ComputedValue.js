import React from 'react';

class ComputedValue extends React.PureComponent {
	render() {
		const { refs } = this.props;
		return (
			<div className="token-references">
				<span>Resolves to: </span>
				{refs.map((ref,i) => (
					<span className="token-reference" key={`${ref}${i}`}>{ref}</span>
				))}
			</div>
		)
	}
}

export default ComputedValue
