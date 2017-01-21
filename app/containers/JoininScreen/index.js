/*
 *
 * JoininScreen
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectJoininScreen from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { setNick, setColor, setCategory } from './actions';
import { ActionTypes } from 'utils/socketMiddleware';

export class JoininScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    nick: PropTypes.string,
    color: PropTypes.string,
    category: PropTypes.string,
    availableColors: PropTypes.array.isRequired,
    onJoinIn: PropTypes.func.isRequired,
    onSetNick: PropTypes.func.isRequired,
    onSetColor: PropTypes.func.isRequired,
    onSetCategory: PropTypes.func.isRequired,
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
      category,
      availableColors,
      onSetNick,
      onSetColor,
      onSetCategory,
    } = this.props;

    const disableJoinin = !availableColors.includes(color) || !nick;

    return (
      <div>
        <Helmet title="Join in" />
        <FormattedMessage {...messages.header} />
        <form onSubmit={this.onFormSubmit}>
          <input
            value={nick}
            type="text"
            onChange={(e) => onSetNick(e.target.value)}
          />
          <select value={color} onChange={(e) => onSetColor(e.target.value)}>
            {availableColors.map((color_) =>
              <option key={color_} value={color_}>{color_}</option>
            )}
          </select>
          <select value={category} onChange={(e) => onSetCategory(e.target.value)}>
            <option value="all">All</option>
          </select>
          <button type="submit" disabled={disableJoinin}>Join in</button>
        </form>
      </div>
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
