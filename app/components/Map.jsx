import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import Field from './Field';
import Dice from './Dice';
export default class Map extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    //state: PropTypes.object.isRequired
  };

  render() {
    const { data } = this.props;
    const highestX = data.reduce((highest, { x }) => Math.max(highest, x), 0);
    const highestY = data.reduce((highest, { y }) => Math.max(highest, y), 0);

    const fieldSize = Math.min(window.innerHeight / highestY, window.innerWidth / highestX) * 0.80;
    const fields = data.map(({ id, x, y }) =>
        <Field key={id} size={fieldSize} x={x} y={y} />
      );

    const boxWidth = (window.innerWidth - fieldSize * Math.min(highestX)) / 2;
    const startHeight = 221/351 * boxWidth;
    const endHeight = 301/468 * boxWidth;

    const fieldOneY = data.find(({ id }) => id === 0).y;
    const fieldLastY = data.reduce((prev, { id, y }) =>
      prev.id > id ? prev : { id, y }
    , {id : 0, y: 0}).y;

    return (
      <div
        className="map"
        style={{
          left: `${boxWidth}px`
        }}
      >
        {fields}
        <div
          className="start"
          style={{
            width: `${boxWidth}px`,
            height: `${startHeight}px`,
            left: `-${boxWidth}px`,
            top: `${fieldOneY * fieldSize - startHeight / 2 + fieldSize / 2}px`
          }}
        />
        <div
            className="end"
            style={{
                width: `${boxWidth}px`,
                height: `${endHeight}px`,
                left: `${highestX * fieldSize}px`,
                top: `${fieldLastY * fieldSize - endHeight / 2 + fieldSize / 2}px`
            }}
        />
        <Dice isActive={true} />
      </div>
    );
  }

}
