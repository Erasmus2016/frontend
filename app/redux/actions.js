export const JOIN = 'JOIN';
export const JOIN_FORM_SET_COLOR = 'JOIN_FORM_SET_COLOR';
export const JOIN_FORM_SET_NAME = 'JOIN_FORM_SET_NAME';
export const JOIN_FORM_SET_CATEGORY = 'JOIN_FORM_SET_CATEGORY';
export const DICE_IS_READY = 'DICE_IS_READY';
export const DICE_IS_ROLLED = 'DICE_IS_ROLLED';
export const EVENT_AVAILABLE_COLORS = 'EVENT_AVAILABLE_COLORS';
export const SET_MAP = 'SET_MAP';
export const GAME_IS_READY = 'GAME_IS_READY';

export function joinTheServer() {
  return (dispatch, getState, { emit }) => {
    const { app: { lang, category }, player: { name, color } } = getState();
    emit('login', { name, color, lang, category });

    dispatch({
      type: JOIN,
      payload: { name, color, category }
    });
  };
}

export function joinSetColor(color) {
  return {
    type: JOIN_FORM_SET_COLOR,
    payload: {
      color
    }
  }
}

export function joinSetName(name) {
  return {
    type: JOIN_FORM_SET_NAME,
    payload: {
      name
    }
  }
}

export function joinSetCategory(category) {
  return {
    type: JOIN_FORM_SET_CATEGORY,
    payload: {
      category
    }
  }
}

export function rollTheDice(){
    return (dispatch, getState, { emit }) => {
        emit('roll-the-dice');
        dispatch({
            type: DICE_IS_ROLLED
        });
    };

    /* console.log("actions.js");
     emit('roll-the-dice', {  });
     return{
       type: DICE_IS_ROLLED,
       payload:true
     }*/
}

export function setAvailableColors(colors) {
  return {
    type: EVENT_AVAILABLE_COLORS,
    payload: {
      colors
    }
  }
}

export function setMap(map) {
    return {
        type: SET_MAP,
        payload: {
            map
        }
    }
}
export function setGameIsReady(){
    return{
        type:GAME_IS_READY
    }
}