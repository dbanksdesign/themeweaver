import React from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash/debounce';

class ResizablePanels extends React.Component {
	eventHandler = null

	constructor () {
		super()
		
		this.state = {
			isDragging: false,
			mainWidth: 40,
			windowWidth: window.innerWidth,
			x: window.innerWidth * 0.4
		}
	}

	componentDidMount () {
		ReactDOM.findDOMNode(this).addEventListener('mousemove', this.resizePanel);
		ReactDOM.findDOMNode(this).addEventListener('mouseup', this.stopResize);
		ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.stopResize);
		window.addEventListener('resize', debounce(this.resized, 500));
	}
	
	resized = (event) => {
		this.setState({
			windowWidth: event.target.innerWidth,
			x: event.target.innerWidth * (this.state.mainWidth / 100)
		});
	}
	
	startResize = (event) => {
		this.setState({
			isDragging: true,
		})
	}
	
	stopResize = () => {
		if (this.state.isDragging) {
			const mainWidth = ((this.state.x/this.state.windowWidth) * 100).toFixed(2);
			this.setState({
				isDragging: false,
				mainWidth
			});
			if (this.props.onResize) {
				this.props.onResize(mainWidth)
			}
		}
	}
	
	resizePanel = (event) => {
		if (this.state.isDragging) {
			this.setState({
				x: event.clientX
			})
		}
	}
	
	render() {
		const { windowWidth, mainWidth } = this.state;
		return (
			<div className="tw-panel-container" onMouseUp={() => this.stopResize()}>
				<div className="tw-panel" style={{
					width: `${this.state.mainWidth}%`
				}}>
					{this.props.children[0]}
				</div>
				<div onMouseDown={(e) => this.startResize(e)}
					style={{
						left: `${this.state.x}px`
					}}
					className="tw-resizer"></div>
				<div className="tw-panel">
					{/* Clean up this jank logic, monaco editor needs to be re-rendered
					when window resizes */}
					{this.props.children[1]({
						windowWidth,
						mainWidth
					})}
				</div>
			</div>
		)
	}
}

export default ResizablePanels
