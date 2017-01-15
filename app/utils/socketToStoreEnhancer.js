export const ActionTypes = {
  SOCKET_CONNECTED: '@@socket/CONNECTED',
  SOCKET_ERROR: '@@socket/ERROR',
  SOCKET_EVENT_LOGIN: '@@socket/EVENT_LOGIN',
  SOCKET_EVENT_MAP: '@@socket/EVENT_MAP',
  SOCKET_EVENT_ROLL_THE_DICE: '@@socket/EVENT_ROLL_THE_DICE',
  SOCKET_EVENT_DICE_RESULT: '@@socket/EVENT_DICE_RESULT',
  SOCKET_EVENT_QUESTION: '@@socket/EVENT_QUESTION',
  SOCKET_EVENT_PLAYER_POSITION: '@@socket/EVENT_PLAYER_POSITION',
  SOCKET_EVENT_GAME_OVER: '@@socket/EVENT_GAME_OVER',
};

export default function createSocketToStoreEnhancer(socket) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    const store = createStore(reducer, preloadedState, enhancer);
    const dispatch = store.dispatch;
    const on = socket.on.bind(socket);

    on('connect', () => dispatch(({
      type: ActionTypes.SOCKET_CONNECTED,
    })));

    on('error', () => dispatch(({
      type: ActionTypes.SOCKET_ERROR,
    })));

    socket.on('login', () => dispatch(({
      type: ActionTypes.SOCKET_EVENT_LOGIN,
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

    return store;
  };
}
