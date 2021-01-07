import React from 'react';
import chroma from 'chroma-js';
import { Helmet } from 'react-helmet';

import BaseColorGroup from '../components/BaseColorGroup';
import {BaseToken} from '../components/Token';
import { ColorRadioItem } from '../components/RadioGrid';

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
class BasePage extends React.Component {
	
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
		this.props.setHue({colorName: name, value: hue});
	}
	
	// TODO: Break this logic into a separate file maybe this class is very large
	// TODO: Store color values as HSL and only convert to Hex when needed. This will
	// get rid of weirdness when editing lightness/contrast for a color group
	handleLightness = (value, name) => {
		const newGroupLightness = (value/100);
		this.props.setLightness({colorName: name, value: newGroupLightness});
	}
	
	handleSaturation = (value, name) => {
		const newGroupSaturation = (value/100);
		this.props.setSaturation({colorName: name, value: newGroupSaturation});
	}
	
	render() {
		const { updateToken, tokens, colorSettings } = this.props;
		
		if (tokens['base.grey.100']) {
			return (
				<>
				<Helmet>
					<title>Base Tokens | Themeweaver</title>
				</Helmet>

				<div className="page-content" id="page-content">
				<div className="page-content-inner flow">
					<p>Base tokens are what all other tokens reference. Think of this as your starting color palette. Pick primary, secondary, and tertiary brand colors (don't worry you can adjust the specific colors later). </p>
					
					<section id="brand" className="token-group flow">
						<h3>Brand Colors</h3>
						<p>These colors will be used in the application/UI/workbench styles. They are used in things like the activity bar and badges in VSCode. Don't worry, you can edit the actual colors below.</p>
						
						<h4>Primary Color</h4>
						<div className="tw-radio-grid color-radio">
							{colors.map(color => (
								<ColorRadioItem
									checked={this.props.tokens['base.primary.10'].value.includes(color)}
									name="primary"
									value={color}
									color={color}
									onChange={(e) => this.changeColor('primary', e.target.value)} />
							))}
						</div>

						<h4>Secondary Color</h4>
						<div className="tw-radio-grid color-radio">
							{colors.map(color => (
								<ColorRadioItem
									checked={this.props.tokens['base.secondary.10'].value.includes(color)}
									name="secondary"
									value={color}
									color={color}
									onChange={(e) => this.changeColor('secondary', e.target.value)} />
							))}
						</div>
						
						<h4>Tertiary Color</h4>
						<div className="tw-radio-grid color-radio">
							{colors.map(color => (
								<ColorRadioItem
									checked={this.props.tokens['base.tertiary.10'].value.includes(color)}
									name="tertiary"
									value={color}
									color={color}
									onChange={(e) => this.changeColor('tertiary', e.target.value)} />
							))}
						</div>
					</section>
					
					<hr />
					
					{sections.map(section => (
						<section
							className="token-group"
							key={section.title}
							id={section.title.replace(' ','-')}>
							<BaseColorGroup
								title={section.title}
								h={colorSettings[section.name].hue}
								s={colorSettings[section.name].saturation}
								l={colorSettings[section.name].lightness}
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
									const {computedValue, reverseLookup, hsl} = tokens[path];
									return (
										<BaseToken key={path}
											path={path}
											hsl={hsl}
											reverseLookup={reverseLookup}
											value={computedValue}
											onChange={updateToken} />
									)
								})}
							</div>
						</section>
					))}
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
