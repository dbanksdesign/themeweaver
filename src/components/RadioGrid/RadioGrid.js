import React from 'react';
import clsx from 'clsx';
import './RadioGrid.scss';

const RadioItem = ({checked, value, name, onChange, className, hiddenLabel}) => {
	const id = [name,value].join('-');
	return (
		<div className={clsx("tw-radio", "tw-radio-grid-item", className)}>
			<input className="tw-radio-input" id={id} type="radio" name={name} checked={checked} value={value} onChange={onChange} />
			<label htmlFor={id} className="tw-radio-label">
				{hiddenLabel ? null : value}
			</label>
		</div>
	)
}

const ColorRadioItem = ({checked, value, name, onChange, color}) => {
	const id = [name,value].join('-');
	return (
		<div className={clsx("tw-radio", "tw-radio-grid-item", "tw-radio-color", color)}>
			<input className="tw-radio-input" id={id} type="radio" name={name} checked={checked} value={value} onChange={onChange} />
			<label htmlFor={id} className="tw-radio-label">
			</label>
		</div>
	)
}

const RadioGrid = ({items, onChange, className='', hiddenLabel=false}) => {
	return (
		<div className={clsx("tw-radio-grid", className)}>
			{items.map(item => <RadioItem key={item.value} {...item} onChange={onChange} hiddenLabel={hiddenLabel} />)}
		</div>
	)
};

export default RadioGrid;
export {ColorRadioItem};
