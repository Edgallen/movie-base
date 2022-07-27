import React, { FC, useEffect } from 'react';
import { getPremiers } from '../../services/actions/filmsActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import styles from './MovieGrid.module.css';
import { v4 as uuid } from 'uuid';
import { Oval } from 'react-loader-spinner';
import { TPremier } from '../../types';
import { useNavigate } from 'react-router';
import MovieSmallCard from '../MovieSmallCard/MovieSmallCard';

const MovieGrid = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.films.premiers);

  useEffect(() => {
    dispatch(getPremiers());
  }, []);

  return (
    <section className={styles.movieGrid}>
    <h1 className={styles.movieGrid__title}>Сейчас в кино</h1>

    {data.films.items
        ? (
          <div className={styles.movieGrid__container}>
            {data.films.items.map((movie: TPremier) => (
                <MovieSmallCard movie={movie} key={uuid()} />
            ))}
          </div>
          )
        : (
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
        )
      }
  </section>
  )
}

export default MovieGrid