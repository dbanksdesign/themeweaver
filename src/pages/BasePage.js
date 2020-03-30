import React from 'react';
import chroma from 'chroma-js';
import { Helmet } from 'react-helmet';

import baseTokens from '../tokens/base';
import Token from '../components/Token';
import TokenGroup from '../components/TokenGroup';
import TOC from '../components/TOC';
import ToggleButton from '../components/ToggleButton';

const sections = [{
	title: `Grey`,
	name: 'grey',
	description: ``,
	tokens: [{
		path: `base.grey.5`,
		description: ``
	},{
		path: `base.grey.10`,
		description: ``
	},{
		path: `base.grey.20`,
		description: ``
	},{
		path: `base.grey.40`,
		description: ``
	},{
		path: `base.grey.60`,
		description: ``
	},{
		path: `base.grey.80`,
		description: ``
	},{
		path: `base.grey.90`,
		description: ``
	},{
		path: `base.grey.100`,
		description: ``
	}]
},{
	title: `Red`,
	name: 'red',
	description: ``,
	tokens: [{
		path: `base.red.100`,
		description: ``
	},{
		path: `base.red.90`,
		description: ``
	},{
		path: `base.red.20`,
		description: ``
	},{
		path: `base.red.10`,
		description: ``
	}]
},{
	title: `Orange`,
	name: 'orange',
	description: ``,
	tokens: [{
		path: `base.orange.100`,
		description: ``
	},{
		path: `base.orange.90`,
		description: ``
	},{
		path: `base.orange.20`,
		description: ``
	},{
		path: `base.orange.10`,
		description: ``
	}]
},{
	title: `Yellow`,
	name: 'yellow',
	description: ``,
	tokens: [{
		path: `base.yellow.100`,
		description: ``
	},{
		path: `base.yellow.90`,
		description: ``
	},{
		path: `base.yellow.20`,
		description: ``
	},{
		path: `base.yellow.10`,
		description: ``
	}]
},{
	title: `Lime`,
	name: 'lime',
	description: ``,
	tokens: [{
		path: `base.lime.100`,
		description: ``
	},{
		path: `base.lime.90`,
		description: ``
	},{
		path: `base.lime.20`,
		description: ``
	},{
		path: `base.lime.10`,
		description: ``
	}]
},{
	title: `Green`,
	name: 'green',
	description: ``,
	tokens: [{
		path: `base.green.100`,
		description: ``
	},{
		path: `base.green.90`,
		description: ``
	},{
		path: `base.green.20`,
		description: ``
	},{
		path: `base.green.10`,
		description: ``
	}]
},{
	title: `Teal`,
	name: 'teal',
	description: ``,
	tokens: [{
		path: `base.teal.100`,
		description: ``
	},{
		path: `base.teal.90`,
		description: ``
	},{
		path: `base.teal.20`,
		description: ``
	},{
		path: `base.teal.10`,
		description: ``
	}]
},{
	title: `Blue`,
	name: 'blue',
	description: ``,
	tokens: [{
		path: `base.blue.100`,
		description: ``
	},{
		path: `base.blue.90`,
		description: ``
	},{
		path: `base.blue.20`,
		description: ``
	},{
		path: `base.blue.10`,
		description: ``
	}]
},{
	title: `Purple`,
	name: 'purple',
	description: ``,
	tokens: [{
		path: `base.purple.100`,
		description: ``
	},{
		path: `base.purple.90`,
		description: ``
	},{
		path: `base.purple.20`,
		description: ``
	},{
		path: `base.purple.10`,
		description: ``
	}]
},{
	title: `Pink`,
	name: 'pink',
	description: ``,
	tokens: [{
		path: `base.pink.100`,
		description: ``
	},{
		path: `base.pink.90`,
		description: ``
	},{
		path: `base.pink.20`,
		description: ``
	},{
		path: `base.pink.10`,
		description: ``
	}]
}];

const colors = ['red','orange','yellow','lime','green','teal','blue','purple','pink'];

