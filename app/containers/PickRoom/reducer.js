/*
 *
 * PickRoom reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_ROOM_NAME } from './constants';
import { ActionTypes } from 'utils/socketMiddleware';

const initialState = fromJS({
  room: '',
  ready: false,
  modeSent: false,
});

function pickRoomReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROOM_NAME:
      return state.set('room', action.payload.name);

    case ActionTypes.SOCKET_EVENT_JOIN_MODE:
      return state.set('ready', true);

    case ActionTypes.SOCKET_EMIT_JOIN_MODE:
      return state.set('modeSent', true);

    default:
      return state;
  }
}

export default pickRoomReducer;
