export const ActionTypes = {
  SOCKET_START: '@@socket/START',
  SOCKET_CLOSE: '@@socket/CLOSE',
  SOCKET_CONNECTED: '@@socket/CONNECTED',
  SOCKET_ERROR: '@@socket/ERROR',
  SOCKET_EVENT_LOGIN: '@@socket/EVENT_LOGIN',
  SOCKET_EVENT_AVAILABLE_COLORS: '@@socket/EVENT_AVAILABLE_COLORS',
  SOCKET_EVENT_MAP: '@@socket/EVENT_MAP',
  SOCKET_EVENT_ROLL_THE_DICE: '@@socket/EVENT_ROLL_THE_DICE',
  SOCKET_EVENT_DICE_RESULT: '@@socket/EVENT_DICE_RESULT',
  SOCKET_EVENT_QUESTION: '@@socket/EVENT_QUESTION',
  SOCKET_EVENT_PLAYER_POSITION: '@@socket/EVENT_PLAYER_POSITION',
  SOCKET_EVENT_GAME_OVER: '@@socket/EVENT_GAME_OVER',
  SOCKET_EVENT_SET_DIFFICULTY: '@@socket/EVENT_SET_DIFFICULTY',
  SOCKET_EMIT_LOGIN: '@@socket/EMIT_LOGIN',
  SOCKET_EMIT_ROLL_THE_DICE: '@@socket/EMIT_ROLL_THE_DICE',
  SOCKET_EMIT_SET_DIFFICULTY: '@@socket/EMIT_SET_DIFFICULTY',
  SOCKET_EMIT_ANSWER: '@@socket/EMIT_ANSWER',
  SET_DIFFICULTY: 'SET_DIFFICULTY',
};

export default function createSocketMiddleware(createSocket) {
  return (store) => {
    let socket;
    const { dispatch } = store;

    return (next) => (action) => {
      const isDisconnected = !socket || !socket.connected;
      const isConnected = !isDisconnected;

      if (isDisconnected && action.type === ActionTypes.SOCKET_START) {
        socket = createSocket();
        const on = socket.on.bind(socket);
        bindListeners(on, dispatch);
        socket.emit('mode', {type:'normal'});
      }

      if (isConnected) {
        switch (action.type) {  // eslint-disable-line default-case

          case ActionTypes.SOCKET_CLOSE: {
            socket.disconnect();
            break;
          }

          case ActionTypes.SOCKET_EMIT_LOGIN: {
            const { nick, color, category } = action.payload;
            socket.emit('login', { nick, color, category });
            break;
          }

          case ActionTypes.SOCKET_EMIT_ROLL_THE_DICE: {
            socket.emit('roll-the-dice');
            break;
          }

          case ActionTypes.SOCKET_EMIT_SET_DIFFICULTY: {
            dispatch({type:ActionTypes.SET_DIFFICULTY, payload: action.payload.difficulty});
            socket.emit('set-difficulty', action.payload.difficulty);
            break;
          }

          case ActionTypes.SOCKET_EMIT_ANSWER: {
            socket.emit('answer', action.payload.id);
            break;
          }

        }
      }

      next(action);
    };
  };
}

function bindListeners(on, dispatch) {
  on('connect', () => dispatch(({
    type: ActionTypes.SOCKET_CONNECTED,
  })));

  on('error', () => dispatch(({
    type: ActionTypes.SOCKET_ERROR,
  })));

  on('login', () => dispatch(({
    type: ActionTypes.SOCKET_EVENT_LOGIN,
  })));

  on('available-colors', (colors) => dispatch(({
    type: ActionTypes.SOCKET_EVENT_AVAILABLE_COLORS,
    payload: { colors },
  })));

  on('map', (map) => dispatch(({
    type: ActionTypes.SOCKET_EVENT_MAP,
    payload: { map },
  })));

  on('roll-the-dice', () => dispatch(({
    type: ActionTypes.SOCKET_EVENT_ROLL_THE_DICE,
  })));

  on('dice-result', (result) => dispatch(({
    type: ActionTypes.SOCKET_EVENT_DICE_RESULT,
    payload: { result },
  })));

  on('set-difficulty', () => dispatch(({
    type: ActionTypes.SOCKET_EVENT_SET_DIFFICULTY,
  })));

  on('question', (question, answers, image) => dispatch(({
    type: ActionTypes.SOCKET_EVENT_QUESTION,
    payload: { question, answers, image },
  })));

  on('player-position', (position) => dispatch(({
    type: ActionTypes.SOCKET_EVENT_PLAYER_POSITION,
    payload: { position },
  })));

  on('game-over', () => dispatch(({
    type: ActionTypes.SOCKET_EVENT_GAME_OVER,
  })));
}
