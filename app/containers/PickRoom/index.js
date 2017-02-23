/*
 *
 * PickRoom
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import selectPickRoom from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { setRoomName } from './actions';
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

  &:focus {
    outline: 0;
  }
`;

export class PickRoom extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    room: PropTypes.string,
    ready: PropTypes.bool,
    modeSent: PropTypes.bool,
    onPicked: PropTypes.func.isRequired,
    onSetRoomName: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onMatchmakingPick = this.onMatchmakingPick.bind(this);
    this.onRoomPick = this.onRoomPick.bind(this);
  }

  onMatchmakingPick() {
    const { onPicked } = this.props;
    onPicked();
  }

  onRoomPick() {
    const { room, onPicked } = this.props;
    onPicked({ roomName: room });
  }

  render() {
    const {
      room,
      ready,
      modeSent,
      onSetRoomName,
    } = this.props;

    const canJoin = modeSent;
    const canJoinRoom = !room || canJoin;

    if (!ready) return <div />;

    return (
      <InfoContainer>
        <Helmet title="Pick room" />
        <Button disabled={canJoin} onClick={this.onMatchmakingPick}>
          <FormattedMessage {...messages.matchmaking} />
        </Button>
        <hr />
        <Input value={room} onChange={(e) => onSetRoomName(e.target.value)} />
        <Button disabled={canJoinRoom} onClick={this.onRoomPick}>
          <FormattedMessage {...messages.joinRoom} />
        </Button>
      </InfoContainer>
    );
  }

}

const mapStateToProps = selectPickRoom();

const mapDispatchToProps = (dispatch) => ({
  onPicked: ({ roomName } = {}) => dispatch({
    type: ActionTypes.SOCKET_EMIT_JOIN_MODE,
    payload: { room: roomName },
  }),
  onSetRoomName: (name) => dispatch(setRoomName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PickRoom);
