import './App.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import MyMainStyled from './ui/MainStyled';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>I am gonna put movies and series all around 🎥🎞️📽️🎬🎦</h1>
      </header>
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
