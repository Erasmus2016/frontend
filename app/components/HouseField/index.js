import React, { PropTypes } from 'react';
import houseFieldRed from 'assets/PinkBar.png';
import houseFieldYellow from 'assets/YellowBar.png';
import houseFieldGreen from 'assets/GreenBar.png';
import houseFieldBlue from 'assets/BlueBar.png';
import houseFieldNormal from 'assets/EmptyBar.png';

const getImage = (color) => {
    switch (color) {
        case 'red':
            return houseFieldRed;
        case 'yellow':
            return houseFieldYellow;
        case 'green':
            return houseFieldGreen;
        case 'blue':
            return houseFieldBlue;
        default:
            return houseFieldNormal;
    }
};

function HouseField({ color, size }) {
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

HouseField.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default HouseField;
