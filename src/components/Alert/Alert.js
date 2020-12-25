import React from 'react';
import clsx from 'clsx';

const Alert = ({ children, variant="info" }) => {
	return (
	<section className={clsx(
		"tw-alert",
		// "info",
		variant ? variant : null
	)}>{children}</section>
)};

export default Alert;
