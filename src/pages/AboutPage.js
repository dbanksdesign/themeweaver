import React from 'react';
import chroma from 'chroma-js';
import oneDarkPro from '../tokens/one-dark-pro/application';

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

const tokens = {};

Object.keys(oneDarkPro.colors).forEach(key => {
	const value = oneDarkPro.colors[key];

	if (!tokens[value]) {
		tokens[value] = [key];
	} else {
		tokens[value].push(key);
	}
});

class AboutPage extends React.Component {
	
	render() {
		return (
			<div className="page-content">
				{Object.keys(tokens).map(key => (
					<div>
						<div style={{
							display: 'inline-block',
							width: '50px',
							height: '50px',
							backgroundColor: key
						}} />
						<div>{key}</div>
						{tokens[key].map(ref => (
							<div>{ref}</div>
						))}
					</div>
				))}
		</div>
		)
	}
}

export default AboutPage
