import React, { PropTypes } from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import { connect } from 'react-redux';
import { edit } from './actions';

const messages = defineMessages({
  b: {
    id: 'a.b.c',
    defaultMessage: 'sadasd'
  }
});

class TranslationExample extends React.Component {

  render() {
    return (
      <h1>
        <FormattedMessage {...messages.b} /><br />
        {this.props.edited}
        <button onClick={this.props.edit}>
          edit
        </button>
      </h1>
    );
  }

}

export default connect(state => ({edited: state.isEdited}), {edit})(TranslationExample);
