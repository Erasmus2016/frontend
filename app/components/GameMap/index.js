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
import RawSplitField from 'components/SplitField';
import RawHouseField from 'components/HouseField';
import RawSplitHouseField from 'components/SplitHouseField';
import RawJumpField from 'components/JumpField';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const MapContainer = styled.div`
    position: absolute;
    /*top: 10vh; */
    top: -5vh; /* Fix for vertical alignment of the map. */
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

const SplitField = ({ x, y, color1, color2, size }) => (
    <div
        style={{
            position: 'absolute',
            top: `${y}px`,
            left: `${x}px`
        }}
    >
        <RawSplitField color1={color1} color2={color2} size={`${size}px`} />
    </div>
);

const HouseField = ({ x, y, color, size }) => (
    <div
        style={{
            position: 'absolute',
            top: `${y}px`,
            left: `${x}px`
        }}
    >
        <RawHouseField color={color} size={`${size}px`} />
    </div>
);

const SplitHouseField = ({ x, y, color1, color2, size }) => (
    <div
        style={{
            position: 'absolute',
            top: `${y}px`,
            left: `${x}px`
        }}
    >
        <RawSplitHouseField color1={color1} color2={color2} size={`${size}px`} />
    </div>
);

const JumpField = ({ x, y, color, size }) => (
    <div
        style={{
            position: 'absolute',
            top: `${y}px`,
            left: `${x}px`
        }}
    >
        <RawJumpField color={color} size={`${size}px`} />
    </div>
);

const GameMap = ({ map, players }) => {

    const mapPlayers = players || null;

    let player1 = null;
    let player2 = null;
    if (mapPlayers != null) {
        player1 = mapPlayers[0];
        player2 = mapPlayers[1];
    }

    const highestX = map.reduce((highest, { x }) => Math.max(highest, x), 0);
    const highestY = map.reduce((highest, { y }) => Math.max(highest, y), 0);

    const fieldSize = Math.min(window.innerHeight / highestY, window.innerWidth / highestX) * 0.80;

    const fields = map.map(({ id, x, y, type, jumpDestinationId = false }) => {

        console.log(type);
        console.log(jumpDestinationId);

        let color = 'default';
        if (player1 != null && player2 != null) {

            if (id == player1.position) {
                color = player1.color;
            }

            if (id == player2.position) {
                color = player2.color;
            }

            if (type == 'question') {
                if (id == player1.position && id == player2.position) {
                    return (
                        <SplitHouseField
                            key={id}
                            size={fieldSize}
                            y={fieldSize * y}
                            x={fieldSize * x}
                            color1={player1.color}
                            color2={player2.color}
                        />
                    );
                } else {
                    return (
                        <HouseField
                            key={id}
                            size={fieldSize}
                            y={fieldSize * y}
                            x={fieldSize * x}
                            color={color}
                        />
                    );
                }
            }

            if (type == 'jump') {
                return (
                    <JumpField
                        key={id}
                        size={fieldSize}
                        y={fieldSize * y}
                        x={fieldSize * x}
                        color={color}
                    />
                );
            }

            if (id == player1.position && id == player2.position) {
                return (
                    <SplitField
                        key={id}
                        size={fieldSize}
                        y={fieldSize * y}
                        x={fieldSize * x}
                        color1={player1.color}
                        color2={player2.color}
                    />
                );
            }
        }

            return (
                <Field
                    key={id}
                    size={fieldSize}
                    y={fieldSize * y}
                    x={fieldSize * x}
                    color={color}
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
