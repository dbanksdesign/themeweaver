import React from 'react';

const HSLInput = ({ value, onChange }) => {
	const [h, s, l, a] = value;
	const hue = Math.round(h);
	const sat = Math.round(s*100);
	const light = Math.round(l*100);
	return (
		<div>
			<div className="color-mixer-group">
				<div className="color-mixer">
					<label className="color-mixer-label">Hue</label>
					<input type="number" value={hue} onChange={(e) => onChange([
						parseFloat(e.target.value),s,l,a,
					])} />
					<input
						type="range"
						className="hue"
						min="0" max="360"
						value={hue}
						onChange={(e) => onChange([
							e.target.value,s,l,a
						])}
						step="1"/>
				</div>
				<div className="color-mixer">
					<label className="color-mixer-label">Saturation</label>
					<input type="number" value={sat} onChange={(e) => onChange([
						h, parseFloat(e.target.value)/100, l, a,
					])} />
					<input
						id="monoSaturation"
						type="range"
						className="saturation"
						style={{
							background: `linear-gradient(to right, hsl(${hue},0%,${light}%) 0%, hsl(${hue},100%,${light}%) 100%)`
						}}
						min="0" max="100"
						value={sat}
						onChange={(e) => onChange([
							h, parseFloat(e.target.value)/100, l, a
						])}
						step="1"/>
				</div>
				<div className="color-mixer">
					<label className="color-mixer-label">Lightness</label>
					<input type="number" value={light} onChange={(e) => onChange([
						h, s, parseFloat(e.target.value)/100, a,
					])} />
					<input
						id="monoLightness"
						type="range"
						style={{
							background: `linear-gradient(to right, #000 0%, hsl(${hue},${sat}%,50%) 50%, #fff 100%)`
						}}
						min="0" max="100"
						value={light}
						onChange={(e) => onChange([
							h, s, parseFloat(e.target.value)/100, a
						])}
						step="1"/>
				</div>
			</div>
		</div>
	)
}

const HexInput = ({ value, onChange }) => {
	return (
		<div>
			<input type="string" value={value} onChange={e => onChange(e.target.value)} />
		</div>
	)
}

class ColorInput extends React.PureComponent {

	handleChange = (value) => {
		this.props.onChange( value );
	}
	
	render() {
		const { value, view } = this.props;
		let bg;
		if (view === `hsl`) {
			bg = `hsl(${value[0]},${value[1]*100}%,${value[2]*100}%)`
		} else {
			bg = value;
		}
		
		return (
			<div>
				{view === `hsl` && <HSLInput value={value} onChange={this.handleChange} />}
				{view === `hex` && <HexInput value={value} onChange={this.handleChange} />}
				{view === `rgb` && <HexInput value={value} onChange={this.handleChange} />}
				<div style={{
					width: '50px',
					height: '50px',
					display: 'inline-block',
					backgroundColor: bg
				}} />
			</div>
		)
	}
}

export default ColorInput
