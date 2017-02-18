/*
 * LandingPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 * https://github.com/mxstbr/react-boilerplate/issues/1220
 */

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import messages from './messages';
import { doStartGame } from './actions';

class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    onGameStart: PropTypes.func.isRequired,
  }

  render() {
    const { onGameStart } = this.props;

    return (
      <div className="box">
        <h1>
          <FormattedMessage {...messages.placeholder} />
        </h1>
        <p><FormattedMessage {...messages.welcomeText} /></p>
        <br />
        <button onClick={onGameStart}>
          <FormattedMessage {...messages.play} />
        </button>
      </div>
    );
  }
}

export default connect(null, {
  onGameStart: doStartGame,
})(LandingPage);
