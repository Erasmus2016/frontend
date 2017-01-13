import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rollTheDice } from '../redux/actions';
import { injectIntl} from 'react-intl';

class Dice extends Component {

    static propTypes = {
        dice: PropTypes.bool.isRequired,
        rollTheDice:PropTypes.func.isRequired,
        diceResult:PropTypes.number
    };

    render() {
        const {
            dice,
            rollTheDice,
            diceResult
        } = this.props;

        return (
            <div>
                <div
                    className={this.props.dice ? 'dice' : 'diceOff'}
                    onClick={(e) => {e.preventDefault(); rollTheDice();}}/>
                <div className='diceResult'>
                    {(this.props.diceResult > 0) ? this.props.diceResult : ''}
                </div>
            </div>
        );
    }

}

export default injectIntl(connect(state => ({
    dice: state.dice.status,
    diceResult: state.dice.result
}), { rollTheDice })(Dice));