import styled from 'styled-components';

const CardStyled = styled.div`
  margin: 10px 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  box-sizing: content-box;
  border: 2px solid black;
  filter: opacity(65%);

  :hover {
    transition: 1s ease-in-out;
    filter: opacity(110%);
    transform: scale(1.03);
    border: 2px solid white;
  }
`;

export default CardStyled;
