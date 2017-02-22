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
  color: 'red',
  category: 'all',
  hadLogin: false,
});

function joininScreenReducer(state = initialState, action) {
  const st = state.set('hadLogin', true);
  switch (action.type) {
    case FORM_SET_NICK:
      return st.set('nick', action.payload.nick);
    case FORM_SET_COLOR:
      return st.set('color', action.payload.color);
    case FORM_SET_CATEGORY:
      return st.set('category', action.payload.category);
    default:
      return state;
  }
}

export default joininScreenReducer;
