import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search/${searchInput}`);
  }

  return (
  <form className={styles.searchBar} onSubmit={(e) => handleSubmit(e)}>
      <i className={`ri-search-line ${styles.searchBar__icon}`}></i>
      <input 
        className={styles.searchBar__input} 
        type="text"
        placeholder='Поиск по фильмам или сериалам'
        onChange={(e) => {
          setSearchInput(e.target.value)
        }}
      />
  </form>
  )
}

export default SearchBar