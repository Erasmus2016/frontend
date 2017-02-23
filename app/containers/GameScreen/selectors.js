import { createSelector } from 'reselect';
import { selectModeSent } from '../PickRoom/selectors';

const selectCanLogin = () =>
  (state) => state.getIn(['game', 'data', 'canLogin'], false);

const selectAvalibleColors = () =>
  (state) => state.getIn(['game', 'data', 'availableColors'])
                   .filter((c) => Boolean(c));

const selectMap = () =>
  (state) => state.getIn(['game', 'data', 'map']);

const selectCanRollTheDice = () =>
  (state) => state.getIn(['game', 'data', 'canRollTheDice']);

const selectDiceResult = () =>
  (state) => state.getIn(['game', 'data', 'diceResult']);

const selectPlayers = () =>
  (state) => state.getIn(['game', 'data', 'players']);

/**
 * Default selector used by GameScreen
 */

const selectGameScreen = () => createSelector(
  selectCanLogin(),
  selectMap(),
  selectCanRollTheDice(),
  selectDiceResult(),
  selectPlayers(),
  selectModeSent(),
  (canLogin, map, canRollTheDice, diceResult, players, modeSent) => ({
    canLogin,
    map: map ? map.toJS() : null,
    canRollTheDice,
    diceResult,
    players: players ? players.toJS() : null,
    pickMode: !modeSent,
  })
);

export default selectGameScreen;
export {
  selectCanLogin,
  selectAvalibleColors,
  selectMap,
  selectCanRollTheDice,
  selectDiceResult,
  selectPlayers,
};
