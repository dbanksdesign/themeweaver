import React from 'react';
import chroma from 'chroma-js';
import base from '../tokens/base';
import ColorInput from '../components/ColorInput';
import ToggleButton from '../components/ToggleButton';

// const h1 = `#302459`
// const hsl1 = chroma(h1).hsl();
// const h2 = chroma(hsl1, `hsl`).hex();
// const hsl2 = chroma(h2).hsl();
// console.log(h1, hsl1, h2, hsl2);

// const hsl3 = [27, 1.00, 0.86];
// const h3 = chroma(hsl3, `hsl`).hex();
// const hsl4 = chroma(h3).hsl();
// const h4 = chroma(hsl4, `hsl`).hex();
// console.log(hsl3, h3, hsl4, h4);

// const lightnesses = [0.86, 0.74, 0.52, 0.40];
// const hues = [0, 27, 54, 80, 140, 178, 200, 262, 335];
// const _hues = ['red','orange','yellow','lime','green','teal','blue','purple','pink'];
// const _ligthnesses = ['lighter','light','dark','darker'];

// const greyS = [1.00,0.06,0.07,0.06];
// const greyL = [0.99,0.97,0.92,0.90];

// const newGreys = chroma.scale([`#FEFDFF`,`#0C001F`]).colors(8);
// console.log(base);
// const newBase = {};
// const oldBase = [
// 	[base[`base.red.lighter`],base[`base.red.light`],base[`base.red.dark`],base[`base.red.darker`]],
// 	[base[`base.orange.lighter`],base[`base.orange.light`],base[`base.orange.dark`],base[`base.orange.darker`]],
// 	[base[`base.yellow.lighter`],base[`base.yellow.light`],base[`base.yellow.dark`],base[`base.yellow.darker`]],
// 	[base[`base.lime.lighter`],base[`base.lime.light`],base[`base.lime.dark`],base[`base.lime.darker`]],
// 	[base[`base.green.lighter`],base[`base.green.light`],base[`base.green.dark`],base[`base.green.darker`]],
// 	[base[`base.teal.lighter`],base[`base.teal.light`],base[`base.teal.dark`],base[`base.teal.darker`]],
// 	[base[`base.blue.lighter`],base[`base.blue.light`],base[`base.blue.dark`],base[`base.blue.darker`]],
// 	[base[`base.purple.lighter`],base[`base.purple.light`],base[`base.purple.dark`],base[`base.purple.darker`]],
// 	[base[`base.pink.lighter`],base[`base.pink.light`],base[`base.pink.dark`],base[`base.pink.darker`]],
// ];

// for (const key in base) {
// 	if (base.hasOwnProperty(key)) {
// 		const element = base[key];
// 		const [h,s,l] = chroma(element).hsl();
// 		newBase[key] = {h,s,l}
// 	}
// }
// const _base = {};
// hues.forEach((h,i) => {
// 	lightnesses.forEach((l,j) => {
// 		_base[`base.${_hues[i]}.${_ligthnesses[j]}`] = chroma(h, 1, l, 'hsl').hex();
// 	})
// });
// console.log(JSON.stringify(newBase, null, 2));

const color = chroma(`#ff9900`)
class AboutPage extends React.Component {
	state = {
		color: color.hsl(),
		view: `hsl`
	}
	
	handleChange = (color) => {
		console.log(color);
		this.setState({
			color
		});
	}
	
	changeView = () => {
		const newView = this.state.view === `hsl` ? `hex` : `hsl`;
		this.setState({
			view: newView,
			color: chroma(this.state.color, this.state.view)[newView]()
		});
	}
	
	render() {
		// const colorValue = chroma(this.state.color)[this.state.view]();
		return (
			<div className="page-content">
			<h1>About Themeweaver</h1>
			<ToggleButton
				onClick={this.changeView}
				buttons={[{
					label: 'HSL',
					selected: this.state.view === 'hsl'
				},{
					label: 'Hex',
					selected: this.state.view === 'hex'
				}]} />
			<ColorInput view={this.state.view} value={this.state.color} onChange={this.handleChange} />
			{/* {newGreys.map(color => (
				<div style={{
					width: '50px',
					height: '50px',
					display: 'inline-block',
					backgroundColor: color
				}} />
			))} */}
			{/* {hues.map(hue => (
				<div key={hue}>
					{lightnesses.map(l => (
						<div style={{
							width: '50px',
							height: '50px',
							display: 'inline-block',
							backgroundColor: `hsl(${hue},100%,${l*100}%)`
						}} />
					))}
				</div>
			))} */}
			
			{/* {oldBase.map((hue,i) => (
				<div key={i}>
					{hue.map(color => (
						<div style={{
							width: '50px',
							height: '50px',
							display: 'inline-block',
							backgroundColor: color
						}} />
					))}
				</div>
			))} */}
			
			{/* {Object.keys(newBase).map(key => (
				<div key={key}>
					<label>{key}</label>
					<div>h: {newBase[key].h.toFixed(2)} s: {newBase[key].s.toFixed(2)} l: {newBase[key].l.toFixed(2)}</div>
				</div>
			))} */}
			
			<h2>Credits</h2>
			<dl>
				<dt><a href="https://vis4.net/chromajs">chroma.js</a></dt>
				<dd>Used for color transformations</dd>
			</dl>
		</div>
		)
	}
}

export default AboutPage
