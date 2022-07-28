import React from 'react';
import { Outlet } from 'react-router';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import styles from './searchPage.module.css';

export const SearchPage = () => {
  return (
    <main className={styles.main}>
      <SearchBar />
      <SearchFilters />
      <Outlet/>
    </main>
  )
}