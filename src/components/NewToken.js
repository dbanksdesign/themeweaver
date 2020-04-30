import React, { useState } from 'react';
import { SketchPicker, ChromePicker } from 'react-color';
import CreatableSelect from 'react-select/creatable';
import chroma from 'chroma-js';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import ToggleButton from './ToggleButton';

const lookupToLink = (ref) => {
	return `/editor/${ref.split('.')[0]}#${ref.replace(/\./g,'-')}`
}

const ReverseLookup = ({ shown, list=[], x, y, onClick }) => {
	if (list && list.length > 0) {
		return (
			<span className="token-reverse-lookup">
				<span className="token-reverse-lookup-title" onClick={onClick}>
					<span className="codicon codicon-references" />
					{list.length}
				</span>
				<span className="token-reverse-lookup-list">
					<h6>This token is referenced by:</h6>
					<ul className="">
					{list.map(item => (
						<li key={item}>
							<Link to={lookupToLink(item)}>
								{item}
							</Link>
						</li>
					))}
					</ul>
				</span>
			</span>
		)
	} else {
		return null;
	}
}

const CustomTab = (props) => {
	const { visible, computedValue, onChange } = props;

	if (visible) {
		return (
			<ChromePicker
				color={computedValue || '#ffffff00'}
				onChangeComplete={(e) => {
					const alpha = e.hsl.a;
					let val;
					if (alpha < 1) {
						val = e.hex + parseInt((e.hsl.a * 255),10).toString(16).padStart(2,'0')
					} else {
						val = e.hex;
					}
					onChange({value: val});
				}} />
		)
	} else {
		return null;
	}
}

const TokenTab = (props) => {
	const { visible, allTokens, computedValue, onChange, value } = props;

	if (visible) {
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
		
		// kinda jank logic, need to clean up
		if (alpha < 1) {
			_value.value = value.substring(0, value.length - 2);
			_value.label = _value.value.replace(/{|}/g,'');
		} else {
			_value.value = value;
			_value.label = value.replace(/{|}/g,'');
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
				<CreatableSelect
					isClearable
					className="token-select"
					classNamePrefix="token-select"
					styles={colorStyles}
					value={_value}
					defaultInputValue={_value.label}
					onCreateOption={(value) => onChange({value})}
					// onInputChange={value => onChange({value})}
					onChange={onChange}
					options={Object.keys(allTokens).map(label => ({label, value: `{${label}}`}))} />
				<div className="new-token-alpha">
					<label className="new-token-alpha-label">Alpha</label>
					<div className="new-token-alpha-input">
						<span className="new-token-alpha-val" style={{left: `${alpha * 100}%`}}>{alpha}</span>
						<input type="range"
							min="0"
							max="1"
							step="0.01"
							value={alpha}
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
	const { visible } = props;
	const [tabIndex, setTabIndex] = useState(0);

	if (visible) {
		return (
			<div className="tw-color-picker">
				<ToggleButton
					className="tw-color-picker-tabs"
					onClick={({index}) => setTabIndex(index)}
					buttons={[{
						label: 'Token',
						selected: tabIndex === 0
					},{
						label: 'Custom',
						selected: tabIndex === 1
					}]} />
				<div>
					<TokenTab {...props} visible={tabIndex === 0} />
					<CustomTab  {...props} visible={tabIndex === 1} />
				</div>
			</div>
		)
	} else {
		return null;
	}
}

class NewToken extends React.Component {
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
	
	render() {
		const { computedValue, path, id, description, children } = this.props;
		const { expanded } = this.state;
		
		const sectionId = (id || path).replace(/\./g,'-');

		return (
			<div className={clsx(
				"new-token",
				expanded && "expanded"
				)}>
				<header className="new-token-header" onClick={this.toggleEditor} id={sectionId}>
					<div className="new-token-swatch-wrapper">
						<div className={clsx(
							"new-token-swatch",
							!computedValue && "empty"
						)} style={{
							backgroundColor: computedValue
						}} />
					</div>
					<div className="new-token-content">
						<div className="new-token-label">{path}</div>
						<div className="new-token-description">{description}</div>
						{/* <ReverseLookup list={reverseLookup} /> */}
					</div>
					{/* <span className="codicon codicon-chevron-down" /> */}
				</header>
				<TokenEditor visible={expanded} {...this.props} onChange={this.handleChangeComplete} />
				{children}
			</div>
		)
	}
}

export default NewToken
