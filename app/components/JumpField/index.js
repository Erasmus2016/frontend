import React, { PropTypes } from 'react';
import jumpFieldRed from 'assets/steps-pink.png';
import jumpFieldYellow from 'assets/steps-yellow.png';
import jumpFieldGreen from 'assets/steps-green.png';
import jumpFieldBlue from 'assets/steps-blue.png';
import jumpFieldNormal from 'assets/steps-original.png';

const getImage = (color) => {
    switch (color) {
        case 'red':
            return jumpFieldRed;
        case 'yellow':
            return jumpFieldYellow;
        case 'green':
            return jumpFieldGreen;
        case 'blue':
            return jumpFieldBlue;
        default:
            return jumpFieldNormal;
    }
};

function JumpField({ color, size }) {
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

JumpField.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default JumpField;