const GREY = [
	{value: baseTokens[`base.grey.5`], path: `base.grey.5`},
	{value: baseTokens[`base.grey.10`], path: `base.grey.10`},
	{value: baseTokens[`base.grey.20`], path: `base.grey.20`},
	{value: baseTokens[`base.grey.40`], path: `base.grey.40`},
	{value: baseTokens[`base.grey.60`], path: `base.grey.60`},
	{value: baseTokens[`base.grey.80`], path: `base.grey.80`},
	{value: baseTokens[`base.grey.90`], path: `base.grey.90`},
	{value: baseTokens[`base.grey.100`], path: `base.grey.100`},
];

const RED = [
	{value: baseTokens[`base.red.10`], path: `base.red.10`},
	{value: baseTokens[`base.red.20`], path: `base.red.20`},
	{value: baseTokens[`base.red.90`], path: `base.red.90`},
	{value: baseTokens[`base.red.100`], path: `base.red.100`},
];

const ORANGE = [
	{value: baseTokens[`base.orange.10`], path: `base.orange.10`},
	{value: baseTokens[`base.orange.20`], path: `base.orange.20`},
	{value: baseTokens[`base.orange.90`], path: `base.orange.90`},
	{value: baseTokens[`base.orange.100`], path: `base.orange.100`},
];

const YELLOW = [
	{value: baseTokens[`base.yellow.10`], path: `base.yellow.10`},
	{value: baseTokens[`base.yellow.20`], path: `base.yellow.20`},
	{value: baseTokens[`base.yellow.90`], path: `base.yellow.90`},
	{value: baseTokens[`base.yellow.100`], path: `base.yellow.100`},
];

const LIME = [
	{value: baseTokens[`base.lime.10`], path: `base.lime.10`},
	{value: baseTokens[`base.lime.20`], path: `base.lime.20`},
	{value: baseTokens[`base.lime.90`], path: `base.lime.90`},
	{value: baseTokens[`base.lime.100`], path: `base.lime.100`},
];

const GREEN = [
	{value: baseTokens[`base.green.10`], path: `base.green.10`},
	{value: baseTokens[`base.green.20`], path: `base.green.20`},
	{value: baseTokens[`base.green.90`], path: `base.green.90`},
	{value: baseTokens[`base.green.100`], path: `base.green.100`},
];

const TEAL = [
	{value: baseTokens[`base.teal.10`], path: `base.teal.10`},
	{value: baseTokens[`base.teal.20`], path: `base.teal.20`},
	{value: baseTokens[`base.teal.90`], path: `base.teal.90`},
	{value: baseTokens[`base.teal.100`], path: `base.teal.100`},
];

const BLUE = [
	{value: baseTokens[`base.blue.10`], path: `base.blue.10`},
	{value: baseTokens[`base.blue.20`], path: `base.blue.20`},
	{value: baseTokens[`base.blue.90`], path: `base.blue.90`},
	{value: baseTokens[`base.blue.100`], path: `base.blue.100`},
];

const PURPLE = [
	{value: baseTokens[`base.purple.10`], path: `base.purple.10`},
	{value: baseTokens[`base.purple.20`], path: `base.purple.20`},
	{value: baseTokens[`base.purple.90`], path: `base.purple.90`},
	{value: baseTokens[`base.purple.100`], path: `base.purple.100`},
];

const PINK = [
	{value: baseTokens[`base.pink.10`], path: `base.pink.10`},
	{value: baseTokens[`base.pink.20`], path: `base.pink.20`},
	{value: baseTokens[`base.pink.90`], path: `base.pink.90`},
	{value: baseTokens[`base.pink.100`], path: `base.pink.100`},
];

