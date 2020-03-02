import React from 'react';
import './Swatch.css';

const Swatch = ({ value }) => (
	<div className="swatch-wrapper">
		<div className="swatch" style={{
			backgroundColor: value
		}} />
	</div>
)

export default Swatch
