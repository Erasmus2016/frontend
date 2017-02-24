import { createSelector } from 'reselect';
import { selectModeSent } from '../PickRoom/selectors';

const selectCanLogin = () =>
  (state) => state.getIn(['game', 'data', 'canLogin'], false);

const selectAvalibleColors = () =>
  (state) => state.getIn(['game', 'data', 'availableColors'])
                   .filter((c) => Boolean(c));

const selectMap = () =>
  (state) => state.getIn(['game', 'data', 'map']);

const selectCanRollTheDice = () =>
  (state) => state.getIn(['game', 'data', 'canRollTheDice']);

const selectSetDifficulty = () =>
    (state) => state.getIn(['game', 'data', 'setDifficulty']);

const selectQuestion = () =>
  (state) => state.getIn(['game', 'data', 'question']);

const selectIsQuestion = () =>
  (state) => state.getIn(['game', 'data', 'isQuestion']);

const selectAnswers = () =>
  (state) => state.getIn(['game', 'data', 'answers']);

const selectDiceResult = () =>
  (state) => state.getIn(['game', 'data', 'diceResult']);

const selectDifficulty = () =>
  (state) => state.getIn(['game', 'data', 'difficulty']);

const selectPlayers = () =>
  (state) => state.getIn(['game', 'data', 'players']);

const selectCorrectAnswer = () =>
  (state) => state.getIn(['game', 'data', 'answer']);

/**
 * Default selector used by GameScreen
 */

const selectGameScreen = () => createSelector(
  selectCanLogin(),
  selectMap(),
  selectCanRollTheDice(),
  selectDiceResult(),
  selectPlayers(),
  selectSetDifficulty(),
  selectQuestion(),
  selectIsQuestion(),
  selectAnswers(),
  selectDifficulty(),
  selectModeSent(),
  selectCorrectAnswer(),
  (canLogin, map, canRollTheDice, diceResult, players, setDifficulty, question, isQuestion, answers, difficulty, modeSent, answer) => ({
    canLogin,
    map: map ? map.toJS() : null,
    canRollTheDice,
    diceResult,
    players: players ? players.toJS() : null,
    setDifficulty,
    question,
    isQuestion,
    answers,
    difficulty,
    pickMode: !modeSent,
    answer,
  })
);

export default selectGameScreen;
export {
  selectCanLogin,
  selectAvalibleColors,
  selectMap,
  selectCanRollTheDice,
  selectDiceResult,
  selectPlayers,
  selectSetDifficulty,
  selectQuestion,
  selectIsQuestion,
  selectAnswers,
  selectDifficulty,
  selectCorrectAnswer,
};
