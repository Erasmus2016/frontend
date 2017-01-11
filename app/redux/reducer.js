import * as actions from './actions';
import { Record } from 'immutable';

const DefaultState = Record({
  app: new (Record({
    lang: 'en',
    category: 'all',
    map:[]
  })),
  join: new (Record({
    status: 'STAND', // STAND | CONNECTING | CONNECTED
    availableColors: ['green', 'red', 'yellow', 'blue']
  })),
  player: new (Record({
    color: null,
    name: ''
  })),
  dice: new(Record({
    status: false
  }))
});

export default (state = new DefaultState, action) => {
  switch (action.type) {

    case actions.JOIN:
      return state.setIn(['join', 'status'], 'CONNECTING')
                   .setIn(['player', 'color'], action.payload.color)
                   .setIn(['player', 'name'], action.payload.name)
                   .setIn(['app', 'category'], action.payload.category)

    case actions.JOIN_FORM_SET_COLOR:
      return state.setIn(['player', 'color'], action.payload.color);

    case actions.JOIN_FORM_SET_NAME:
      return state.setIn(['player', 'name'], action.payload.name);

    case actions.JOIN_FORM_SET_CATEGORY:
      return state.setIn(['app', 'category'], action.payload.category);

    case actions.DICE_IS_ROLLED:
      return state.setIn(['dice', 'status'], true);

    case actions.EVENT_AVAILABLE_COLORS:
      return state.setIn(['join', 'availableColors'], action.payload.colors);
    case actions.SET_MAP:
      return state.setIn(['app', 'map'], action.payload.map);
  }

  return state;
};
