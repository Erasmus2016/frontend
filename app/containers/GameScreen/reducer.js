/*
 *
 * GameScreen reducer
 *
 */

import { Record, fromJS } from 'immutable';
import { ActionTypes } from 'utils/socketMiddleware';

const GameData = Record({ // eslint-disable-line new-cap
  canLogin: false,
  availableColors: ['blue', 'green', 'red', 'yellow'],
});

const initialState = fromJS({
  data: new GameData(),
});

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SOCKET_EVENT_LOGIN:
      return state.setIn(['data', 'canLogin'], true);
    case ActionTypes.SOCKET_EVENT_AVAILABLE_COLORS:
      return state.setIn(['data', 'availableColors'], action.payload.colors);
    default:
      return state;
  }
}

export default gameReducer;
