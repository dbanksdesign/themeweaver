import React from 'react';
import './Loader.scss';

const Loader = ({ message='Loading...' }) => {
	return (
		<div className="loading-overlay">
			<div className="loading-overlay-message">{message}</div>
		</div>
	)
}

export default Loader;
