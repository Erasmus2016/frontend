import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rollTheDice } from '../redux/actions';
import { injectIntl} from 'react-intl';

class Dice extends Component {

  static propTypes = {
    dice: PropTypes.bool.isRequired,
    rollTheDice:PropTypes.func.isRequired
  };

  render() {
      const {
          dice,
          rollTheDice
      } = this.props;

    return (
        <div
            className={this.props.dice ? 'dice' : 'diceOff'}
            onClick={(e) => {e.preventDefault(); rollTheDice();}}
        >
        </div>
    );
  }

}

export default injectIntl(connect(state => ({
    dice: state.dice.status
}), { rollTheDice })(Dice));