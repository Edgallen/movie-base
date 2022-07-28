import React from 'react';
import { Outlet } from 'react-router';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './searchPage.module.css';

export const SearchPage = () => {
  return (
    <main className={styles.main}>
      <SearchBar />
      <Outlet/>
    </main>
  )
}