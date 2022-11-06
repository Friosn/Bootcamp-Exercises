import React from 'react';
import styled from 'styled-components';
const HeaderStyled = styled.header`
  width: 100%;
  height: 3rem;
  background-color: #414141;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const HeaderTitleComponent = ({ children }) => {
  return (
    <HeaderStyled>
      <h2>{children}</h2>
    </HeaderStyled>
  );
};
export default HeaderTitleComponent;
