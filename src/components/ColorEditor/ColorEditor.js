import React from 'react';

import Color from './helpers/color';
import Board from './Board';
import Preview from './Preview';
import Params from './Params';

export default class Panel extends React.Component {
	onSystemColorPickerOpen = e => {
		// only work with browser which support color input
		if (e.target.type === 'color') {
			this.systemColorPickerOpen = true;
		}
	};

	onFocus = () => {
		if (this._blurTimer) {
			clearTimeout(this._blurTimer);
			this._blurTimer = null;
		} else {
			this.props.onFocus();
		}
	};

	onBlur = () => {
		if (this._blurTimer) {
			clearTimeout(this._blurTimer);
		}
		this._blurTimer = setTimeout(() => {
			// if is system color picker open, then stop run blur
			if (this.systemColorPickerOpen) {
				this.systemColorPickerOpen = false;
				return;
			}

			this.props.onBlur();
		}, 100);
	};

	handleAlphaChange = alpha => {
		const originalColor = new Color(this.props.color);
		console.log(alpha);
		this.props.onChange({
			color: originalColor.hex, // don't change actual color
			alpha,
		});
	};

	handleHue = (e) => {
		const color = new Color(this.props.color);
		color.hue = e.target.value;
		this.handleChange(color);
	}
	
	handleChange = (color) => {
		const originalColor = new Color(this.props.color)
		if (color.toHexString() !== originalColor.toHexString()) {
			this.props.onChange({
				color: color.toHexString(),
				alpha: originalColor.alpha, // alpha change happens elsewhere
			});
		}
		
	};

	render() {
		const { prefixCls, enableAlpha } = this.props;
		const color = new Color(this.props.color);
		const alpha = color.alpha;

		return (
			<div
				ref={(ref) => this.ref = ref}
				className={[prefixCls, this.props.className].join(' ')}
				style={this.props.style}
				onFocus={this.onFocus}
				onBlur={this.onBlur}
				tabIndex="0"
			>
				<div className={`${prefixCls}-inner`}>
					<Board rootPrefixCls={prefixCls} color={color} onChange={this.handleChange} />
					<div className={`${prefixCls}-wrap preview`}>
						<div className={`${prefixCls}-wrap-ribbon`}>
						<input
							type="range"
							className="color-range hue small"
							min="0" max="360"
							value={color.hue}
							onChange={this.handleHue}
							step="1"/>
						</div>
						{enableAlpha &&
							<div className={`${prefixCls}-wrap-alpha`}>
							<input type="range"
								className="small"
								min="0"
								max="100"
								step="1"
								value={alpha}
								style={{
									background: `linear-gradient(to right, transparent 0%, black 100%), url("data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==")`
								}}
								onChange={e => this.handleAlphaChange(e.target.value)} />
							</div>}
						<div className={`${prefixCls}-wrap-preview`}>
							<Preview
								rootPrefixCls={prefixCls}
								alpha={alpha}
								onChange={this.handleChange}
								onInputClick={this.onSystemColorPickerOpen}
								color={color}
							/>
						</div>
					</div>
					<div className={`${prefixCls}-wrap`}>
						<Params
							rootPrefixCls={prefixCls}
							color={color}
							alpha={alpha}
							onAlphaChange={this.handleAlphaChange}
							onChange={this.handleChange}
							mode={this.props.mode}
							enableAlpha={this.props.enableAlpha}
						/>
					</div>
				</div>
			</div>
		);
	}
}

function noop() {}

Panel.defaultProps = {
	className: '',
	defaultAlpha: 100,
	defaultColor: '#ff0000',
	enableAlpha: true,
	mode: 'RGB',
	onBlur: noop,
	onChange: noop,
	onFocus: noop,
	onMount: noop,
	prefixCls: 'rc-color-picker-panel',
	style: {},
};
