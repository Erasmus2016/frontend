import { createSelector } from 'reselect';

const selectPickRoomDomain = () => (state) => state.get('pickRoom');

const selectModeSent = () => (state) => state.getIn(['pickRoom', 'modeSent']);

/**
 * Default selector used by JoininScreen
 */

const selectPickRoom = () => createSelector(
  selectPickRoomDomain(),
  (state) => state.toJS()
);

export default selectPickRoom;
export {
  selectPickRoomDomain,
  selectModeSent,
};
