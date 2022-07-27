import React from 'react';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import SearchBar from '../../components/SearchBar/SearchBar';
import Trending from '../../components/Trending/Trending';
import styles from './homePage.module.css';

export const HomePage = () => {
  return (
    <main className={styles.main}>
      <SearchBar />
      <Trending />
      <MovieGrid />
    </main>
  )
}