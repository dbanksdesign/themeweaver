import React from 'react';
import clsx from 'clsx';
import './Toast.scss';

const Toast = ({ type='info', children }) => {
	return (
		<div className="toast-wrapper">
			<div className={clsx(
				"toast",
				type
			)}>
				{children}
			</div>
		</div>
	)
}

export default Toast;
