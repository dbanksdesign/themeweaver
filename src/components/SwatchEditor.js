import React, { useState } from 'react';
import chroma from 'chroma-js';

const SwatchEditor = (props) => {
	const { path, value } = props;
	const name = path.split('.').slice(-1);
	const hsl = chroma(value).hsl();
	const h = Math.round(hsl[0]);
	
	const [isVisible, setVisible] = useState(false)
	
	// TODO: on super dark or super light colors changing the hue
	// doesn't have good granularity because it is a controlled component
	// it looks like the input skips values
	const onChange = (value) => {
		props.onChange({
			path,
			value: chroma.hsl(value).hex()
		});
	}
	
	return (
		<div className="base-color"
			id={path.replace(/\./g,'-')}
			style={{
				backgroundColor: value
			}}>
			<div className="base-color-title" onClick={() => setVisible(!isVisible)}>
				{name}: {value}
			</div>
			{isVisible && <div className="base-color-popup">
				<label>Hue</label>
				<input
					type="range"
					step="0.1"
					min="0"
					max="360"
					className="hue"
					value={h}
					onChange={(e) => onChange([
						parseFloat(e.target.value),
						hsl[1],
						hsl[2]
					])} />
				<label>Saturation</label>
				<input
					type="range"
					step="0.01"
					min="0"
					max="1"
					style={{
						background: `linear-gradient(to right, hsl(${h},0%,${hsl[2]*100}%) 0%, hsl(${h},100%,${hsl[2]*100}%) 100%)`
					}}
					value={hsl[1]}
					onChange={(e) => onChange([
						hsl[0],
						parseFloat(e.target.value),
						hsl[2]
					])} />
				<label>Lightness</label>
				<input
					type="range"
					step="0.01"
					min="0"
					max="1"
					style={{
						background: `linear-gradient(to right, hsl(${h},${hsl[1]*100}%,10%) 0%, hsl(${h},${hsl[1]*100}%,50%) 50%, hsl(${h},${hsl[1]*100}%,90%) 100%)`
					}}
					value={hsl[2]}
					onChange={(e) => onChange([
						hsl[0],
						hsl[1],
						parseFloat(e.target.value)
					])} />
			</div>}
			
			
		</div>
	)
}

export default SwatchEditor
