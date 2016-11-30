import * as actions from './actions';
import { Record } from 'immutable';

const DefaultState = Record({
  isEdited: 'default'
});

export default (state = new DefaultState, action) => {
  switch (action.type) {
    case actions.EDIT:
      return state.set('isEdited', 'edited');
  }

  return state;
};
