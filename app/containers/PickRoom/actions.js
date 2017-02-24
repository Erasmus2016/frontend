import { SET_ROOM_NAME } from './constants';

export function setRoomName(name) {
  return {
    type: SET_ROOM_NAME,
    payload: { name },
  };
}
