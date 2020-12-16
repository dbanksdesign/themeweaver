import React from 'react';
import chroma from 'chroma-js';
import { Helmet } from 'react-helmet';

import baseTokens from '../tokens/base';
import TOC from '../components/TOC';
import ToggleButton from '../components/ToggleButton';
import BaseColorGroup from '../components/BaseColorGroup';
import {BaseToken} from '../components/Token';

const sections = [{
	title: `Grey`,
	name: 'grey',
	description: `Greys are used in the base backgrounds and font colors throughout the application and syntax styling.`,
	tokens: [{
		path: `base.grey.100`,
		description: ``
	},{
		path: `base.grey.90`,
		description: ``
	},{
		path: `base.grey.80`,
		description: ``
	},{
		path: `base.grey.60`,
		description: ``
	},{
		path: `base.grey.40`,
		description: ``
	},{
		path: `base.grey.20`,
		description: ``
	},{
		path: `base.grey.10`,
		description: ``
	},{
		path: `base.grey.5`,
		description: ``
	},{
		path: `base.grey.0`,
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
	{value: baseTokens[`base.grey.100`], path: `base.grey.100`},
	{value: baseTokens[`base.grey.90`], path: `base.grey.90`},
	{value: baseTokens[`base.grey.80`], path: `base.grey.80`},
	{value: baseTokens[`base.grey.60`], path: `base.grey.60`},
	{value: baseTokens[`base.grey.40`], path: `base.grey.40`},
	{value: baseTokens[`base.grey.20`], path: `base.grey.20`},
	{value: baseTokens[`base.grey.10`], path: `base.grey.10`},
	{value: baseTokens[`base.grey.5`], path: `base.grey.5`},
	{value: baseTokens[`base.grey.0`], path: `base.grey.0`},
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
	
	constructor(props) {
		super(props);
		this.pageRef = React.createRef();
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
	
	render() {
		const { updateToken, tokens } = this.props;
		const links = sections.map(section => {
			return {
				label: section.title,
				anchor: section.title.replace(' ','-')
			}
		});
		
		if (tokens['base.grey.100']) {
			return (
				<>
				<Helmet>
					<title>Base Tokens | Themeweaver</title>
				</Helmet>
				<TOC
					defaultVisibility={false}
					links={links.concat([{
						label: 'Brand',
						anchor: 'brand'
					}])} />
				<div className="page-content" id="page-content">
				<div className="page-content-inner flow">
					<h1>Base</h1>
					<p>Base tokens are what all other tokens reference. Think of this as your starting color palette. Pick primary, secondary, and tertiary brand colors (don't worry you can adjust the specific colors later). </p>
					
					{sections.map(section => (
						<section
							className="token-group"
							key={section.title}
							id={section.title.replace(' ','-')}>
							<BaseColorGroup
								title={section.title}
								h={this.state[`${section.name}Hue`]}
								s={this.state[`${section.name}Saturation`]}
								l={this.state[`${section.name}Lightness`]}
								name={section.name}
								HSL={chroma(tokens[`base.${section.name}.90`].value).hsl()}
								handleHue={this.handleHue}
								handleSaturation={this.handleSaturation}
								handleLightness={this.handleLightness}>
									<p>{section.description}</p>
							</BaseColorGroup>
							<div className="base-color-group">
								{section.tokens.map(({ path, description }) => {
									if (!tokens[path]) { console.log(path); }
									const {computedValue, reverseLookup} = tokens[path];
									return (
										<BaseToken key={path}
											path={path}
											reverseLookup={reverseLookup}
											value={computedValue}
											onChange={updateToken} />
									)
								})}
							</div>
						</section>
					))}
					
					<section id="brand" className="token-group flow">
						<h3>Brand Colors</h3>
						<p>These colors will be used in the application/UI/workbench styles. They are used in things like the activity bar and badges in VSCode.</p>
						
						<h4>Primary Color</h4>
						<ToggleButton
							className="color-toggle"
							onClick={({label}) => this.changeColor('primary', label)}
							buttons={colors.map(color => {
								return {
									label: color,
									selected: this.props.tokens['base.primary.10'].value.includes(color)
								}
							})} />
							
						<h4>Secondary Color</h4>
						<ToggleButton
							className="color-toggle"
							onClick={({label}) => this.changeColor('secondary', label)}
							buttons={colors.map(color => {
								return {
									label: color,
									selected: this.props.tokens['base.secondary.10'].value.includes(color)
								}
							})} />
						
						<label className="token-field-label">Tertiary Color</label>
						<ToggleButton
							className="color-toggle"
							onClick={({label}) => this.changeColor('tertiary', label)}
							buttons={colors.map(color => {
								return {
									label: color,
									selected: this.props.tokens['base.tertiary.10'].value.includes(color)
								}
							})} />
					</section>
				</div>
				</div>
			</>
			)
		} else {
			return (
				<>
					<Helmet>
						<title>Base Tokens | Themeweaver</title>
					</Helmet>
					<div className="page-content" id="page-content">
						<div className="page-content-inner flow">
							<p>Imported themes don't have base colors...</p>
						</div>
					</div>
				</>
			)
		}
	}
}

export default BasePage
