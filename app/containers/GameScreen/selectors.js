import { createSelector } from 'reselect';


const selectCanLogin = () =>
  (state) => state.getIn(['game', 'data', 'canLogin'], false);

const selectAvalibleColors = () =>
  (state) => state.getIn(['game', 'data', 'availableColors']);

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
  (canLogin, map, canRollTheDice, diceResult, players) => ({
    canLogin,
    map: map ? map.toJS() : null,
    canRollTheDice,
    diceResult,
    players: players ? players.toJS() : null,
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
