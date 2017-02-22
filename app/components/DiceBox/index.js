/**
*
* DiceBox
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import diceOn from 'assets/DICES.png';
import diceOff from 'assets/Dicesoff.png';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Dice = styled.div`
    width: 10vh;
    height: 10vh;
    background-size: contain;
    background-repeat:no-repeat;
`;

const DiceOn = styled(Dice)`
    background-image: url(${diceOn});
`;

const DiceOff = styled(Dice)`
    background-image: url(${diceOff});
`;

function DiceBox({ onRollTheDice, canRollTheDice, diceResult }) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      Dice result: [{diceResult}]

        {!canRollTheDice ? <DiceOff /> : <DiceOn onClick={onRollTheDice} />}
    </div>
  );
}

DiceBox.propTypes = {
  onRollTheDice: PropTypes.func.isRequired,
  canRollTheDice: PropTypes.bool.isRequired,
  diceResult: PropTypes.number,
};

export default DiceBox;
