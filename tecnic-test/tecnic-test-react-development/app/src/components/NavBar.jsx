import React from 'react';
import { NavLink } from 'react-router-dom';

import NavStyled from '../ui/NavStyled';
import TextComponent from '../ui/TexStyled';

const NavBar = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="movies">
            <TextComponent color="white">Movies</TextComponent>
          </NavLink>
        </li>
        <li>
          <NavLink to="series">Series</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
      </ul>
    </NavStyled>
  );
};

export default NavBar;
