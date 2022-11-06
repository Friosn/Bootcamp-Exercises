import React from 'react';
import { NavLink } from 'react-router-dom';

import ButtonStyled from '../ui/ButtonStyled';

const Home = () => {
  return (
    <>
      <NavLink to="movies">
        <ButtonStyled>Movies</ButtonStyled>
      </NavLink>
      <NavLink to="series">
        <ButtonStyled>Series</ButtonStyled>
      </NavLink>
    </>
  );
};

export default Home;
