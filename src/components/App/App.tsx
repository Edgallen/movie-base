import React from 'react';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import styles from './App.module.css';

function App() {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <SearchBar />
      </main>
    </>
  );
}

export default App;
