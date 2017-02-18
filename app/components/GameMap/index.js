/**
*
* GameMap
*
*/

import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


const GameMap = ({ map, players }) => (
  <div>
    <pre>{JSON.stringify(players, null, 2)}</pre>
    <pre>{JSON.stringify(map, null, 2)}</pre>
    <FormattedMessage {...messages.header} />
  </div>
);

GameMap.propTypes = {
  map: PropTypes.array,
  players: PropTypes.object,
};

export default GameMap;
