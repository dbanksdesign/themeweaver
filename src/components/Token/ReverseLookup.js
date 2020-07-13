import React from 'react';
import { Link } from 'react-router-dom';
import refToLink from '../../helpers/refToLink';

const ReverseLookup = ({ list=[] }) => {
	if (list && list.length > 0) {
		return (
			<div className="token-reverse-lookup">
				<h4>This token is referenced by {list.length} others</h4>
				<ul>
					{list.map(item => (
						<li key={item}>
							<Link to={refToLink(item)}>
								{item}
							</Link>
						</li>
					))}
				</ul>
			</div>
		)
	} else {
		return null;
	}
}

export default ReverseLookup
