import React, { useState } from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import clsx from 'clsx';

import ColorEditor from '../ColorEditor';
import ToggleButton from '../ToggleButton';
import ReverseLookup from './ReverseLookup';
import tokenToCSS from '../../helpers/tokenToCSS';

const regex = new RegExp(
	'\\{([^}]+)\\}', 'g'
);

const CustomTab = (props) => {
	const { visible, computedValue, onChange } = props;

	if (visible) {
		const alpha = computedValue ? chroma(computedValue).alpha() * 100 : 0;
		return (
			<ColorEditor
				className="tw-color-picker-panel"
				color={computedValue || '#ffffff'}
				mode="HSL"
				alpha={alpha}
				onChange={({alpha, color}) => {
					let value;
					if (alpha < 100) {
						value = color + parseInt((alpha/100 * 255),10).toString(16).padStart(2,'0')
					} else {
						value = color;
					}
					onChange({value});
				}} />
		)
	} else {
		return null;
	}
}

const TokenTab = (props) => {
	const { visible, allTokens, computedValue, onChange, value } = props;

	if (visible) {
		const theme = theme => ({
			...theme,
			borderRadius: 0,
			colors: {
				danger: 'var(--tw-color-danger)',
				dangerLight: 'var(--tw-color-danger)',
				primary: 'var(--tw-color-brand-primary-1)',
				primary25: 'var(--tw-color-outline)',
				primary50: 'var(--tw-color-outline)',
				primary75: 'var(--tw-color-outline)',
				neutral0: '#fff',
				neutral5: 'var(--tw-color-grey-5)',
				neutral10: 'var(--tw-color-grey-10)',
				neutral20: 'var(--tw-color-grey-20)',
				neutral30: 'var(--tw-color-grey-20)',
				neutral40: 'var(--tw-color-grey-40)',
				neutral50: 'var(--tw-color-grey-40)',
				neutral60: 'var(--tw-color-grey-60)',
				neutral70: 'var(--tw-color-grey-60)',
				neutral80: 'var(--tw-color-grey-90)',
				neutral90: 'var(--tw-color-grey-100)',
			}
		});
		const colorStyles = {
			option: (styles, { data, isDisabled, isFocused, isSelected }) => {
				let borderColor = 'transparent'
				if (allTokens[data.label]) {
					borderColor = allTokens[data.label].computedValue
				}
				return {
					...styles,
					borderLeft: `20px solid ${borderColor}`
				};
			}
		}
		const _value = {}
		const alpha = computedValue ? chroma(computedValue).alpha() : 1;
		const opaqueComputedValue = chroma(computedValue).alpha(1);
		
		// kinda jank logic, need to clean up
		if (value && value.indexOf('{') > -1) {
			value.replace(regex, function(match, variable) {
				_value.value = variable;
				_value.label = variable;
			});
		} else {
			_value.value = value;
			_value.label = _value.value.replace(/{|}/g,'');
		}
		
		
		const alphaToHex = (newAlpha) => {
			// if there is any transparency
			if (newAlpha < 1) {
				if (alpha < 1) {
					// if we started with some transparency, cut it off and add new transparency
					return `${value.substring(0, value.length - 2)}${parseInt((newAlpha * 255),10).toString(16).padStart(2,'0')}`;
				} else {
					// we started without any transparency, no need to cut it off
					return `${value}${parseInt((newAlpha * 255),10).toString(16).padStart(2,'0')}`;
				}
			} else {
				if (alpha < 1) {
					// chop off the alpha channel
					return value.substring(0, value.length - 2);
				} else {
					// alpha and newAlpha are 1, leave value as-is
					return value;
				}
			}
		}

		return (
			<div>
				<Select
					isClearable
					className="token-select"
					classNamePrefix="token-select"
					styles={colorStyles}
					theme={theme}
					value={_value}
					onCreateOption={(value) => onChange({value})}
					onChange={onChange}
					options={Object.keys(allTokens).map(label => ({label, value: `{${label}}`}))} />
				<div className="token-alpha">
					<label className="token-alpha-label">Alpha</label>
					<div className="token-alpha-input">
						<input type="range"
							min="0"
							max="1"
							step="0.01"
							value={alpha}
							style={{
								background: `linear-gradient(to right, transparent 0%, ${opaqueComputedValue} 100%), url("data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==")`
							}}
							onChange={(e) => onChange({value: alphaToHex(e.target.value)})} />
					</div>
				</div>
			</div>
		)
	} else {
		return null;
	}
}

