import React from 'react';
import chroma from 'chroma-js';
import ToggleButton from '../components/ToggleButton';
import baseTokens from '../tokens/base';

class HomePage extends React.Component {
	// Keep these arrays outside of state because when we update
	// saturation we need to saturate based on original color
	// or everything turns 100 or 0% saturated
	PRIMARY = [
		{value: baseTokens[`base.pink.lighter`], path: `base.pink.lighter`},
		{value: baseTokens[`base.pink.light`], path: `base.pink.light`},
		{value: baseTokens[`base.pink.dark`], path: `base.pink.dark`},
		{value: baseTokens[`base.pink.darker`], path: `base.pink.darker`},
	]
	
	SECONDARY = [
		{value: baseTokens[`base.teal.lighter`], path: `base.teal.lighter`},
		{value: baseTokens[`base.teal.light`], path: `base.teal.light`},
		{value: baseTokens[`base.teal.dark`], path: `base.teal.dark`},
		{value: baseTokens[`base.teal.darker`], path: `base.teal.darker`},
	]
	
	MONO = [
		{value: baseTokens[`base.grey.0`], path: `base.grey.0`},
		{value: baseTokens[`base.grey.5`], path: `base.grey.5`},
		{value: baseTokens[`base.grey.10`], path: `base.grey.10`},
		{value: baseTokens[`base.grey.20`], path: `base.grey.20`},
		{value: baseTokens[`base.grey.40`], path: `base.grey.40`},
		{value: baseTokens[`base.grey.60`], path: `base.grey.60`},
		{value: baseTokens[`base.grey.80`], path: `base.grey.80`},
		{value: baseTokens[`base.grey.90`], path: `base.grey.90`},
		{value: baseTokens[`base.grey.100`], path: `base.grey.100`},
	]
	
	state = {
		primary: this.PRIMARY,
		mono: this.MONO,
		secondary: this.SECONDARY,
		primaryHue: chroma(baseTokens[`base.pink.dark`]).hsl()[0],
		primarySaturation: 0,
		primaryLightness: 0,
		secondarySaturation: 0,
		secondaryLightness: 0,
		secondaryHue: chroma(baseTokens[`base.teal.dark`]).hsl()[0],
		monoSaturation: 0,
		monoLightness: 0,
		monoHue: chroma(baseTokens[`base.grey.60`]).hsl()[0]
	};
	
	_handleHue = (hue, name) => {
		const newColors = this.state[name].map(color => {
			return {
				...color,
				value: chroma(color.value).set(`hsl.h`, hue).hex()
			}
		});
		
		this[name.toUpperCase()] = newColors;
		
		this.setState({
			...this.state,
			[`${name}Hue`]: hue,
			[name]: newColors
		});
		
		this.props.updateTokens( newColors );
	}
	
	handleHue = (color, name) => {
		const hue = color.hsl.h;
		
		const newColors = this.state[name].map(color => {
			return {
				...color,
				value: chroma(color.value).set(`hsl.h`, hue).hex()
			}
		});
		
		this[name.toUpperCase()] = newColors;
		
		this.setState({
			[name]: newColors
		});
		
		this.props.updateTokens( newColors );
	}
	
	handleLightness = (value, name) => {
		const saturation = this.state[`${name}Saturation`];
		const newState = {
			[name]: this[name.toUpperCase()].map(color => {
				return {
					...color,
					value: chroma(color.value).brighten(value).saturate(saturation).hex()
				}
			})
		}
		this.setState({
			...this.state,
			[`${name}Lightness`]: value,
			...newState
		});
		
		this.props.updateTokens(
			newState[name]
		)
	}
	
	handleSaturation = (value, name) => {
		const lightness = this.state[`${name}Lightness`];
		const newState = {
			[name]: this[name.toUpperCase()].map(color => {
				return {
					...color,
					value: chroma(color.value).brighten(lightness).saturate(value).hex()
				}
			})
		}
		this.setState({
			...this.state,
			[`${name}Saturation`]: value,
			...newState
		});
		
		this.props.updateTokens(
			newState[name]
		)
	}
	
