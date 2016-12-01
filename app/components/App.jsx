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

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {

  render() {


    return (
      <Provider store={store}>
        <Intl>
          <div>
            <Header />
            <Map data={map} />
          </div>
        </Intl>
      </Provider>
    );
  }
}
