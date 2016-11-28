import React, {PropTypes} from 'react';
import {IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import cs from 'react-intl/locale-data/cs';

// https://github.com/yahoo/react-intl/wiki/API#addlocaledata
addLocaleData([...en, ...de, ...cs]);

/*
  We will load translation files via import, but it doesn't work in 1.1.2
  https://github.com/zeit/next.js/pull/298
*/

export default class Intl extends React.Component {

  static propTypes = {
    lang: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  render() {
    const { lang, children } = this.props;

    return (
      <IntlProvider
        locale={lang}
        messages={{/* Translations goes here */}}
      >
        {children}
      </IntlProvider>
    );
  }

}
