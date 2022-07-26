import React, { FC, useEffect } from 'react';
import { getPremiers } from '../../services/actions/filmsActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import styles from './MovieGrid.module.css';
import { v4 as uuid } from 'uuid';
import { Oval } from 'react-loader-spinner';
import { TPremier } from '../../types';

type TMovie = {
  movie: TPremier;
}

const Movie: FC<TMovie> = ({ movie }) => {
  const handleMovieClick = () => {
    console.log(movie.nameRu)
  };

  return (
    <div className={styles.movieGrid__card} onClick={handleMovieClick}>
      <div className={styles.poster__card}>
        <div className={styles.movieGrid__button}>
          <i className={`ri-bookmark-line ${styles.movieGrid__bookmark}`}></i>
        </div>

        <img
          className={styles.movieGrid__poster}
          src={movie.posterUrl} 
          alt="movie-poster"
        />
      </div>

      

      <div className={styles.movieGrid__poster__cover}></div>

      <div className={styles.movieGrid__description}>
        <div className={styles.movieGrid__info}>
          <p className={styles.info__title}>{movie.year}</p>

          {/* <div className={styles.info__type}>
            <i className="ri-film-fill"></i>
            <p>Фильм</p>
          </div>

          <p className={styles.info__pg}>PG</p> */}
        </div>

        <h2 className={styles.naming}>{movie.nameRu}</h2>
      </div>
    </div>
  )
}

const MovieGrid = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.films.premiers);

  useEffect(() => {
    dispatch(getPremiers());
  }, []);

  return (
    <section className={styles.movieGrid}>
    <h1 className={styles.movieGrid__title}>Кинопремьеры</h1>

    {data.films.items
        ? (
          <div className={styles.movieGrid__container}>
            {data.films.items.map((movie: TPremier) => (
                <Movie movie={movie} key={uuid()} />
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