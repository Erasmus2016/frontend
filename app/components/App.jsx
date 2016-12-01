import Component from 'react-pure-render/component';
import React from 'react';
import Intl from './Intl';
import TranslationExample from './TranslationExample';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducer';
import { changeLanguage } from '../redux/actions';
import SocketAdapter from './SocketAdapter';
import Header from './Header';
import Map from './Map';
import map from './map';

require('./App.css');

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Intl>
          <div>
            <Header />
              <SocketAdapter endpoint='http://localhost:1234'>
                  <Map data={map} />
                <TranslationExample />
              </SocketAdapter>
          </div>
        </Intl>
      </Provider>
    );
  }
}
