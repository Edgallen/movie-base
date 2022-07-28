import React, { FormEvent, useState } from 'react';
import styles from './SearchFilters.module.css';

type TFilters = {
  order: '' | 'RATING' | 'NUM_VOTE' | 'YEAR';
  type: '' | 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL'
}

const SearchFilters = () => {
  const [containerHidden, setContainerHidden] = useState<boolean>(true);
  const [filters, setFilters] = useState<TFilters>({
    order: '',
    type: ''
  });

  const handleselectChange = (e: React.ChangeEvent<HTMLSelectElement>, type: string) => {
    e.preventDefault();
    setFilters({
      ...filters,
      [type]: e.target.value
    })
  }

  const showContainer = () => {
    setContainerHidden(!containerHidden);
  }

  return (
    <section className={styles.searchFilters}>
      <div className={styles.title__container} onClick={showContainer}>
        <i 
          className={`ri-arrow-up-s-line ${styles.title__icon} ${!containerHidden ? styles.title__icon__active : ''}`}
        ></i>
        <h1 className={styles.title__title}>Фильтры для поиска</h1>
      </div>
      
      <form 
        className={`${styles.filters__container} ${containerHidden ? styles.searchFilters__container__hidden : ''}`}
      >
        <div className={styles.order__container}>
          <h2 className={styles.order__title}>Сортировать по:</h2>

          <select onChange={(e) => handleselectChange(e, 'order')}>
            <option value="">--</option>
            <option value="RATING">Рейтингу</option>
            <option value="NUM_VOTE">Кол-во голосов</option>
            <option value="YEAR">Году</option>
          </select>
        </div>
        
        <div className={styles.order__container}>
          <h2 className={styles.order__title}>Тип фильма:</h2>

          <select onChange={(e) => handleselectChange(e, 'type')}>
            <option value="">--</option>
            <option value="FILM">Фильм</option>
            <option value="TV_SHOW">Тв-шоу</option>
            <option value="TV_SERIES">Сериал</option>
            <option value="MINI_SERIES">Мини-сериал</option>
            <option value="ALL">Все</option>
          </select>
        </div>

      </form>
    </section>
  )
}

export default SearchFilters