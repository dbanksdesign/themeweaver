import React, {useState} from 'react';

const BaseColorGroup = ({ h, s, l, name, handleHue, handleSaturation, handleLightness, HSL, title, children }) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<>
		<h3 className="tw-base-color-group-title">
			{title}
			<button className="small tw-base-color-group-button" onClick={() => setVisible(!isVisible)}>
				<span className="codicon codicon-settings" />
			</button>
		</h3>
		
		{children}
		
		{isVisible ? <>
			<label className="tw-base-color-mixer-label">Hue</label>
			<div className="tw-base-color-mixer">
				<input className="tw-input"
					type="number"
					min="0"
					max="360"
					value={parseInt(h, 10)}
					onChange={(e) => handleHue(e.target.value, name)} />
				<input
					type="range"
					className="color-range hue"
					min="0" max="360"
					value={h}
					onChange={(e) => handleHue(e.target.value, name)}
					step="1"/>
			</div>
			
			
			<label className="tw-base-color-mixer-label">Saturation</label>
			<div className="tw-base-color-mixer">
				<input className="tw-input"
					type="number"
					min="0"
					max="100"
					step="1"
					value={Math.round(s * 100)}
					onChange={(e) => handleSaturation(e.target.value, name)} />
				<input
					type="range"
					className="color-range saturation"
					style={{
						background: `linear-gradient(to right, hsl(${h},0%,50%) 0%, hsl(${h},100%,50%) 100%)`
					}}
					min="0"
					max="100"
					step="1"
					value={Math.round(s * 100)}
					onChange={(e) => handleSaturation(e.target.value, name)} />
			</div>
			
			<label className="tw-base-color-mixer-label">Lightness</label>
			<div className="tw-base-color-mixer">
				<input className="tw-input"
					type="number"
					min="0"
					max="100"
					step="1"
					value={Math.round(l * 100)}
					onChange={(e) => handleLightness(e.target.value, name)} />
				<input
					type="range"
					className="color-range"
					style={{
						background: `linear-gradient(to right, hsl(${h},50%,0%) 0%, hsl(${h},50%,100%) 100%)`
					}}
					min="0"
					max="100"
					value={Math.round(l * 100)}
					onChange={(e) => handleLightness(e.target.value, name)}
					step="1"/>
			</div>
				
			<p><em>These settings will apply to all colors in this group</em></p>
		</> : null}
		</>
	)
};

export default BaseColorGroup;
