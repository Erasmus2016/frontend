import React from 'react';
import Intl from '../components/Intl';
import TranslationExample from '../components/TranslationExample';
import Helmet from 'react-helmet';

export default () => (
  <Intl lang="en">
    <div>
      <Helmet
        title="Test"
      />
      <TranslationExample />
    </div>
  </Intl>
)
