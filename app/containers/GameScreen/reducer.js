/*
 *
 * GameScreen reducer
 *
 */

import { Map, Record, List, fromJS } from 'immutable';
import { ActionTypes } from 'utils/socketMiddleware';

const GameData = Record({ // eslint-disable-line new-cap
  canLogin: false,
  availableColors: List(['blue', 'green', 'red', 'yellow']), // eslint-disable-line new-cap
  map: null,
  canRollTheDice: false,
  diceResult: null,
  players: null,
});

const initialState = fromJS({
  data: new GameData(),
});

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SOCKET_EVENT_LOGIN:
      return state.setIn(['data', 'canLogin'], true);

    case ActionTypes.SOCKET_EVENT_AVAILABLE_COLORS: {
      const colors = fromJS(action.payload.colors);
      return state.setIn(['data', 'availableColors'], colors);
    }

    case ActionTypes.SOCKET_EVENT_MAP:
      return state.setIn(['data', 'map'], fromJS(action.payload.map));

    case ActionTypes.SOCKET_EVENT_ROLL_THE_DICE:
      return state.setIn(['data', 'canRollTheDice'], true);

    case ActionTypes.SOCKET_EMIT_ROLL_THE_DICE:
      return state.setIn(['data', 'canRollTheDice'], false);

    case ActionTypes.SOCKET_EVENT_DICE_RESULT:
      return state.setIn(['data', 'diceResult'], action.payload.result);

    case ActionTypes.SOCKET_EVENT_PLAYER_POSITION:
      return state.setIn(['data', 'players'],
        fromJS(action.payload.position)
          .reduce((players, info) =>
            players.set(info.get('color'), info.get('position'))
            , Map() // eslint-disable-line new-cap
          )
        );

    default:
      return state;
  }
}

export default gameReducer;
