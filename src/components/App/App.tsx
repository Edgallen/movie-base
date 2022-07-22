import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './App.module.css';

function App() {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>
    </>
  );
}

export default App;
