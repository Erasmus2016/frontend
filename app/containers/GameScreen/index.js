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
import headlineImage from 'assets/barmania_headline.png';
import PickRoom from 'containers/PickRoom';
import { ActionTypes } from 'utils/socketMiddleware';
import styled from 'styled-components';




export class GameScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    canLogin: PropTypes.bool.isRequired,
    map: PropTypes.array,
    players: PropTypes.array,
    color: PropTypes.string.isRequired,
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
    answer: PropTypes.number,
    difficulty: PropTypes.number,
  };



  render() {
    const {
      canLogin,
      map,
      players,
      color,
      pickMode,
      canRollTheDice,
      diceResult,
      onRollTheDice,
      onSetDifficulty,
      onSelectAnswer,
      question,
      isQuestion,
      answers,
      answer,
      setDifficulty,
      difficulty,
    } = this.props;

    /*const Headline = styled.div`
  background-image: url(${headlineImage});
  height: 11.7px;
  width: 55.4px;
  margin: 0 auto;
`;*/
    const Headline = styled.h1`
    font-weight:normal;
    color:#fcc2d8;
    text-align:center;
    text-shadow: 0px 0px 17px rgba(255, 52, 132, 1);
    font-family: beon;
  `;
    switch (color){
      case 'blue':
        var ColoredHeadline = styled(Headline)`
        color:#c1dcff;
        text-shadow: 0px 0px 17px rgba(0, 82, 255, 1);
      `;
      break;
      case 'green':
        var ColoredHeadline = styled(Headline)`
        color:#caffc1;
        text-shadow: 0px 0px 17px rgba(0, 255, 0, 1);
      `;
      break;
      case 'yellow':
        var ColoredHeadline = styled(Headline)`
        color:#f6ff5e;
        text-shadow: 0px 0px 17px rgba(240, 235, 29, 1);
      `;
      break;
      default:
        var ColoredHeadline = styled(Headline)`
        color:#fcc2d8;
        text-shadow: 0px 0px 17px rgba(255, 52, 132, 1);
      `;
      break;
    }


    const isGame = Boolean(map);
    const isJoininScreen = canLogin && !isGame;
    const isPickScreen = pickMode;
    const isLoading = !isJoininScreen && !isGame && !isPickScreen;
    const isQuestionScreen = isQuestion || setDifficulty;

    return (
      <div>
        <ColoredHeadline>
          BARMANIA
        </ColoredHeadline>
        {isJoininScreen ? <JoininScreen /> : ''}
        {isLoading ? <Loading /> : ''}
        {isGame ?
          <div>
            {console.log(color)}
            <GameMap map={map} players={players} />
            {isQuestionScreen ? <Question question={question} answers={answers} difficulty={difficulty} setDifficulty={setDifficulty} onSelectAnswer={onSelectAnswer} onSetDifficulty={onSetDifficulty} answer={answer} /> : ''}
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
