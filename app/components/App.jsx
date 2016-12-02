import Component from 'react-pure-render/component';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import io from 'socket.io-client';
import Intl from './Intl';
import reducer from '../redux/reducer';
import { changeLanguage } from '../redux/actions';
import Header from './Header';
import Map from './Map';
import map from './map';
import JoinScreen from './JoinScreen';
import connectSocketToStore from '../lib/connectSocketToStore';

// window.io is for development
const socket = window.io = io('https://barmania.eu');

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

  render() {

    return (
      <Provider store={store}>
        <Intl>
          <div>
            <Header />
            {true ? <JoinScreen />
            : <Map data={map} />}
          </div>
        </Intl>
      </Provider>
    );
  }
}
