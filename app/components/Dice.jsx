import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rollTheDice } from '../redux/actions';
import { injectIntl} from 'react-intl';

class Dice extends Component {

  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    rollTheDice:PropTypes.func.isRequired
  };

  render() {
      const {
          isActive,
          rollTheDice
      } = this.props;
      
    return (
        <div
            className={this.props.isActive ? 'dice' : 'diceOff'}
            onClick={(e) => {e.preventDefault(); rollTheDice();}}
        >
        </div>
    );
  }

}
export default injectIntl(connect(state => ({
    dice: state.dice.status
}), { rollTheDice })(Dice));