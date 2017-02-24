/*
 *
 * JoininScreen
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import selectJoininScreen from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { setNick, setColor, setCategory } from './actions';
import Field from './Field';
import { ActionTypes } from 'utils/socketMiddleware';
import InfoContainer from 'components/InfoContainer';

const PinkStyle = `
  font-size: 3vh;
  margin-top: 1vh;
  background-color: #e99edb;
  border: none;
  color: white;
  padding: 1vh;
  margin-right: 5px;
  border-radius: 0.4em;
  transition: 200ms linear;
`;

const Input = styled.input`
  ${PinkStyle}

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  ${PinkStyle}
  cursor: pointer;

  &[disabled] {
    opacity: 0.2;
    cursor: auto;
  }
`;

export class JoininScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    nick: PropTypes.string,
    color: PropTypes.string,
    category: PropTypes.string,
    availableColors: PropTypes.array.isRequired,
    onJoinIn: PropTypes.func.isRequired,
    onSetNick: PropTypes.func.isRequired,
    onSetColor: PropTypes.func.isRequired,
    /* onSetCategory: PropTypes.func.isRequired, */
  };

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { nick, color, category, onJoinIn } = this.props;
    onJoinIn({ nick, color, category });
  }

  render() {
    const {
      nick,
      color,
      /* category, */
      availableColors,
      onSetNick,
      onSetColor,
      /* onSetCategory, */
    } = this.props;

    const disableJoinin = !availableColors.includes(color) || !nick;
    const colors = ['red', 'yellow', 'blue', 'green'];

    return (
      <InfoContainer>
        <Helmet title="Join in" />
        <FormattedMessage {...messages.selectColor} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}>
            {
              colors.map((c) => {
                const isDisabled = !availableColors.includes(c);
                const isActive = c === color;
                return (
                  <Field
                    key={c}
                    color={c}
                    size="100%"
                    onClick={() => !isDisabled && onSetColor(c)}
                    active={isActive}
                    disabled={isDisabled}
                  />
                );
              })
            }
            <div style={{ clear: 'both' }} />
          </div>
        </div>
        <form onSubmit={this.onFormSubmit}>
          <FormattedMessage {...messages.setNick} />
          <br />
          <Input
            value={nick}
            type="text"
            autofocus="autofocus"
            onChange={(e) => onSetNick(e.target.value)}
          />
          <br />
          <Button type="submit" disabled={disableJoinin}>
            <FormattedMessage {...messages.joinIn} />
          </Button>
        </form>
      </InfoContainer>
    );
  }

}

const mapStateToProps = selectJoininScreen();

const mapDispatchToProps = (dispatch) => ({
  onJoinIn: ({ nick, color, category }) => dispatch({
    type: ActionTypes.SOCKET_EMIT_LOGIN,
    payload: { nick, color, category },
  }),
  onSetNick: (nick) => dispatch(setNick(nick)),
  onSetColor: (color) => dispatch(setColor(color)),
  onSetCategory: (category) => dispatch(setCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JoininScreen);
