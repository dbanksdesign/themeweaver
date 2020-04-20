import React from 'react';
import chroma from 'chroma-js';
import ColorInput from '../components/ColorInput';
import ToggleButton from '../components/ToggleButton';
import ResizablePanels from '../components/ResizablePanel';

const color = chroma(`#ff9900`);

const colors = [
	"#646695",
	"#d7ba7d",
	"#9cdcfe",
	"#f44747",
	"#ce9178",
	"#6796e6",
	"#ce9178",
	"#808080",
	"#d16969",
	"#d4d4d4",
	"#1E1E1E",
	"#D4D4D4",
	"#3A3D41",
	"#404040",
	"#707070",
	"#ADD6FF26",
	"#383B3D",
	"#007ACC",
	
	"#E5EBF1",
	
	"#FFF",
	"#F3F3F3",
	"#E8E8E8",
	"#D4D4D4",
	"#D3D3D3",
	"#CECECE",
	"#CCCCCC",
	"#BBBBBB",
	"#A6A6A6",
	"#939393",
	"#767676",
	"#6F6F6F",
	"#292929",
	"#252526",
	"#000000ff",
	"#000000",
	
	"#811f3f",
	"#800000",
	"#ff0000",
	"#cd3131",
	"#a31515",
	
	"#098658",
	"#16825D",
	"#16825D",
	"#6A9955",
	"#b5cea8",
	
	"#0451a5",
	"#0000ff",
	"#000080",
	"#007ACC",
	"#ADD6FF80",
	"#000080",
	"#569cd6",
	
	"#000000",
]
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
		return (
			<div className="page-content">
				<ResizablePanels>
					<div>
            This is the first panel. It will use the rest of the available space.
          </div>
          <div>
            This is the second panel. Starts with 300px.
          </div>
          <div>
            This is the third panel. Starts with 300px.
          </div>
				</ResizablePanels>
				{colors.map(color => (
					<div style={{
						display: 'inline-block',
						width: '50px',
						height: '50px',
						backgroundColor: color
					}} />
				))}
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
