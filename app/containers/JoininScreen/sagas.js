import { put, take, select } from 'redux-saga/effects';
import { ActionTypes } from 'utils/socketMiddleware';
import { selectAvalibleColors } from 'containers/GameScreen/selectors';
import { selectJoininColor } from './selectors';
import { FORM_SET_COLOR } from './constants';

export function* setAvailableColor() {
  const colors = yield select(selectAvalibleColors());
  yield put({
    type: FORM_SET_COLOR,
    payload: { color: colors.get(0) },
  });
}

export function* defaultSaga() {
  yield* setAvailableColor();

  while (true) { // eslint-disable-line no-constant-condition
    yield take(ActionTypes.SOCKET_EVENT_AVAILABLE_COLORS);
    const avalibleColors = yield select(selectAvalibleColors());
    const color = yield select(selectJoininColor());
    const shouldReset = !color || !avalibleColors.includes(color);
    if (shouldReset) yield* setAvailableColor();
  }
}

export default [
  defaultSaga,
];
