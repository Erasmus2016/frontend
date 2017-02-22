import React, { PropTypes } from 'react';
import fieldRed from '../../assets/field_pink.png';
import fieldYellow from '../../assets/field_yellow.png';
import fieldGreen from '../../assets/field_green.png';
import fieldBlue from '../../assets/field_blue.png';
import fieldNormal from '../../assets/field_normal.png';

const getImage = (color) => {
  switch (color) {
    case 'red':
      return fieldRed;
    case 'yellow':
      return fieldYellow;
    case 'green':
      return fieldGreen;
    case 'blue':
      return fieldBlue;
    default:
      return fieldNormal;
  }
};

function Field({ color, size }) {
  return (
    <div
      style={{
        backgroundImage: `url(${getImage(color)})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        width: size,
        height: size,
        display: 'inline-block',
      }}
    />
  );
}

Field.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Field;
