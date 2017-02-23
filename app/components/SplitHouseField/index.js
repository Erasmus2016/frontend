import React, { PropTypes } from 'react';
import styled from 'styled-components';
import HouseField from 'components/HouseField';

const Container = styled.div`
    position: relative;
`;

const HouseFieldContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

function SplitHouseField({ color1, color2, size }) {
    return (
        <Container style={{
            width: size,
            height: size
        }}>
            <HouseFieldContainer style={{
                height: `calc(${size} / 2)`,
                overflow: "hidden",
                zIndex: "2"
            }}>
                <HouseField size={size} color={color1} />
            </HouseFieldContainer>
            <HouseFieldContainer>
                <HouseField size={size} color={color2} />
            </HouseFieldContainer>
        </Container>
    );
}

SplitHouseField.propTypes = {
    size: PropTypes.string.isRequired,
    color1: PropTypes.string,
    color2: PropTypes.string
};

export default SplitHouseField;
