import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Field from 'components/Field';

const Container = styled.div`
    position: relative;
`;

const FieldContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

function SplitField({ color1, color2, size }) {
    return (
        <Container style={{
            width: size,
            height: size
        }}>
            <FieldContainer style={{
                height: `calc(${size} / 2)`,
                overflow: "hidden",
                zIndex: "2"
            }}>
                <Field size={size} color={color1} />
            </FieldContainer>
            <FieldContainer>
                <Field size={size} color={color2} />
            </FieldContainer>
        </Container>
    );
}

SplitField.propTypes = {
    size: PropTypes.string.isRequired,
    color1: PropTypes.string,
    color2: PropTypes.string
};

export default SplitField;
