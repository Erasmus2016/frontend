import Component from 'react-pure-render/component';
import React from 'react';
import Intl from './Intl';
import TranslationExample from './TranslationExample';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducer';
import { changeLanguage } from '../redux/actions';
import Header from './Header';
import Map from './Map';
import map from './map';
import JoinScreen from './JoinScreen';
import createLogger from 'redux-logger';
import io from 'socket.io-client';
import connectSocketToStore from '../lib/connectSocketToStore';

const socket = io('http://localhost:80');

const store = createStore(
  reducer,
  applyMiddleware(
    thunk.withExtraArgument({
      emit: socket.emit
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
            {false ? <JoinScreen />
            : <Map data={map} />}
          </div>
        </Intl>
      </Provider>
    );
  }
}
