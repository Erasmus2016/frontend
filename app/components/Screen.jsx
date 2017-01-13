import Component from 'react-pure-render/component';
import { Provider } from 'react-redux';
import React, { PropTypes } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import io from 'socket.io-client';
import Intl from './Intl';
import reducer from '../redux/reducer';
import { changeLanguage } from '../redux/actions';
import Header from './Header';
import Map from './Map';
import JoinScreen from './JoinScreen';
import connectSocketToStore from '../lib/connectSocketToStore';
import { connect } from 'react-redux';


class Screen extends Component {
    static propTypes = {
        isJoinScreen: PropTypes.bool,
        map: PropTypes.array.isRequired
    };

    render() {

        const {
            isJoinScreen,
            map
        }=this.props;

        return (

            <div>
                <Header />
                {isJoinScreen ? <JoinScreen />
                    : <Map data={map} />}
            </div>

        );
    }
}

export default connect(state => ({
    isJoinScreen:state.join.status != 'CONNECTED',
    map:state.app.map
}))(Screen);