const ColorMixer = ({ h, s, l, name, handleHue, handleSaturation, handleLightness, HSL }) => {
	return (
		<section>
			<label className="color-mixer-label">Hue</label>
			<input
				type="range"
				className="hue"
				min="0" max="360"
				value={h}
				onChange={(e) => handleHue(e.target.value, name)}
				step="1"/>

			<div className="color-mixer-group">
				<div className="color-mixer">
					<label className="color-mixer-label">Lightness</label>
					<input
						type="range"
						style={{
							background: `linear-gradient(to right, hsl(${HSL[0]},${HSL[1]*100}%,10%) 0%, hsl(${HSL[0]},${HSL[1]*100}%,50%) 50%, hsl(${HSL[0]},${HSL[1]*100}%,90%) 100%)`
						}}
						min="-1" max="1"
						value={l}
						onChange={(e) => handleLightness(e.target.value, name)}
						step="0.01"/>
				</div>
				<div className="color-mixer">
					<label className="color-mixer-label">Saturation</label>
					<input
						type="range"
						className="saturation"
						style={{
							background: `linear-gradient(to right, hsl(${HSL[0]},0%,${HSL[2]*100}%) 0%, hsl(${HSL[0]},100%,${HSL[2]*100}%) 100%)`
						}}
						min="-2" max="2"
						value={s}
						onChange={(e) => handleSaturation(e.target.value, name)}
						step="0.1"/>
				</div>
			</div>
		</section>
	)
}
class BasePage extends React.Component {
	// Keep these arrays outside of state because when we update
	// saturation we need to saturate based on original color
	// or everything turns 100 or 0% saturated
	GREY = GREY
	RED = RED
	ORANGE = ORANGE
	YELLOW = YELLOW
	LIME = LIME
	GREEN = GREEN
	TEAL = TEAL
	BLUE = BLUE
	PURPLE = PURPLE
	PINK = PINK
	
	state = {
		primary: 'pink',
		secondary: 'teal',
		tertiary: 'purple',
		grey: this.GREY,
		greyHue: chroma(GREY[3].value).hsl()[0],
		greySaturation: 0,
		greyLightness: 0,
		red: this.RED,
		redHue: chroma(RED[3].value).hsl()[0],
		redSaturation: 0,
		redLightness: 0,
		orange: this.ORANGE,
		orangeHue: chroma(ORANGE[3].value).hsl()[0],
		orangeSaturation: 0,
		orangeLightness: 0,
		yellow: this.YELLOW,
		yellowHue: chroma(YELLOW[3].value).hsl()[0],
		yellowSaturation: 0,
		yellowLightness: 0,
		lime: this.LIME,
		limeHue: chroma(LIME[3].value).hsl()[0],
		limeSaturation: 0,
		limeLightness: 0,
		green: this.GREEN,
		greenHue: chroma(GREEN[3].value).hsl()[0],
		greenSaturation: 0,
		greenLightness: 0,
		teal: this.TEAL,
		tealHue: chroma(TEAL[3].value).hsl()[0],
		tealSaturation: 0,
		tealLightness: 0,
		blue: this.BLUE,
		blueHue: chroma(BLUE[3].value).hsl()[0],
		blueSaturation: 0,
		blueLightness: 0,
		purple: this.PURPLE,
		purpleHue: chroma(PURPLE[3].value).hsl()[0],
		purpleSaturation: 0,
		purpleLightness: 0,
		pink: this.PINK,
		pinkHue: chroma(PINK[3].value).hsl()[0],
		pinkSaturation: 0,
		pinkLightness: 0,
	}
	
	changeColor = (level, value) => {
		this.setState({
			[level]: value
		});
		this.props.updateTokens([
			{path: `base.${level}.10`, value: `{base.${value}.10}`},
			{path: `base.${level}.20`, value: `{base.${value}.20}`},
			{path: `base.${level}.90`, value: `{base.${value}.90}`},
			{path: `base.${level}.100`, value: `{base.${value}.100}`},
		]);
	}
	
