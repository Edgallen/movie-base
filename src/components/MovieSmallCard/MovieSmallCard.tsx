import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { TMovie, TPremier } from '../../types';
import styles from './MovieSmallCard.module.css';

type MovieSmallCard = {
  movie: TPremier;
}

const MovieSmallCard: FC<TMovie> = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log(movie);
    if (movie.kinopoiskId) {
      navigate(`../movie/${movie.kinopoiskId}`);
    }
    if (movie.filmId) {
      navigate(`../movie/${movie.filmId}`);
    }
    
  }

  return (
    <div className={styles.movieGrid__card} onClick={handleCardClick}>
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
          </div> */}

          <p className={styles.info__pg}>{movie.countries[0].country}</p>
        </div>

        <h2 className={styles.naming}>{movie.nameRu}</h2>
      </div>
    </div>
  )
}

export default MovieSmallCard;