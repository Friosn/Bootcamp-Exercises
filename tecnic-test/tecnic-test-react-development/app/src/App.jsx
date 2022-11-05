import './App.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>I am gonna put movies and series all around 🎥🎞️📽️🎬🎦</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
