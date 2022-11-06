import React from 'react';
import { NavLink } from 'react-router-dom';

import NavStyled from '../ui/NavStyled';
import TextComponent from '../ui/TexStyled';

const NavBar = () => {
  return (
    <NavStyled>
      <NavLink to="">
        <h2>
          <TextComponent color="white">DEMO Streaming</TextComponent>
        </h2>
      </NavLink>

      <div className="center">
        <NavLink to="movies">
          <TextComponent color="white">Movies</TextComponent>
        </NavLink>
      </div>
      <div className="center">
        <NavLink to="series">
          <TextComponent color="white">Series</TextComponent>
        </NavLink>
      </div>
      <div className="right">
        <a>
          <TextComponent color="white">Log in</TextComponent>
        </a>
      </div>
      <div className="right">
        <button>
          <TextComponent color="white" backgroundColor="#414141">
            Start your free trial
          </TextComponent>
        </button>
      </div>
    </NavStyled>
  );
};

export default NavBar;
