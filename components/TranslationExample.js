import React from 'react';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  b: {
    id: 'asdaasd.fdshjh.dfs',
    defaultMessage: 'SDA'
  },
  cded: {
    id: 'qwe.bb.cxv',
    defaultMessage: 'sdadsa'
  },
});

export default class Abc extends React.Component {

  render() {
    return (
      <div>
        <FormattedMessage {...messages.b} /><br />
        <FormattedMessage {...messages.cded} />
      </div>
    );
  }

}
