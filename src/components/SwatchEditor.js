import React, { useState } from 'react';
import chroma from 'chroma-js';
import clsx from 'clsx';

import ReverseLookup from './ReverseLookup';
import ColorEditor from './ColorEditor';

const SwatchEditorPicker = (props) => {
	const { visible, value, onChange, reverseLookup } = props;
	
	if (visible) {
		return (
			<>
				<ColorEditor
					className="tw-color-picker-panel"
					color={value || '#ffffff'}
					mode="HSL"
					onChange={({alpha, color}) => {
						let value;
						if (alpha < 100) {
							value = color + parseInt((alpha/100 * 255),10).toString(16).padStart(2,'0')
						} else {
							value = color;
						}
						onChange(value);
					}} />
				<ReverseLookup list={reverseLookup} />
			</>
		)
	} else {
		return null;
	}
}

const SwatchEditor = (props) => {
	const { path, value, reverseLookup } = props;
	const name = path.split('.').slice(-1);
	
	const [isVisible, setVisible] = useState(false)
	
	// TODO: on super dark or super light colors changing the hue
	// doesn't have good granularity because it is a controlled component
	// it looks like the input skips values
	const onChange = (value) => {
		props.onChange({
			path,
			value
		});
	}
	
	const isDark = chroma.contrast(value, '#000') <= 7;
	
	return (
		<div className={clsx("base-color", isVisible && "expanded", isDark && "dark")}
			id={path.replace(/\./g,'-')}
			style={{
				backgroundColor: value
			}}>
			<div className="base-color-title" onClick={() => setVisible(!isVisible)}>
				<strong>{name}</strong> {value}
			</div>
			<span className="codicon codicon-chevron-down base-color-chevron" />
			<SwatchEditorPicker visible={isVisible} onChange={onChange} value={value} reverseLookup={reverseLookup} />
			{reverseLookup && <span className="token-badge">{reverseLookup.length}</span>}
		</div>
	)
}

export default SwatchEditor
