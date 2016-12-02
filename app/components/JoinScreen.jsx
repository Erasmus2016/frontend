import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { joinTheServer, joinSetColor, joinSetName, joinSetCategory } from '../redux/actions';
import { injectIntl, intlShape, FormattedMessage, defineMessages } from 'react-intl';

const colors = ['green', 'pink', 'yellow', 'blue'];

const messages = defineMessages({
  login: {
    id: 'join.action',
    defaultMessage: 'Join'
  },
  categoryAll: {
    id: 'join.category.all',
    defaultMessage: 'All'
  }
});

class JoinScreen extends Component {

  static propTypes = {
    intl: intlShape,
    category: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    avalibleColors: PropTypes.array.isRequired,
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
      avalibleColors,
      joinTheServer,
      joinSetColor,
      joinSetName,
      joinSetCategory
    } = this.props;

    return (
      <div className="join">
        <div className="colors">
          <div style={{ display: 'inline-block' }}>
            {colors.map((c) =>
              <div
                key={c}
                onClick={() => joinSetColor(c)}
                className={classNames('color', c, {
                  disabled: !avalibleColors.includes(c),
                  active: color === c
                })}
              />
            )}
            <div className="clear-both"/>
          </div>
          <form onSubmit={(e) => {e.preventDefault(); joinTheServer();}}>
            <label>Nick: </label>
            <input onChange={({ target: { value } }) => joinSetName(value)} />
            <br />
            <label>Category: </label>
            <select
              onChange={({ target: { value } }) => joinSetCategory(value)}
              value={{category}}
            >
              <option value="all">
                {intl.formatMessage(messages.categoryAll)}
              </option>
            </select>
            <br />
            <button type="submit" disabled={!color || !name}>
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
  avalibleColors: state.join.avalibleColors
}), { joinTheServer, joinSetColor, joinSetName, joinSetCategory })(JoinScreen));
