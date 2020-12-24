import React from 'react';
import './RadioGrid.scss';

const RadioItem = ({checked, value, name, onChange}) => {
	const id = [name,value].join('-')
	return (
		<div className="tw-radio tw-radio-grid-item">
			<input className="tw-radio-input" id={id} type="radio" name={name} checked={checked} value={value} onChange={onChange} />
			<label htmlFor={id} className="tw-radio-label">
				{value}
			</label>
		</div>
	)
}

const RadioGrid = ({items, onChange, name}) => {
	return (
		<div className="tw-radio-grid">
			{items.map(item => <RadioItem key={item.value} {...item} onChange={onChange} />)}
		</div>
	)
};

export default RadioGrid;
