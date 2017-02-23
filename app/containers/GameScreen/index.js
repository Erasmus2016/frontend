/*
 *
 * GameScreen
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import selectGameScreen from './selectors';
import JoininScreen from 'containers/JoininScreen';
import Loading from './Loading';
import GameMap from 'components/GameMap';
import DiceBox from 'components/DiceBox';
import PickRoom from 'containers/PickRoom';
import { ActionTypes } from 'utils/socketMiddleware';

export class GameScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    canLogin: PropTypes.bool.isRequired,
    map: PropTypes.array,
    players: PropTypes.array,
    pickMode: PropTypes.bool,
    canRollTheDice: PropTypes.bool.isRequired,
    diceResult: PropTypes.number,
    onRollTheDice: PropTypes.func.isRequired,
  };

  render() {
    const {
      canLogin,
      map,
      players,
      pickMode,
      canRollTheDice,
      diceResult,
      onRollTheDice,
    } = this.props;

    const isGame = Boolean(map);
    const isJoininScreen = canLogin && !isGame;
    const isPickScreen = pickMode;
    const isLoading = !isJoininScreen && !isGame && !isPickScreen;

    return (
      <div>
        {isJoininScreen ? <JoininScreen /> : ''}
        {isLoading ? <Loading /> : ''}
        {isGame ?
          <div>
            <DiceBox
              canRollTheDice={canRollTheDice}
              diceResult={diceResult}
              onRollTheDice={onRollTheDice}
            />
            <GameMap map={map} players={players} />
          </div>
        : ''}
        {isPickScreen ? <PickRoom /> : ''}
      </div>
    );
  }
}

const mapStateToProps = selectGameScreen();

const mapDispatchToProps = (dispatch) => ({
  onRollTheDice: () => dispatch({ type: ActionTypes.SOCKET_EMIT_ROLL_THE_DICE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
