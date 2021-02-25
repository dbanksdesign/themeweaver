import React from 'react';
import { Helmet } from 'react-helmet';

import BaseColorGroup from '../components/BaseColorGroup';
import {BaseToken} from '../components/Token';
import { ColorRadioItem } from '../components/RadioGrid';

const colors = ['neutral','red','orange','yellow','lime','green','teal','blue','purple','pink'];

const tokenSort = (a,b) => {
	if (parseInt(a.path.replace(/[^0-9]/ig,'')) > parseInt(b.path.replace(/[^0-9]/ig,''))) {
		return -1;
	} else {
		return 1;
	}
}

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
		const sections = colors.map(color => {
			return {
				title: color.toLocaleUpperCase(),
				name: color,
				tokens: Object.keys(tokens)
					.filter(key => key.startsWith(`base.${color}`))
					.map(key => ({
						path: key
					}))
			}
		}).filter(section => section.tokens.length);

		return (
				<>
				<Helmet>
					<title>Base Tokens | Themeweaver</title>
				</Helmet>

				<div className="page-content" id="page-content">
				<div className="page-content-inner flow">
					<p>Base tokens are what all other tokens reference. Think of this as your starting color palette. Pick primary, secondary, and tertiary brand colors (don't worry you can adjust the specific colors later). </p>
					
					{tokens['base.primary.100'] ? <section id="brand" className="token-group flow">
						<h3>Brand Colors</h3>
						<p>These colors will be used in the application/UI/workbench styles. They are used in things like the activity bar and badges in VSCode. Don't worry, you can edit the actual colors below.</p>
						
						<h4>Primary Color</h4>
						<div className="tw-radio-grid color-radio">
							{colors.map(color => (
								<ColorRadioItem
									checked={this.props.tokens['base.primary.10'].value.includes(color)}
									name="primary"
									key={color}
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
									key={color}
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
									key={color}
									value={color}
									color={color}
									onChange={(e) => this.changeColor('tertiary', e.target.value)} />
							))}
						</div>
					</section>: null}
					
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
								handleHue={this.handleHue}
								handleSaturation={this.handleSaturation}
								handleLightness={this.handleLightness}>
									<p>{section.description}</p>
							</BaseColorGroup>
							<div className="base-color-group">
								{section.tokens
									.sort(tokenSort)
									.map(({ path, description }) => {
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
	}
}

export default BasePage
