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

export class GameScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    canLogin: PropTypes.bool.isRequired,
  };

  render() {
    const { canLogin } = this.props;

    return (
      <div>
        {
          canLogin
          ? <JoininScreen />
          : <Loading />
        }
      </div>
    );
  }
}

const mapStateToProps = selectGameScreen();

export default connect(mapStateToProps)(GameScreen);
