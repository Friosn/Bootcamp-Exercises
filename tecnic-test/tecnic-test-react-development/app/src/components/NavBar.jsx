import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="series">Series</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
