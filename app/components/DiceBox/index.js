/**
*
* DiceBox
*
*/

import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function DiceBox({ onRollTheDice, canRollTheDice, diceResult }) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      Dice result: [{diceResult}]
      <button
        disabled={!canRollTheDice}
        onClick={onRollTheDice}
      >Roll the dice</button>
    </div>
  );
}

DiceBox.propTypes = {
  onRollTheDice: PropTypes.func.isRequired,
  canRollTheDice: PropTypes.bool.isRequired,
  diceResult: PropTypes.number,
};

export default DiceBox;
