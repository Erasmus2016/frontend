export const JOIN = 'JOIN';
export const JOIN_FORM_SET_COLOR = 'JOIN_FORM_SET_COLOR';
export const JOIN_FORM_SET_NAME = 'JOIN_FORM_SET_NAME';
export const JOIN_FORM_SET_CATEGORY = 'JOIN_FORM_SET_CATEGORY';

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
