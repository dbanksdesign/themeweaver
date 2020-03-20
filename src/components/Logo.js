import React from 'react';
import './Logo.css';

const Logo = () => (
	<span className="tw-logo">
		<span className="tw-logo-icon">Tw</span>
		<span className="tw-logo-text">Themeweaver</span>
	</span>
)

const NewLogo = () => (
	<svg className="tw-logo-svg" viewBox="0 0 228 228" version="1.1" aria-hidden="true">
		<g id="Group" transform="translate(114.000000, 114.000000) rotate(45.000000) translate(-114.000000, -114.000000) translate(14.000000, 14.000000)">
			<rect className="hatch-1" fill="#EF5350" x="0" y="90" width="200" height="20" rx="10"></rect>
			<rect className="hatch-2" fill="#D8D8D8" transform="translate(155.000000, 100.000000) rotate(90.000000) translate(-155.000000, -100.000000) " x="55" y="90" width="200" height="20" rx="10"></rect>
			<rect className="hatch-2" fill="#D8D8D8" transform="translate(45.000000, 100.000000) rotate(90.000000) translate(-45.000000, -100.000000) " x="-55" y="90" width="200" height="20" rx="10"></rect>
			<rect className="hatch-1" fill="#EF5350" x="0" y="35" width="200" height="20" rx="10"></rect>
			<rect className="hatch-1" fill="#EF5350" x="0" y="145" width="200" height="20" rx="10"></rect>
			<rect className="hatch-2" fill="#D8D8D8" transform="translate(100.000000, 100.000000) rotate(90.000000) translate(-100.000000, -100.000000) " x="0" y="90" width="200" height="20" rx="10"></rect>
			<rect className="hatch-1" fill="#EF5350" x="65" y="90" width="76" height="20" rx="10"></rect>
		</g>
	</svg>
)

export {NewLogo}

export default Logo
