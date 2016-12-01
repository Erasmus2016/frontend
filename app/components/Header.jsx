import Component from 'react-pure-render/component';
import React from 'react';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <span className="text">Barmania</span>
        <div className="glowbox" />
      </div>
    );
  }

}
