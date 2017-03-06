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
  top: 70vh;
  left: 5vw;
  position: relative;
  width: 7vw;
  height: 7vw;
  background-size: contain;
  background-repeat:no-repeat;
`;

const DiceOn = styled(Dice)`
  background-image: url(${diceOn});
  cursor: pointer;
`;

const DiceOff = styled(Dice)`
  background-image: url(${diceOff});
`;

const DiceResult = styled.div`
  font-size:5vw;
  color:#fcc2d8;
  position:relative;
  text-shadow: 0px 0px 17px rgba(255, 52, 132, 1);
  font-family: beon;
`;


function DiceBox({ onRollTheDice, canRollTheDice, diceResult }) {
  return (
    <div>
      {/* <FormattedMessage {...messages.header} />*/}
      {/*Dice result: [{diceResult}]*/}

      {!canRollTheDice ? <DiceOff>{diceResult > 0 ? <DiceResult>{diceResult}</DiceResult> : ''}</DiceOff>   : <DiceOn onClick={onRollTheDice} />}
    </div>
  );
}

DiceBox.propTypes = {
  onRollTheDice: PropTypes.func.isRequired,
  canRollTheDice: PropTypes.bool.isRequired,
  diceResult: PropTypes.number,
};

export default DiceBox;
