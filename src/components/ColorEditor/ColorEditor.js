import React from 'react';
import clsx from 'clsx';

import Color from './helpers/color';
import Board from './Board';
import Preview from './Preview';
import Ribbon from './Ribbon';
import Alpha from './Alpha';
import Params from './Params';

export default class Panel extends React.Component {
	onSystemColorPickerOpen = e => {
    // only work with broswer which support color input
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
		
    this.props.onChange({
      color: originalColor.hex, // don't change actual color
      alpha,
    });
  };

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
              <Ribbon rootPrefixCls={prefixCls} color={color} onChange={this.handleChange} />
            </div>
            {enableAlpha &&
              <div className={`${prefixCls}-wrap-alpha`}>
                <Alpha
                  rootPrefixCls={prefixCls}
                  alpha={alpha}
                  color={color}
                  onChange={this.handleAlphaChange}
                />
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
