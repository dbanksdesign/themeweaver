import React from 'react';
import ComputedValue from './ComputedValue';
import Swatch from './Swatch';
import Autocomplete from './Autocomplete';
import './Token.css';

const ReverseLookup = ({ expanded, list=[], onClick }) => {
	if (list && list.length > 0) {
		return (
			<div className={`token-reverse-lookup ${expanded?'expanded':''}`} onClick={onClick}>
				<h5 className="token-reverse-lookup-title">
					This token is referenced by {list.length} others:
					<span className="codicon codicon-chevron-down" />
				</h5>
				{expanded && list.map(item => (
					<div key={item}>{item}</div>
				))}
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
		const { name, value, computedValue, updateToken, path, refs, reverseLookup, tokenNames, id, secondaryKey } = this.props;
		let autocomplete;
		
		if (value.indexOf('{') > -1) {
			autocomplete = tokenNames.filter(name => {
				return name.startsWith(value.replace(/\{|\}/gi,''))
			});
		}

		return (
			<div className="token-field-wrapper">
				<label className="token-field-label" htmlFor={id||path}>
					{name||path}
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
				{computedValue !== value && <ComputedValue refs={refs} />}
				<ReverseLookup
					expanded={this.state.reverseLookup}
					list={reverseLookup}
					onClick={this.toggleReverseLookup} />
			</div>
		)
	}
}

export default Token
