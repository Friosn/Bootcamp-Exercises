import styled from 'styled-components';

const PopUpStyled = styled.div`
  background-color: rgb(36, 32, 32);
  width: 80vw;
  /*   max-height: 80vh; */
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  color: whitesmoke;
  box-shadow: inset 0 0 5rem black;
  button {
    all: unset;
    font-size: 1.3rem;

    margin: 0 1rem;
    float: right;
    background-color: inherit;
    border: none;
    color: whitesmoke;
  }
  .contentPop {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .imgPop {
    max-height: 20rem;
    margin: 1rem;
  }
  .textPop {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    flex-direction: column;
    margin: 1rem;
    max-width: 40vw;
    gap: 0.5rem;
  }
  .titlePop {
    color: whitesmoke;
  }
`;

export default PopUpStyled;
