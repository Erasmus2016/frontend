/**
*
* GameMap
*
*/

import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


const GameMap = ({ map }) => (
  <div>
    <pre>{JSON.stringify(map, null, 2)}</pre>
    <FormattedMessage {...messages.header} />
  </div>
);

GameMap.propTypes = {
  map: PropTypes.array,
};

export default GameMap;
