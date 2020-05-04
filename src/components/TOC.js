import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

class TOC extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			shown: !!props.defaultVisibility
		}
	}
	
	componentDidMount() {
		this.offsets = this.props.links.map((link) => {
			if (document.getElementById(link.anchor)) {
				return document.getElementById(link.anchor).offsetTop;
			} else {
				return null;
			}
		});
		
		document.getElementById('page-content')
			.addEventListener('scroll', this.scroll);
	}
	
	componentWillUnmount() {
		document.getElementById('page-content')
			.removeEventListener('scroll', this.scroll);
	}
	
	scroll = (e) => {
		const bodyScroll = document.getElementById('page-content').scrollTop;
		let index = 0;
		
		while (index <= this.offsets.length - 2) {
			if (bodyScroll < this.offsets[index+1] - 100) {
				break;
			}
			index++;
		}
		
		// Don't cause unnecessary re-renders
		if (this.state.index !== index) {
			this.setState({ index });
		}
	}
	
	toggle = () => {
		if (this.props.onClick) {
			this.props.onClick();
		} else {
			this.setState({
				shown: !this.state.shown
			});
		}
	}
	
	render() {
		const shown = typeof this.props.shown !== 'undefined' ? this.props.shown : this.state.shown;
		
		return (
			<nav className={clsx(
				"toc",
				!shown && "hidden"
			)}>
				<button className="toc-toggle" onClick={this.toggle}>
					<span className={`codicon codicon-chevron-left`} />
				</button>
				<div className="toc-inner">
				{this.props.links.map((link, i) => (
					<Link key={link.label}
						to={`#${link.anchor}`}
						className={clsx(
							'toc-link',
							i === this.state.index && 'is-current'
						)}>
						{link.label}
					</Link>
				))}
				</div>
			</nav>
		)
	}
}

export default TOC
