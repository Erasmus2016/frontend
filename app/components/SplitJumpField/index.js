import React, { PropTypes } from 'react';
import styled from 'styled-components';
import JumpField from 'components/JumpField';

const Container = styled.div`
    position: relative;
`;

const JumpFieldContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

function SplitJumpField({ color1, color2, size }) {
    return (
        <Container style={{
            width: size,
            height: size
        }}>
            <JumpFieldContainer style={{
                height: `calc(${size} / 2)`,
                overflow: "hidden",
                zIndex: "2"
            }}>
                <JumpField size={size} color={color1} />
            </JumpFieldContainer>
            <JumpFieldContainer>
                <JumpField size={size} color={color2} />
            </JumpFieldContainer>
        </Container>
    );
}

SplitJumpField.propTypes = {
    size: PropTypes.string.isRequired,
    color1: PropTypes.string,
    color2: PropTypes.string
};

export default SplitJumpField;
