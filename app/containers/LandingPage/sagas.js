import { take, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { DO_START_GAME } from './constants';

// Individual exports for testing
export function* startTheGame() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(DO_START_GAME);
    yield put(push('/play'));
  }
}

// All sagas to be loaded
export default [
  startTheGame,
];
