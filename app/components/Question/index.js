/**
 *
 * Question
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import card1 from 'assets/card1.png';
import card2 from 'assets/card2.png';
import card3 from 'assets/card3.png';
import front from 'assets/cardFront.png';
import messages from './messages';
import InfoContainer from 'components/InfoContainer';

const QuestionContainer = styled(InfoContainer)`
    width: 70%;
    height: 70%;
    text-align:center;
`;

const Card = styled.div`
    width: 25%;
    height: 90%;
    margin: 1%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    display:inline-block;
    
`;

const Card1 = styled(Card)`
  /*background-image: url(${card1});*/
`;
const Card2 = styled(Card)`
  /*background-image: url(${card2});*/
`;
const Card3 = styled(Card)`
  /*background-image: url(${card3});*/
`;

function QuestionScreen({ isQuestion, setDifficulty, onSetDifficulty, question, answers, difficulty, onSelectAnswer, answer}) {

  const diff = diff => () => {
    console.log('difficulty: '+difficulty);
    //if(difficulty != 0)
      onSetDifficulty(diff)
  };

  const setAnswer = id => (e) => {
    e.preventDefault();
    onSelectAnswer(id);
  };

  const drawQuestion = (id) => {
    if(id != difficulty)
      return null;

    return (
      <div>
          <h4>{question}</h4>
          <ol>
            {answers.map((answer,i) => <li key={i} className={(i==answer) ? 'active':''} onClick={setAnswer(i)}>{answer}</li>)}
          </ol>
      </div>
    );
  };

  return (
    <div>
        <QuestionContainer id="question" data-difficulty={difficulty}>
            <Card1 data-id="1" className="flip-container" onClick={diff(1)} >
                <div className="flipper">
                    <div className="front" style={{backgroundImage:`url(${card1})`}}></div>
                    <div className="back" style={{backgroundImage:`url(${front})`}}>
                      {drawQuestion(1)}
                    </div>
                </div>
            </Card1>
            <Card2 data-id="2" className="flip-container" onClick={diff(2)} >
                <div className="flipper">
                    <div className="front" style={{backgroundImage:`url(${card2})`}}></div>
                    <div className="back" style={{backgroundImage:`url(${front})`}}>
                      {drawQuestion(2)}
                    </div>
                </div>
            </Card2>
            <Card3 data-id="3" className="flip-container" onClick={diff(3)} >
                <div className="flipper">
                    <div className="front" style={{backgroundImage:`url(${card3})`}}></div>
                    <div className="back" style={{backgroundImage:`url(${front})`}}>
                      {drawQuestion(3)}
                    </div>
                </div>
            </Card3>
          {/*<FormattedMessage {...messages.header} />*/}
        </QuestionContainer>
    </div>
  );
}

QuestionScreen.propTypes = {
  setDifficulty: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.array,
  difficulty: PropTypes.number,
};

export default QuestionScreen;