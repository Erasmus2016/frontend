import React, { PropTypes } from 'react';

export default class OtherTest extends React.Component{

  static propTypes = {
    a: PropTypes.string
  }

  render() {
    return <div>{this.props.a}</div>;
  }

}
