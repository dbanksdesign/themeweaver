import React from 'react';
import ReactDOM from 'react-dom';

export default class Ribbon extends React.Component {
  constructor(props) {
    super(props);
  }

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

  getPrefixCls = () => {
    return `${this.props.rootPrefixCls}-ribbon`;
  };

  pointMoveTo = coords => {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const width = rect.width;
    let left = coords.x - rect.left;
    left = Math.max(0, left);
    left = Math.min(left, width);

    const huePercent = left / width;
    const hue = huePercent * 360;

    const { color } = this.props;

		color.hue = hue;
		console.log(color.hue);

    this.props.onChange(color);
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
    const hue = this.props.color.hue;
    const per = hue / 360 * 100;

    return (
      <div className={prefixCls}>
        <span className={`${prefixCls}-thumb`} ref="point" style={{ left: `${per}%` }} />
        <div className={`${prefixCls}-handler`} onMouseDown={this.onMouseDown} />
      </div>
    );
  }
}
