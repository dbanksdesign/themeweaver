import React from 'react';

const Checkbox = ({ checked, id, onChange, label}) => (
	<div className="checkbox">
		<input type="checkbox"
			className="checkbox-input"
			checked={checked}
			id={id}
			onChange={onChange} />
		<label className="checkbox-label" htmlFor={id}>{label}</label>
	</div>
);

const CheckboxGroup = ({children}) => (
	<div className="checkbox-group">
		{children}
	</div>
);

export {CheckboxGroup};
export default Checkbox;
