import React from 'react';
import Helmet from 'react-helmet';
import Intl from './Intl';
import TranslationExample from './TranslationExample';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

require('./App.css');

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {

  render() {
    // const lang = window.location.hash.replace("#", "");

    return (
      <Provider store={store}>
        <Intl lang="en">
          <div>
            <Helmet
              title="Test"
            />
            <TranslationExample />
          </div>
        </Intl>
      </Provider>
    );
  }
}
