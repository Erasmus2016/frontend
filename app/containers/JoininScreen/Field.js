import React, { PropTypes } from 'react';
import FieldRaw from 'components/Field';
import classNames from 'classnames';
import styled from 'styled-components';

const FieldContainer = styled.div`
  width: 10vmin;
  height: 10vmin;
  display: inline-block;
  float: left;
  margin: 1vmin;
  transition: linear 100ms;
  cursor: pointer;

  &:hover {
    margin: 0vmin;
    width: 12vmin;
    height: 12vmin;
  }

  &.active {
    margin: 0vmin;
    width: 12vmin;
    height: 12vmin;
  }

  &.disabled {
    opacity: 0.5;
  }
`;

const Field = ({ color, active, disabled, onClick }) => (
  <FieldContainer onClick={onClick} className={classNames({ active, disabled })}>
    <FieldRaw color={color} size="100%" />
  </FieldContainer>
);

Field.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Field;
