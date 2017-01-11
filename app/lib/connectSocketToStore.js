import * as actions from '../redux/actions';

export default function connectSocketToStore(socket, store) {

  socket.on('connect', () => {
    console.log('connect');
  });

  socket.on('error', () => {
    console.log('error');
  });

  socket.on('available-colors', (colors) => {
    console.log('available-colors', colors);
    store.dispatch(actions.setAvailableColors(colors));
  });

  socket.on('map', () => {
    console.log('map');
  });

  socket.on('roll-the-dice', () => {
    console.log('roll-the-dice');
  });

  socket.on('dice-result', () => {
    console.log('dice-result');
  });

  socket.on('game-over', () => {
    console.log('game-over');
  });

  socket.on('question', () => {
    console.log('question');
  });

  socket.on('player-position', () => {
    console.log('player-position');
  });

}
