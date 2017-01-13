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
import Screen from './Screen';
import connectSocketToStore from '../lib/connectSocketToStore';
import { connect } from 'react-redux';

// window.io is for development
const socket = window.io = io('https://api.barmania.eu');

const store = createStore(
  reducer,
  applyMiddleware(
    thunk.withExtraArgument({
      emit: socket.emit.bind(socket)
    }),
    createLogger()
  )
);

connectSocketToStore(socket, store);

export default class App extends Component {
    static propTypes = {
        isJoinScreen: PropTypes.bool
    };

  render() {

      const {
          isJoinScreen
      }=this.props;

    return (
      <Provider store={store}>
        <Intl>
            <Screen/>
        </Intl>
      </Provider>
    );
  }
}
