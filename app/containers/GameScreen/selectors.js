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

/**
 * Default selector used by GameScreen
 */

const selectGameScreen = () => createSelector(
  selectCanLogin(),
  selectMap(),
  selectCanRollTheDice(),
  selectDiceResult(),
  (canLogin, map, canRollTheDice, diceResult) => ({
    canLogin,
    map: map ? map.toJS() : null,
    canRollTheDice,
    diceResult,
  })
);

export default selectGameScreen;
export {
  selectCanLogin,
  selectAvalibleColors,
};
