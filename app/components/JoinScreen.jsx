import Component from 'react-pure-render/component';
import React from 'react';
import classNames from 'classnames';

const colors = ['green', 'pink', 'yellow', 'blue'];

export default class JoinScreen extends Component {

  render() {

    return (
      <div className="join">
        <div className="colors">
          {colors.map((color) =>
            <div
              key={color}
              onClick={() => console.log('joining', color)}
              className={classNames('color', color)}
            />
          )}
          <div className="clear-both"/>
        </div>
      </div>
    );
  }

}