const TokenEditor = (props) => {
	const { visible, reverseLookup, value, onChange } = props;
	const defaultIndex = value && value.indexOf('#') < 0 ? 0 : 1;
	const [tabIndex, setTabIndex] = useState(defaultIndex);

	const onClick = ({index}) => {
		if (index === 2) {
			// null out the token
			onChange();
		}
		setTabIndex(index);
	}
	
	if (visible) {
		return (
			<div className="tw-color-picker">
				<ToggleButton
					className="tw-color-picker-tabs"
					onClick={onClick}
					buttons={[{
						label: 'Token',
						selected: tabIndex === 0
					},{
						label: 'Custom',
						selected: tabIndex === 1
					},{
						label: 'None',
						selected: tabIndex === 2
					}]} />
				<div>
					<TokenTab {...props} visible={tabIndex === 0} />
					<CustomTab {...props} visible={tabIndex === 1} />
					<ReverseLookup list={reverseLookup} />
				</div>
			</div>
		)
	} else {
		return null;
	}
}

class Token extends React.Component {
	state = {
		expanded: false
	}
	
	handleChangeComplete = (e) => {
		const { reverseLookup, path, secondaryKey } = this.props;
		if (e) {
			const {label, value} = e;
			if (reverseLookup && reverseLookup.indexOf(label) > -1) {
				console.log('circular ref');
			} else {
				this.props.updateToken({
					path,
					secondaryKey,
					value
				});
			}
		} else {
			console.log('nulled');
			this.props.updateToken({
				path,
				secondaryKey,
				value: ''
			});
		}

	}
	
	toggleEditor = () => {
		this.setState({
			expanded: !this.state.expanded
		});
	}
	
	// TODO: clean up this logic?
	highlightVar = () => {
		const { path, reverseLookup, computedValue } = this.props;
		document.getElementById('app').style.setProperty(
			`--${path.replace(/\./g,'-')}`,
			`var(--tw-color-brand-primary-1)`
		);
		if (reverseLookup && reverseLookup.length && computedValue && computedValue.length > 7) {
			reverseLookup.forEach(name => {
				const varName = `--${name.replace(/\./g,'-')}`;
				if (!this[name]) {
					this[name] = document.getElementById('app').style.getPropertyValue(varName);
				}
				document.getElementById('app').style.setProperty(
					varName,
					`var(--tw-color-brand-primary-1)`
				);
			})
		}
	}
	
	unHighlight = () => {
		const { path, reverseLookup, computedValue } = this.props;
		document.getElementById('app').style.setProperty(
			`--${path.replace(/\./g,'-')}`,
			tokenToCSS(this.props)
		);
		
		if (reverseLookup && reverseLookup.length && computedValue && computedValue.length > 7) {
			reverseLookup.forEach(name => {
				const varName = `--${name.replace(/\./g,'-')}`;
				document.getElementById('app').style.setProperty(
					varName,
					this[name]
				);
			})
		}
	}
	
	render() {
		const { computedValue, path, id, description, children, reverseLookup } = this.props;
		const { expanded } = this.state;
		const sectionId = (id || path).replace(/\./g,'-');

		return (
			<div id={sectionId} className={clsx(
				"token",
				expanded && "expanded"
				)}>
				<header className="token-header" onClick={this.toggleEditor}
					onMouseOut={this.unHighlight}
					onMouseOver={this.highlightVar}>
					<div className="token-swatch-wrapper">
						<div className={clsx(
							"token-swatch",
							!computedValue && "empty"
						)} style={{
							backgroundColor: computedValue
						}} />
						
					</div>
					<div className="token-content">
						<div className="token-label">{path}</div>
						<div className="token-description">{description}</div>
						{reverseLookup ? <div className="token-description">{reverseLookup.length} references</div> : null}
					</div>
					<span className="codicon codicon-chevron-down" />
				</header>
				<TokenEditor visible={expanded} {...this.props} onChange={this.handleChangeComplete} />
				{children}
			</div>
		)
	}
}

export default Token
