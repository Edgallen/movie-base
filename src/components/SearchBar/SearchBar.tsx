import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
  <div className={styles.searchBar}>
      <i className={`ri-search-line ${styles.searchBar__icon}`}></i>
      <input 
        className={styles.searchBar__input} 
        type="text"
        placeholder='Поиск по фильмам или сериалам'
        onChange={(e) => {
          setSearchInput(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchBar