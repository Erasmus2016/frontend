import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import cs from 'react-intl/locale-data/cs';

const langs = {
  cs: require('../lang/cs.json'),
  en: require('../lang/en.json'),
  de: require('../lang/de.json')
}

// https://github.com/yahoo/react-intl/wiki/API#addlocaledata
addLocaleData([...en, ...de, ...cs]);

export default class Intl extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    const { children } = this.props;
    const lang = 'en';

    return (
      <IntlProvider
        locale={lang}
        messages={langs[lang]}
      >
        {children}
      </IntlProvider>
    );
  }

}
