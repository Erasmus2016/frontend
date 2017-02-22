import React, { PropTypes } from 'react';

function House({ color, size }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        display: 'inline-block',
      }}
    />
  );
}

House.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default House;
