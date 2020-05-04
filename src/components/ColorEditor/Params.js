import React from 'react';
import clsx from 'clsx';

import Color from './helpers/color';

const modesMap = ['RGB', 'HSL'];

export default class Params extends React.Component {
  constructor(props) {
    super(props);

    // 管理 input 的状态
    this.state = {
      mode: props.mode,
      hex: props.color.hex,
      color: props.color, // instanceof tinycolor
    };
  }

  componentWillReceiveProps(nextProps) {
    const { color: nextColor } = nextProps;

    this.setState({
      color: nextColor,
      hex: nextColor.hex,
    });
  }

  getChannelInRange = (value, index) => {
    const channelMap = {
      RGB: [[0, 255], [0, 255], [0, 255]],
			HSB: [[0, 359], [0, 100], [0, 100]],
			HSL: [[0, 359], [0, 100], [0, 100]],
    };
    const mode = this.state.mode;
    const range = channelMap[mode][index];
    let result = parseInt(value, 10);
    if (isNaN(result)) {
      result = 0;
    }
    result = Math.max(range[0], result);
		result = Math.min(result, range[1]);
    return result;
  };

  getPrefixCls = () => {
    return `${this.props.rootPrefixCls}-params`;
  };

  handleHexBlur = () => {
    const hex = this.state.hex;

    let color = null;

    if (Color.isValidHex(hex)) {
      color = new Color(hex);
    }

    if (color !== null) {
      this.setState({
        color,
        hex,
      });
      this.props.onChange(color, false);
    }
  };

  handleHexPress = event => {
    const hex = this.state.hex;
    if (event.nativeEvent.which === 13) {
      let color = null;

      if (Color.isValidHex(hex)) {
        color = new Color(hex);
      }

      if (color !== null) {
        this.setState({
          color,
          hex,
        });
        this.props.onChange(color, false);
      }
    }
  };

  handleHexChange = event => {
    const hex = event.target.value;

    this.setState({
      hex,
    });
  };

  handleModeChange = () => {
    let mode = this.state.mode;

    const modeIndex = (modesMap.indexOf(mode) + 1) % modesMap.length;

		mode = modesMap[modeIndex];
		console.log(mode, modeIndex);

    this.setState({
      mode,
    });
  };

  handleAlphaHandler = event => {
    let alpha = parseInt(event.target.value, 10);

    if (isNaN(alpha)) {
      alpha = 0;
    }
    alpha = Math.max(0, alpha);
    alpha = Math.min(alpha, 100);

    this.props.onAlphaChange(alpha);
  };

  updateColorByChanel = (channel, value) => {
    const { color } = this.props;
		const { mode } = this.state;
		console.log(color, mode, channel, value);

    if (mode === 'HSB') {
      if (channel === 'H') {
        color.hue = parseInt(value, 10);
      } else if (channel === 'S') {
        color.saturation = parseInt(value, 10) / 100;
      } else if (channel === 'B') {
        color.brightness = parseInt(value, 10) / 100;
      }
    } else if (mode === 'HSL') {
      if (channel === 'H') {
        color.hue = parseInt(value, 10);
      } else if (channel === 'S') {
        color.saturation = parseInt(value, 10) / 100;
      } else if (channel === 'L') {
        color.lightness = parseInt(value, 10) / 100;
      }
		} else {
      if (channel === 'R') {
        color.red = parseInt(value, 10);
      } else if (channel === 'G') {
        color.green = parseInt(value, 10);
      } else if (channel === 'B') {
        color.blue = parseInt(value, 10);
      }
    }

    return color;
  };

  handleColorChannelChange = (index, event) => {
    const value = this.getChannelInRange(event.target.value, index);
    const { mode } = this.state;
    const channel = mode[index];

    const color = this.updateColorByChanel(channel, value);

    this.setState(
      {
        hex: color.hex,
        color,
      },
      () => {
        this.props.onChange(color, false);
      }
    );
  };

  render() {
    const prefixCls = this.getPrefixCls();

    const { enableAlpha } = this.props;
    const { mode, color } = this.state;
    const colorChannel = color[mode];

    if (mode === 'HSB') {
      colorChannel[0] = parseInt(colorChannel[0], 10);
      colorChannel[1] = Math.round(colorChannel[1] * 100);
      colorChannel[2] = Math.round(colorChannel[2] * 100);
    } else if (mode === 'HSL') {
      colorChannel[0] = parseInt(colorChannel[0], 10);
      colorChannel[1] = Math.round(colorChannel[1] * 100);
      colorChannel[2] = Math.round(colorChannel[2] * 100);
    }

    const paramsClasses = clsx({
      [prefixCls]: true,
      [`${prefixCls}-has-alpha`]: enableAlpha,
    });

    return (
      <div className={paramsClasses}>
				<div className="rc-color-picker-panel-param hex">
					<input
						className={`${prefixCls}-hex`}
						className="tw-input"
						type="text"
						maxLength="7"
						onKeyPress={this.handleHexPress}
						onBlur={this.handleHexBlur}
						onChange={this.handleHexChange}
						value={this.state.hex.toLowerCase()}
					/>
					<label className={`${prefixCls}-label`}>Hex</label>
				</div>
				<div className="rc-color-picker-panel-param">
					<input
						className="tw-input"
						type="number"
						ref="channel_0"
						value={colorChannel[0]}
						onChange={this.handleColorChannelChange.bind(null, 0)}
					/>
					<label className={`${prefixCls}-label`} onClick={this.handleModeChange}>
						{mode[0]}
					</label>
				</div>
				<div className="rc-color-picker-panel-param">
					<input
						className="tw-input"
						type="number"
						ref="channel_1"
						value={colorChannel[1]}
						onChange={this.handleColorChannelChange.bind(null, 1)}
					/>
					<label className={`${prefixCls}-label`} onClick={this.handleModeChange}>
						{mode[1]}
					</label>
				</div>
				<div className="rc-color-picker-panel-param">
					<input
						className="tw-input"
						type="number"
						ref="channel_2"
						value={colorChannel[2]}
						onChange={this.handleColorChannelChange.bind(null, 2)}
					/>
					<label className={`${prefixCls}-label`} onClick={this.handleModeChange}>
						{mode[2]}
					</label>
				</div>
				{enableAlpha && (
					<div className="rc-color-picker-panel-param">
						<input
							className="tw-input"
							type="number"
							value={Math.round(this.props.alpha)}
							onChange={this.handleAlphaHandler}
						/>
						<label className={`${prefixCls}-label`}>A</label>
					</div>
				)}
      </div>
    );
  }
}
