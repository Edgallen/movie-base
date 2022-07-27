import React, { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { useParams } from 'react-router';
import MovieSmallCard from '../../components/MovieSmallCard/MovieSmallCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { keyWordSearch, resetSearch, setSearch } from '../../services/actions/searchActions';
import { TMovie } from '../../types';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import styles from './searchResultPage.module.css';
import { v4 as uuid } from 'uuid';

export const SearchResultPage = () => {
  const dispatch = useAppDispatch();
  const { searchInput } = useParams();
  const searchData = useAppSelector((store) => store.search.keywordSearch);

  useEffect(() => {
    dispatch(setSearch(searchInput));
    dispatch(keyWordSearch(searchInput));
    return () => {
      dispatch(resetSearch());
    }
  }, [searchInput])

  return (
    <main className={styles.main} >
      <SearchBar />
      {searchData.response.films 
      ? (
        <>
          <h1 className={styles.search__title}>
            По значению "{searchInput}" найдено {searchData.response.searchFilmsCountResult} результатов:
          </h1>

          {searchData.response.searchFilmsCountResult !== 0 
            ? (
              <div className={styles.search__container}>
                {searchData.response.films.map((movie: TMovie) => (
                  <MovieSmallCard movie={movie} key={uuid()} />
                ))}
              </div>
            )
            : (
              <h2 className={styles.search__title}>Ничего не найдено</h2>
            )
          }
        </>
      )
      : (
        <div className={styles.loader__container}>
          <Oval
            height="50"
            width="50"
            color="#FC4649"
            secondaryColor="#10141F"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )
    }
    </main>
  )
}