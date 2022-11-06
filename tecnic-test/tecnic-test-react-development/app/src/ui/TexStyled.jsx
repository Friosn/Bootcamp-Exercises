import React from 'react';
import styled from 'styled-components';

const TextStyled = styled.text`
  color: ${(props) => (props.color === 'grey' ? 'grey' : 'white')};
`;

const TextComponent = ({ children, color }) => {
  return <TextStyled color={color}>{children}</TextStyled>;
};

export default TextComponent;
