import React from 'react'
import smoothScroll from '../helpers/smoothScroll'

class TOC extends React.Component {
	state = {
		index: 0,
	}
	
	componentDidMount() {
		this.offsets = this.props.links.map((link) => {
			if (document.getElementById(link.anchor)) {
				return document.getElementById(link.anchor).offsetTop;
			}
		});
		
		window.addEventListener('scroll', this.scroll);
	}
	
	componentWillUnmount() {
		window.removeEventListener('scroll', this.scroll);
	}
	
	scroll = (e) => {
		const bodyScroll = e.target.documentElement.scrollTop;
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
	
	render() {
		return (
			<nav className="toc">
				{this.props.links.map((link, i) => {
					let className = 'toc-link '
					className += i === this.state.index ? 'is-current' : '';
					return (
						<a key={link.label}
							className={className}
							href={`#${link.anchor}`}
							onClick={(e) => {
								smoothScroll.scrollTo(link.anchor);
								e.preventDefault();
								document.location.hash = `#${link.anchor}`;
							}}>
								{link.label}
						</a>
					)
				})}
			</nav>
		)
	}
}

export default TOC
