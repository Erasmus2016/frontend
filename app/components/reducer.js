import * as actions from './actions';

const defaultState = {
  isEdited: 'default'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.EDIT:
      return {...state, isEdited: 'edited'};
  }

  return state;
};
