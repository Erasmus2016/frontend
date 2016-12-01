import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Field extends Component {

  static propTypes = {
    color: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
  }

  render() {
    const { color, size, x, y } = this.props;

    return (
      <div
        className={classNames('field', color)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${size * y}px`,
          left: `${size * x}px`
        }}
      />
    );
  }

}
