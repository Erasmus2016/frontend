/*
 *
 * JoininScreen actions
 *
 */

import {
  FORM_SET_NICK,
  FORM_SET_COLOR,
  FORM_SET_CATEGORY,
} from './constants';

export function setNick(nick) {
  return {
    type: FORM_SET_NICK,
    payload: { nick },
  };
}

export function setColor(color) {
  return {
    type: FORM_SET_COLOR,
    payload: { color },
  };
}

export function setCategory(category) {
  return {
    type: FORM_SET_CATEGORY,
    payload: { category },
  };
}