	handleHue = (hue, name) => {
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
	
	resetColors = () => {
		this.PINK = PINK;
		this.setState({
			primary: 'pink',
			secondary: 'teal',
			tertiary: 'purple',
			grey: GREY,
			greyHue: chroma(GREY[3].value).hsl()[0],
			greySaturation: 0,
			greyLightness: 0,
			red: RED,
			redHue: chroma(RED[3].value).hsl()[0],
			redSaturation: 0,
			redLightness: 0,
			orange: ORANGE,
			orangeHue: chroma(ORANGE[3].value).hsl()[0],
			orangeSaturation: 0,
			orangeLightness: 0,
			yellow: YELLOW,
			yellowHue: chroma(YELLOW[3].value).hsl()[0],
			yellowSaturation: 0,
			yellowLightness: 0,
			lime: LIME,
			limeHue: chroma(LIME[3].value).hsl()[0],
			limeSaturation: 0,
			limeLightness: 0,
			green: GREEN,
			greenHue: chroma(GREEN[3].value).hsl()[0],
			greenSaturation: 0,
			greenLightness: 0,
			teal: TEAL,
			tealHue: chroma(TEAL[3].value).hsl()[0],
			tealSaturation: 0,
			tealLightness: 0,
			blue: BLUE,
			blueHue: chroma(BLUE[3].value).hsl()[0],
			blueSaturation: 0,
			blueLightness: 0,
			purple: PURPLE,
			purpleHue: chroma(PURPLE[3].value).hsl()[0],
			purpleSaturation: 0,
			purpleLightness: 0,
			pink: PINK,
			pinkHue: chroma(PINK[3].value).hsl()[0],
			pinkSaturation: 0,
			pinkLightness: 0,
		});
		this.props.resetState();
	}
	
	render() {
		const { updateToken, tokens, tokenNames, resetState } = this.props;
		const links = sections.map(section => {
			return {
				label: section.title,
				anchor: section.title.replace(' ','-')
			}
		});

		return (
			<div className="page-with-toc">
				<Helmet>
					<title>Base Tokens | Themeweaver</title>
				</Helmet>
				<TOC links={[{
					label: 'Brand',
					anchor: 'brand'
				}].concat(links)} />
				<div className="page-content">
					<h1>1. Base Tokens</h1>
					<p>Base tokens are what all other tokens reference. Think of this as your starting color palette. Pick primary, secondary, and tertiary brand colors (don't worry you can adjust the specific colors later). </p>
					
					<section id="brand" className="token-group">
					<h3>Brand Colors</h3>
					<p>These colors will be used in the application/UI/workbench styles. They are used in things like the activity bar and badges in VSCode.</p>
					
					<h4>Primary Color</h4>
					<ToggleButton
						className="color-toggle"
						onClick={(e) => this.changeColor('primary', e.target.innerHTML)}
						buttons={colors.map(color => {
							return {
								label: color,
								selected: this.state.primary === color
							}
						})} />
						
					<h4>Secondary Color</h4>
					<ToggleButton
						className="color-toggle secondary"
						onClick={(e) => this.changeColor('secondary', e.target.innerHTML)}
						buttons={colors.map(color => {
							return {
								label: color,
								selected: this.state.secondary === color
							}
						})} />
					
					<h4>Tertiary Color</h4>
					<ToggleButton
						className="color-toggle tertiary"
						onClick={(e) => this.changeColor('tertiary', e.target.innerHTML)}
						buttons={colors.map(color => {
							return {
								label: color,
								selected: this.state.tertiary === color
							}
						})} />
					</section>
					
					{sections.map(section => (
						<TokenGroup {...section}
							key={section.title}
							id={section.title.replace(' ','-')}>
							<ColorMixer 
								h={this.state[`${section.name}Hue`]}
								s={this.state[`${section.name}Saturation`]}
								l={this.state[`${section.name}Lightness`]}
								name={section.name}
								HSL={chroma(tokens[`base.${section.name}.90`].value).hsl()}
								handleHue={this.handleHue}
								handleSaturation={this.handleSaturation}
								handleLightness={this.handleLightness} />
							{section.tokens.map(({ path, description }) => {
								if (!tokens[path]) { console.log(path); }
								return (
									<Token {...tokens[path]}
										path={path}
										key={path}
										description={description}
										updateToken={updateToken}
										tokenNames={tokenNames} />
								)
							})}
						</TokenGroup>
					))}
					
					{/* <button className="wide"
						onClick={resetState}>Reset colors</button> */}
				</div>
			</div>
		)
	}
}

export default BasePage
