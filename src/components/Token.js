import React from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import clsx from 'clsx';
import Swatch from './Swatch';
import Autocomplete from './Autocomplete';
import ColorInput from './ColorInput';
import './Token.css';

const ComputedValue = ({ refs }) => {
	if (refs && refs.length) {
		return (
			<div className="token-references">
				{refs.map((ref,i) => {
					if (ref && ref.indexOf('{') > -1) {
						let name;
						ref.replace(/\{([^}]+)\}/g, (match, variable) => {
							name = match.replace(/{|}/g,'');;
						});
						const link = `/editor/${name.split('.')[0]}#${name.replace(/\./g,'-')}`
						return (
							<li className="token-reference" key={name}>
								<Link to={link}>{ref}</Link>
							</li>
						)
					} else {
						return (
							<li className="token-reference" key={ref}>
								{ref}
							</li>
						)
					}
				})}
			</div>
		)
	} else {
		return null;
	}
}

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
class Token extends React.PureComponent {
	state = {
		focused: false,
		reverseLookup: false,
		activeSuggestion: 0,
		filteredSuggestions: []
	}
	
	onFocus = () => {
		this.setState({
			focused: true
		})
	}
	
	onBlur = () => {
		// TODO: need a better way to dismiss autocomplete
		setTimeout(() => {
			this.setState({
				focused: false
			});
		}, 500);
	}
	
	autocompleteClick = (value) => {
		const { path, secondaryKey } = this.props;
		this.props.updateToken({
			path,
			secondaryKey,
			value: `{${value}}`
		});
	}
	
	toggleReverseLookup = () => {
		this.setState({
			reverseLookup: !this.state.reverseLookup
		})
	}
	
	onKeyDown = e => {
		const { activeSuggestion, filteredSuggestions } = this.state;
		
		if (e.keyCode === 13) {
			// enter key
			console.log('enter');
		} else if (e.keyCode === 38) {
			// up key
			console.log('up');
			if (activeSuggestion === 0) {
				return;
			}
			this.setState({ activeSuggestion: activeSuggestion - 1 });
		} else if (e.keyCode === 40) {
			// down key
			console.log('down');
			if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
			this.setState({ activeSuggestion: activeSuggestion + 1 });
		}
	}
	
	render() {
		const { name, value, computedValue, updateToken, path, refs, reverseLookup, tokenNames, id, secondaryKey, description, colorType, children } = this.props;
		let autocomplete;
		
		if (value && value.indexOf('{') > -1) {
			autocomplete = tokenNames.filter(name => {
				return name.startsWith(value.replace(/\{|\}/gi,''))
			});
		}
		
		if (colorType) {
			try {
				console.log(value, chroma(value)[colorType]());
			} catch (error) {
				
			}
		}
		
		const inputId = id || path;
		const sectionId = inputId.replace(/\./g,'-');

		return (
			<div className="token-field-wrapper" id={sectionId}>
				<div className="token-field-header">
					<label className="token-field-label" htmlFor={inputId}>
						{name||path}
					</label>
					<ReverseLookup list={reverseLookup} />
				</div>
				
				{description &&
					<div className="token-description">{description}</div>}
				
				
				{children}
				
				<div className="token-field">
					<input className="token-field-input"
						type="text"
						id={inputId}
						value={value}
						onChange={(e) => updateToken({path, secondaryKey, value: e.target.value})}
						onFocus={this.onFocus}
						onBlur={this.onBlur} />
					<div className="token-autocomplete">
						{autocomplete && this.state.focused && <Autocomplete
							suggestions={autocomplete}
							onClick={this.autocompleteClick}
							/>}
					</div>
					<Swatch value={computedValue || value} />
				</div>
				<ComputedValue refs={refs} />
			</div>
		)
	}
}

export default Token