	render() {
		const { changeTheme, currentTheme } = this.props;
		
		const monoHsl = chroma(this.state.mono[4].value).hsl();
		const primaryHsl = chroma(this.PRIMARY[2].value).hsl();
		const secondaryHsl = chroma(this.SECONDARY[2].value).hsl();

		return (
			<div className="page-content">
				<p>Themeweaver is an application to create VS Code themes (and other IDE themes in the future...).</p>
				
				<p>NOTE: there might be some minor differences in the syntax highlighting as the editor VSCode uses (monaco) does not come with the same syntax highlighting grammers as VSCode does.</p>

				<ToggleButton
					onClick={changeTheme}
					buttons={[{
						label: 'Dark',
						selected: currentTheme === 'dark'
					},{
						label: 'Light',
						selected: currentTheme === 'light'
					}]} />

				<hr />
				<h3>Background</h3>
				<label className="color-mixer-label">Hue</label>
				<input
					id="monoHue"
					type="range"
					className="hue"
					min="0" max="360"
					value={this.state.monoHue}
					onChange={(e) => this._handleHue(e.target.value, 'mono')}
					step="0.1"/>

				<div className="color-mixer-group">
					<div className="color-mixer">
						<label className="color-mixer-label">Lightness</label>
						<input
							id="monoLightness"
							type="range"
							style={{
								background: `linear-gradient(to right, #000 0%, hsl(${monoHsl[0]},${monoHsl[1]*100}%,50%) 50%, #fff 100%)`
							}}
							min="-2" max="2"
							value={this.state.monoLightness}
							onChange={(e) => this.handleLightness(e.target.value, 'mono')}
							step="0.1"/>
					</div>
					<div className="color-mixer">
						<label className="color-mixer-label">Saturation</label>
						<input
							id="monoSaturation"
							type="range"
							className="saturation"
							style={{
								background: `linear-gradient(to right, hsl(${monoHsl[0]},0%,${monoHsl[2]*100}%) 0%, hsl(${monoHsl[0]},100%,${monoHsl[2]*100}%) 100%)`
							}}
							min="-2" max="2"
							value={this.state.monoSaturation}
							onChange={(e) => this.handleSaturation(e.target.value, 'mono')}
							step="0.1"/>
					</div>
				</div>

				<hr />
				<h3>Primary color</h3>
				<label className="color-mixer-label">Hue</label>
				<input
					id="primaryHue"
					type="range"
					className="hue"
					min="0" max="360"
					value={this.state.primaryHue}
					onChange={(e) => this._handleHue(e.target.value, 'primary')}
					step="0.1"/>
				<div className="color-mixer-group">
					<div className="color-mixer">
						<label className="color-mixer-label">Lightness</label>
						<input
							id="primaryLightness"
							type="range"
							style={{
								background: `linear-gradient(to right, #000 0%, hsl(${primaryHsl[0]},${primaryHsl[1]*100}%,50%) 50%, #fff 100%)`
							}}
							min="-2" max="2"
							value={this.state.primaryLightness}
							onChange={(e) => this.handleLightness(e.target.value, 'primary')}
							step="0.1"/>
					</div>
					<div className="color-mixer">
						<label className="color-mixer-label">Saturation</label>
						<input
							id="primarySaturation"
							type="range"
							style={{
								background: `linear-gradient(to right, hsl(${primaryHsl[0]},0%,${primaryHsl[2]*100}%) 0%, hsl(${primaryHsl[0]},100%,${primaryHsl[2]*100}%) 100%)`
							}}
							min="-2" max="2"
							value={this.state.primarySaturation} 
							onChange={(e) => this.handleSaturation(e.target.value, 'primary')}
							step="0.1"/>
					</div>
				</div>
				<hr />
				<h3>Secondary color</h3>
				<label className="color-mixer-label">Hue</label>
				<input
					id="secondaryHue"
					type="range"
					className="hue"
					min="0" max="360"
					value={this.state.secondaryHue}
					onChange={(e) => this._handleHue(e.target.value, 'secondary')}
					step="0.1"/>
				<div className="color-mixer-group">
					<div className="color-mixer">
						<label className="color-mixer-label">Lightness</label>
						<input
							id="secondaryLightness"
							type="range"
							style={{
								background: `linear-gradient(to right, #000 0%, hsl(${secondaryHsl[0]},${secondaryHsl[1]*100}%,50%) 50%, #fff 100%)`
							}}
							min="-2" max="2"
							value={this.state.secondaryLightness}
							onChange={(e) => this.handleLightness(e.target.value, 'secondary')}
							step="0.1"/>
					</div>
					<div className="color-mixer">
						<label className="color-mixer-label">Saturation</label>
						<input
							id="secondarySaturation"
							type="range"
							style={{
								background: `linear-gradient(to right, hsl(${secondaryHsl[0]},0%,${secondaryHsl[2]*100}%) 0%, hsl(${secondaryHsl[0]},100%,${secondaryHsl[2]*100}%) 100%)`
							}}
							min="-2" max="2"
							value={this.state.secondarySaturation}
							onChange={(e) => this.handleSaturation(e.target.value, 'secondary')}
							step="0.1"/>
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage
