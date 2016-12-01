export const EDIT = 'EDIT';
export const READY_TO_ROLL_DICE = 'READY_TO_ROLL_DICE';
export const ROLL_THE_DICE = 'ROLL_THE_DICE';
export const DICE_RESPONSE = 'DICE_RESPONSE';

export function edit() {
  return {
    type: EDIT
  }
}

// Dice Actions
export function readyToRollDice() {
  return {
    type: READY_TO_ROLL_DICE
  }
}

export function rollTheDice() {
  return {
    type: ROLL_THE_DICE
  }
}

export function diceResponse() {
  return {
    type: DICE_RESPONSE
  }
}
