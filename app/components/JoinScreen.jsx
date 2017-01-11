import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { joinTheServer, joinSetColor, joinSetName, joinSetCategory } from '../redux/actions';
import { injectIntl, intlShape, FormattedMessage, defineMessages } from 'react-intl';

const colors = ['green', 'red', 'yellow', 'blue'];

const messages = defineMessages({
  login: {
    id: 'join.action',
    defaultMessage: 'Join'
  },
  categoryAll: {
    id: 'join.category.all',
    defaultMessage: 'All'
  },
  color: {
    id: 'join.form.color',
    defaultMessage: 'Color'
  },
  category: {
    id: 'join.form.category',
    defaultMessage: 'Category'
  },
  nick: {
    id: 'join.form.nick',
    defaultMessage: 'Nick'
  }
});

class JoinScreen extends Component {

  static propTypes = {
    intl: intlShape,
    category: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    availableColors: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    joinTheServer: PropTypes.func.isRequired,
    joinSetColor: PropTypes.func.isRequired,
    joinSetName: PropTypes.func.isRequired,
    joinSetCategory: PropTypes.func.isRequired
  };

  render() {
    const {
      intl,
      category,
      name,
      color,
      availableColors,
      status,
      joinTheServer,
      joinSetColor,
      joinSetName,
      joinSetCategory
    } = this.props;

    return (
      <div className="join">
        <div className="colors">
          <div style={{ display: 'inline-block' }}>
            <div><FormattedMessage {...messages.color} />:</div>
            {colors.map((c) =>
              <div
                key={c}
                onClick={() => joinSetColor(c)}
                className={classNames('color', c, {
                  disabled: !availableColors.includes(c),
                  active: color === c
                })}
              />
            )}
            <div className="clear-both"/>
          </div>
          <form onSubmit={(e) => {e.preventDefault(); joinTheServer();}}>
            <label>
              <FormattedMessage {...messages.nick} />:
            </label>
            <input onChange={({ target: { value } }) => joinSetName(value)} />
            <br />
            <label>
              <FormattedMessage {...messages.category} />:
            </label>
            <select
              onChange={({ target: { value } }) => joinSetCategory(value)}
              value={{category}}
            >
              <option value="all">
                {intl.formatMessage(messages.categoryAll)}
              </option>
            </select>
            <br />
            <button type="submit" disabled={!color || !name || status !== 'STAND'}>
              <FormattedMessage {...messages.login} />
            </button>
          </form>
        </div>
      </div>
    );
  }

}

export default injectIntl(connect(state => ({
  color: state.player.color,
  name: state.player.name,
  category: state.app.category,
  availableColors: state.join.availableColors,
  status: state.join.status
}), { joinTheServer, joinSetColor, joinSetName, joinSetCategory })(JoinScreen));
