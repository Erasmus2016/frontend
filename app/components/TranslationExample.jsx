import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  b: {
    id: 'a.b.c',
    defaultMessage: 'sadasd'
  }
});

export default class TranslationExample extends React.Component {

  render() {
    return (
      <h1>
        <FormattedMessage {...messages.b} />
      </h1>
    );
  }

}
