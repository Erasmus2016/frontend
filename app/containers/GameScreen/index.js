/*
 *
 * GameScreen
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import selectGameScreen from './selectors';
import JoininScreen from 'containers/JoininScreen';
import Question from 'components/Question';
import Loading from './Loading';
import GameMap from 'components/GameMap';
import DiceBox from 'components/DiceBox';
import PickRoom from 'containers/PickRoom';
import { ActionTypes } from 'utils/socketMiddleware';
import styled from 'styled-components';

const headline = styled.h1`
  
`;

export class GameScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    canLogin: PropTypes.bool.isRequired,
    map: PropTypes.array,
    players: PropTypes.array,
    pickMode: PropTypes.bool,
    canRollTheDice: PropTypes.bool.isRequired,
    onSelectAnswer: PropTypes.func.isRequired,
    diceResult: PropTypes.number,
    onRollTheDice: PropTypes.func.isRequired,
    onSetDifficulty: PropTypes.func.isRequired,
    setDifficulty: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
    isQuestion: PropTypes.bool.isRequired,
    answers: PropTypes.array,
    difficulty: PropTypes.number,
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
      onSetDifficulty,
      onSelectAnswer,
      question,
      isQuestion,
      answers,
      setDifficulty,
      difficulty,
    } = this.props;

    const isGame = Boolean(map);
    const isJoininScreen = canLogin && !isGame;
    const isPickScreen = pickMode;
    const isLoading = !isJoininScreen && !isGame && !isPickScreen;
    const isQuestionScreen = isQuestion || setDifficulty;

    return (
      <div>
        {isJoininScreen ? <JoininScreen /> : ''}
        {isLoading ? <Loading /> : ''}
        {isGame ?
          <div>
            <GameMap map={map} players={players} />
            {console.log(question)}
            {console.log(answers)}
            {isQuestionScreen ? <Question question={question} answers={answers} difficulty={difficulty} setDifficulty={setDifficulty} onSelectAnswer={onSelectAnswer} onSetDifficulty={onSetDifficulty} /> : ''}
            <DiceBox
              canRollTheDice={canRollTheDice}
              diceResult={diceResult}
              onRollTheDice={onRollTheDice}
            />
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
  onSelectAnswer: (id) => dispatch({type: ActionTypes.SOCKET_EMIT_ANSWER , payload:{id}}),
  onSetDifficulty: (difficulty) => dispatch ({ type: ActionTypes.SOCKET_EMIT_SET_DIFFICULTY, payload:{difficulty}}),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
