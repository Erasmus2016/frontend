/*
 *
 * JoininScreen reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FORM_SET_NICK,
  FORM_SET_COLOR,
  FORM_SET_CATEGORY,
} from './constants';

const initialState = fromJS({
  nick: '',
  color: '',
  category: 'all',
});

function joininScreenReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_SET_NICK:
      return state.set('nick', action.payload.nick);
    case FORM_SET_COLOR:
      return state.set('color', action.payload.color);
    case FORM_SET_CATEGORY:
      return state.set('category', action.payload.category);
    default:
      return state;
  }
}

export default joininScreenReducer;
