import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MovieGrid from '../MovieGrid/MovieGrid';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import Switcher from '../Switcher/Switcher';
import Trending from '../Trending/Trending';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Switcher />
    </BrowserRouter>
  );
}

export default App;
