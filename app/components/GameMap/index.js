/**
*
* GameMap
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import startImg from 'assets/start.png';
import endImg from 'assets/end.png';
import RawField from 'components/Field';
import SplitField from 'components/SplitField';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const MapContainer = styled.div`
    position: absolute;
    top: 10vh;
    left: 50vw;
    transform: translateX(-50%);
`;

const MapStart = styled.div`
    position: absolute;
    background-image: url(${startImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;   
`;

const MapEnd = styled.div`
   position: absolute;
   background-image: url(${endImg});
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
`;

const Field = ({ x, y, color, size }) => (
  <div
    style={{
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`
    }}
  >
      <RawField color={color} size={`${size}px`} />
  </div>
);

const GameMap = ({ map, players }) => {

    const highestX = map.reduce((highest, { x }) => Math.max(highest, x), 0);
    const highestY = map.reduce((highest, { y }) => Math.max(highest, y), 0);

    const fieldSize = Math.min(window.innerHeight / highestY, window.innerWidth / highestX) * 0.80;

    const fields = map.map(({ id, x, y }) => {

            return (
                <Field
                    key={id}
                    size={fieldSize}
                    y={fieldSize * y}
                    x={fieldSize * x}
                    color="red"
                />
            );
        }
    );

    const boxWidth = (window.innerWidth - fieldSize * Math.min(highestX)) / 2;
    const startHeight = 221/351 * boxWidth;
    const endHeight = 301/468 * boxWidth;

    const fieldOneY = map.find(({ id }) => id === 0).y;
    const fieldLastY = map.reduce((prev, { id, y }) =>
            prev.id > id ? prev : { id, y }
        , {id : 0, y: 0}).y;

    return (
        <MapContainer
            style={{
                left: `${boxWidth}px`
            }}
        >
            {fields}
            <MapStart
                style={{
                    width: `${boxWidth}px`,
                    height: `${startHeight}px`,
                    left: `-${boxWidth}px`,
                    top: `${fieldOneY * fieldSize - startHeight / 2 + fieldSize / 2}px`
                }}
            />
            <MapEnd
                style={{
                    width: `${boxWidth}px`,
                    height: `${endHeight}px`,
                    left: `${highestX * fieldSize}px`,
                    top: `${fieldLastY * fieldSize - endHeight / 2 + fieldSize / 2}px`
                }}
            />
        </MapContainer>
    );
};

GameMap.propTypes = {
  map: PropTypes.array,
  players: PropTypes.array,
};

export default GameMap;
