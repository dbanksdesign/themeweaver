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
	const { visible, refs, allTokens, computedValue, onChange, tokenNames, value } = props;

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
		console.log(computedValue);
		const alpha = computedValue ? chroma(computedValue).alpha() : 1;
		if (alpha < 1) {
			_value.value = value.substring(0, value.length - 2);
			_value.label = _value.value.replace(/{|}/g,'');
			console.log(_value);
		} else {
			_value.value = value;
			_value.label = value.replace(/{|}/g,'');
		}
		const alphaToHex = (newAlpha) => {
			console.log(value, alpha, newAlpha);
			
			if (newAlpha === 1) {
				return value;
			} else {
				if (alpha === 1) {
					return `${value}${parseInt((newAlpha * 255),10).toString(16).padStart(2,'0')}`;
				} else {
					return `${value.substring(0, value.length - 2)}${parseInt((newAlpha * 255),10).toString(16).padStart(2,'0')}`;
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
					options={tokenNames.map(label => ({label, value: `{${label}}`}))} />
				<input type="range" min="0" max="1" step="0.01" value={alpha} onChange={(e) => onChange({value: alphaToHex(e.target.value)})} />
			</div>
		)
	} else {
		return null;
	}
}

const TokenEditor = (props) => {
	const { visible, refs, allTokens, computedValue, onChange, tokenNames, value } = props;
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
		if (e) {
			const {label, value} = e;
			const { reverseLookup } = this.props;
			if (reverseLookup && reverseLookup.indexOf(label) > -1) {
				console.log('circular ref');
			} else {
				this.props.updateToken({
					path: this.props.path,
					value
				});
			}
		} else {
			console.log('nulled');
			this.props.updateToken({
				path: this.props.path,
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
		const { computedValue, path, reverseLookup, id, description } = this.props;
		const { expanded } = this.state;
		
		const sectionId = (id || path).replace(/\./g,'-');

		return (
			<div className={clsx(
				"new-token",
				expanded && "expanded"
				)}>
				<header className="new-token-header" onClick={this.toggleEditor} id={sectionId}>
					<div className="new-token-swatch-wrapper">
						<div className="new-token-swatch" style={{
							backgroundColor: computedValue
						}} />
					</div>
					<div className="new-token-content">
						<div className="new-token-label">{path}</div>
						<div className="new-token-description">{description}</div>
						{/* <span className="codicon codicon-chevron-down" /> */}
						<ReverseLookup list={reverseLookup} />
					</div>
				</header>
				<TokenEditor visible={expanded} {...this.props} onChange={this.handleChangeComplete} />
			</div>
		)
	}
}

export default NewToken
