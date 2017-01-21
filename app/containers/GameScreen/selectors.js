import { createSelector } from 'reselect';

/**
 * Direct selector to the game state domain
 */
const selectCanLogin = () =>
  (state) => state.getIn(['game', 'data', 'canLogin'], false);

/**
 * Selector for avalible colors
 */
const selectAvalibleColors = () =>
  (state) => state.getIn(['game', 'data', 'availableColors']);

/**
 * Other specific selectors
 */


/**
 * Default selector used by GameScreen
 */

const selectGameScreen = () => createSelector(
  selectCanLogin(),
  (canLogin) => ({
    canLogin,
  })
);

export default selectGameScreen;
export {
  selectCanLogin,
  selectAvalibleColors,
};
