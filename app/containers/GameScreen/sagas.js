import { take, call, put } from 'redux-saga/effects';
import { ActionTypes } from 'utils/socketMiddleware';
import { delay } from 'redux-saga';
import { HIDE_ANSWER } from './constants';


export default function* defaultSaga() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(ActionTypes.SOCKET_EMIT_ANSWER);
    yield call(delay, 1000);
    yield put({ type: HIDE_ANSWER });
  }
}
