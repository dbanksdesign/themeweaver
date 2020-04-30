import React, { useState } from 'react';
import { SketchPicker, ChromePicker } from 'react-color';
import CreatableSelect from 'react-select/creatable';
import chroma from 'chroma-js';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

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

const TokenEditor = (props) => {
	const { visible, refs, reverseLookup, computedValue, onChange, tokenNames, value } = props;

	const colorStyles = {
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			// console.log(styles, data, isDisabled, isFocused, isSelected);
			return {
				...styles,
				color: 'red'
			}
		}
	}
	
	if (visible) {
		return (
			<div className="tw-color-picker">
				<div>
				<CreatableSelect
					isClearable
					className="token-select"
					classNamePrefix="token-select"
					// styles={colorStyles}
					value={{value, label: value.replace(/{|}/g,'')}}
					onCreateOption={(value) => onChange({value})}
					onChange={onChange}
					onInputChange={(inputValue) => console.log(inputValue)}
					options={tokenNames.map(label => ({label, value: `{${label}}`}))} />
				</div>
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
		const { name, value, computedValue, tokenNames, path, refs, reverseLookup, id, description } = this.props;
		const { expanded } = this.state;
		// let isDark = false;
		// if (computedValue) {
		// 	isDark = chroma.contrast(computedValue, '#fff') > 5 &&
		// 		chroma(computedValue).alpha() > 0.5;
		// }
		
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
