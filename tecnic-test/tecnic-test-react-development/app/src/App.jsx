import './App.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import MyMainStyled from './ui/MainStyled';
import HeaderTitleComponent from './ui/HeaderStyled';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HeaderTitleComponent>Popular Shows 🎥🎞️🎬</HeaderTitleComponent>

      <MyMainStyled>
        <Outlet />
      </MyMainStyled>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
