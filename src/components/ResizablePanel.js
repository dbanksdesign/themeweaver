import React from 'react';
import ReactDOM from 'react-dom';

class ResizablePanels extends React.Component {
	eventHandler = null

	constructor () {
		super()
		
		this.state = {
			isDragging: false,
			mainWidth: 33.3,
			x: window.innerWidth / 3
		}
	}

	componentDidMount () {
		ReactDOM.findDOMNode(this).addEventListener('mousemove', this.resizePanel)
		ReactDOM.findDOMNode(this).addEventListener('mouseup', this.stopResize)
		ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.stopResize)
	}
	
	startResize = (event) => {
		this.setState({
			isDragging: true,
		})
	}
	
	stopResize = () => {
		if (this.state.isDragging) {
			const mainWidth = ((this.state.x/window.innerWidth) * 100).toFixed(2);
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
					className="resizer"></div>
				<div className="tw-panel">
					{this.props.children[1]}
				</div>
			</div>
		)
	}
}

export default ResizablePanels
