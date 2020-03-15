import React from 'react';
import Swatch from './Swatch';
import Autocomplete from './Autocomplete';
import './Token.css';

const ComputedValue = ({ refs }) => {
	if (refs && refs.length) {
		return (
			<div className="token-references">
				<span>Resolves to: </span>
				{refs.map((ref,i) => (
					<span className="token-reference" key={`${ref}${i}`}>{ref}</span>
				))}
			</div>
		)
	} else {
		return null;
	}
}

const ReverseLookup = ({ expanded, list=[], onClick }) => {
	if (list && list.length > 0) {
		return (
			<div className={`token-reverse-lookup ${expanded?'expanded':''}`} onClick={onClick}>
				<div className="token-reverse-lookup-title">
					This token is referenced by {list.length} others:
					<span className="codicon codicon-chevron-down" />
				</div>
				<ul className="token-reverse-lookup-list">
				{expanded && list.map(item => (
					<li key={item}>{item}</li>
				))}
				</ul>
			</div>
		)
	} else {
		return null;
	}
}
class Token extends React.Component {
	state = {
		focused: false,
		reverseLookup: false
	}
	
	// shouldComponentUpdate(nextProps, nextState) {
	// 	const { path, value, refs } = this.props;
	// 	// can't shallowly compare path because it is an array
	// 	return value !== nextProps.value ||
	// 		path !== nextProps.path ||
	// 		JSON.stringify(refs) !== JSON.stringify(nextProps.refs);
	// }
	
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
	
	render() {
		const { name, value, computedValue, updateToken, path, refs, reverseLookup, tokenNames, id, secondaryKey, description } = this.props;
		let autocomplete;
		
		if (value && value.indexOf('{') > -1) {
			autocomplete = tokenNames.filter(name => {
				return name.startsWith(value.replace(/\{|\}/gi,''))
			});
		}

		return (
			<div className="token-field-wrapper">
				<label className="token-field-label" htmlFor={id||path}>
					{name||path}
					<span className="token-description">{description}</span>
				</label>
				<div className="token-field">
					<input className="token-field-input"
						type="text"
						id={id||path}
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
				<ReverseLookup
					expanded={this.state.reverseLookup}
					list={reverseLookup}
					onClick={this.toggleReverseLookup} />
			</div>
		)
	}
}

export default Token
