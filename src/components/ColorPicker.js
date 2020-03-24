import React, {useState} from 'react'

import { CustomPicker } from 'react-color'
import { EditableInput, Hue, Saturation } from 'react-color/lib/components/common'

const HSLInput = ({ h, s, l, onChange }) => {
	return (
		<div>
			<input type="number" value={h} onChange={(e) => onChange({val: e.target.value, type:`h`})} />
			<input type="number" value={s} onChange={(e) => onChange({val: e.target.value, type:`s`})} />
			<input type="number" value={l} onChange={(e) => onChange({val: e.target.value, type:`l`})} />
		</div>
	)
}

const HexInput = ({ hex, onChange }) => {
	return (
		<div>
			<input type="string" value={hex} onChange={onChange} />
		</div>
	)
}

export const MyPicker = (props) => {
	const { hex, hsl, onChange } = props;
	const [view,setView] = useState(`hsl`);
	
  return (
    <div>
      <div style={ styles.hue }>
        <Hue hsl={ hsl } onChange={ onChange } />
      </div>
			{view === `hsl` && <div style={{ display: 'flex' }}>
				<EditableInput
					style={{ input: styles.input }}
					value={ hex }
					onChange={ onChange }
				/>
				<div style={ styles.swatch } />
			</div>}
			{view === `hex` && <div style={{ display: 'flex' }}>
				<EditableInput
					style={{ input: styles.input }}
					value={ hex }
					onChange={ onChange }
				/>
				<div style={ styles.swatch } />
			</div>}

    </div>
  )
}

export default CustomPicker(MyPicker)
