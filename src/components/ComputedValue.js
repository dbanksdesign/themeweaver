import React from 'react';
import { Link } from 'react-router-dom';

const ComputedValue = ({ refs }) => {
	if (refs && refs.length) {
		return (
			<div className="token-references">
				{refs.map((ref,i) => {
					if (ref) {
						if (ref.indexOf('}') > -1) {
							let name;
							ref.replace(/\{([^}]+)\}/g, (match, variable) => {
								name = match.replace(/{|}/g,'');;
							});
							const link = `/editor/${name.split('.')[0]}#${name.replace(/\./g,'-')}`
							return (
								<li className="token-reference" key={ref}>
									<Link to={link}>{ref}</Link>
								</li>
							)
						} else {
							return (
								<li className="token-reference" key={ref}>
									{ref}
								</li>
							)
						}
					} else {
						return null;
					}
				})}
			</div>
		)
	} else {
		return null;
	}
}

export default ComputedValue
