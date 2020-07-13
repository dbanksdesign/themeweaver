import React from 'react';
import { findDOMNode } from 'react-dom';

function rgbaColor(r, g, b, a) {
	return `rgba(${[r, g, b, a / 100].join(',')})`;
}

export default class Alpha extends React.Component {
	componentWillUnmount() {
		this.removeListeners();
	}

	onMouseDown = e => {
		const x = e.clientX;
		const y = e.clientY;

		this.pointMoveTo({
			x,
			y,
		});

		// this.dragListener = window.addEventListener('mousemove', this.onDrag);
		// this.dragUpListener = window.addEventListener('mouseup', this.onDragEnd);
	};

	onDrag = e => {
		const x = e.clientX;
		const y = e.clientY;
		this.pointMoveTo({
			x,
			y,
		});
	};

	onDragEnd = e => {
		const x = e.clientX;
		const y = e.clientY;
		this.pointMoveTo({
			x,
			y,
		});
		this.removeListeners();
	};

	getBackground = () => {
		const { red, green, blue } = this.props.color;
		const opacityGradient = `linear-gradient(to right, ${rgbaColor(red, green, blue, 0)} , ${rgbaColor(red, green, blue, 100)})`; // eslint-disable-line max-len
		return opacityGradient;
	};

	getPrefixCls = () => {
		return `${this.props.rootPrefixCls}-alpha`;
	};

	pointMoveTo = coords => {
		const rect = findDOMNode(this).getBoundingClientRect();
		const width = rect.width;
		let left = coords.x - rect.left;

		left = Math.max(0, left);
		left = Math.min(left, width);

		const alpha = Math.round(left / width * 100);

		this.props.onChange(alpha);
	};

	removeListeners = () => {
		if (this.dragListener) {
			this.dragListener.remove();
			this.dragListener = null;
		}
		if (this.dragUpListener) {
			this.dragUpListener.remove();
			this.dragUpListener = null;
		}
	};

	render() {
		const prefixCls = this.getPrefixCls();
		return (
			<div className={prefixCls}>
				<div ref="bg" className={`${prefixCls}-bg`} style={{ background: this.getBackground() }} />
				<span className={`${prefixCls}-thumb`} style={{ left: `${this.props.alpha}%` }} />
				<div className={`${prefixCls}-handler`} onMouseDown={this.onMouseDown} />
			</div>
		);
	}
}
