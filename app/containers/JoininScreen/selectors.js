import { createSelector } from 'reselect';
import { selectAvalibleColors } from 'containers/GameScreen/selectors';

/**
 * Direct selector to the joininScreen state domain
 */
const selectJoininScreenDomain = () => (state) => state.get('joinin');

const selectJoininColor = () => createSelector(
  selectJoininScreenDomain(),
  (joinin) => joinin.get('color')
);

/**
 * Default selector used by JoininScreen
 */

const selectJoininScreen = () => createSelector(
  selectJoininScreenDomain(),
  selectAvalibleColors(),
  (substate, avalibleColors) =>
    substate.set('availableColors', avalibleColors).toJS()
);

export default selectJoininScreen;
export {
  selectJoininScreenDomain,
  selectJoininColor,
};
