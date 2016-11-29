import React from 'react';
import Helmet from 'react-helmet';
import Intl from './Intl';
import TranslationExample from './TranslationExample';

require('./App.css');

export default class App extends React.Component {

  render() {
    return (
      <Intl lang="en">
        <div>
          <Helmet
            title="Test"
          />
          <TranslationExample />
        </div>
      </Intl>
    );
  }
}
