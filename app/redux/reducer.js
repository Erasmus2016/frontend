import * as actions from './actions';
import { Record } from 'immutable';

const DefaultState = Record({
  isEdited: 'default',
  dice: 'default'
});

export default (state = new DefaultState, action) => {
  switch (action.type) {

    case actions.EDIT:
      return state.set('isEdited', 'edited');
    break;
    case actions.READY_TO_ROLL_DICE:
      return state.set('dice', 'readyToRollDice');
    break;
    case actions.ROLL_THE_DICE:
      return state.set('dice', 'diceIsRolled');
    break;
    case actions.DICE_RESPONSE:
      return state.set('dice', 'diceResponse');
    break;
  }

  return state;
};
