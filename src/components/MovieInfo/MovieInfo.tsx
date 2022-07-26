import React, { FC, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { TMovie, TGenres } from '../../types';
import { useAppSelector } from '../../utils/hooks';
import styles from './MovieInfo.module.css';
import { v4 as uuid } from 'uuid';

const MovieCast = () => {
  return (
    <div className={styles.cast__container}>
      <div className={styles.cast__card}>
        <img
          className={styles.cast__image}
          src="https://www.film.ru/sites/default/files/people/1456277-1436872.jpg"
          alt="Tom Hardy"
        />
        <div className={styles.cast__bio}>
            <h3 className={styles.cast__actor}>Том Харди</h3>
            <h4 className={styles.cast__character}>Эдди Брок</h4>
        </div>
      </div>
    </div>
  )
}

const DescriptionButtons = () => {
  return (
    <div className={styles.description__buttons}>
      <button className={styles.trailer__button}>
        <i className={`ri-play-fill ${styles.trailer__icon}`}></i>
        <p className={styles.trailer__text}>Трейлер</p>
      </button>

      <button className={styles.bookmark__button}>
        <i className={`ri-bookmark-line ${styles.bookmark__icon}`}></i>
      </button>
    </div>
  )
}

type TMovieGenres = {
  genresArray: TGenres;
}

const MovieGenres: FC<TMovieGenres> = ({ genresArray }) => {
  // let slicedArray: Array<{ ['genre']: string}> = [];

  return (
    <>
      {genresArray && (
        <div className={styles.genre__container}>
          {genresArray.slice(0, 4).map((genre: any) => (
            <p className={styles.genre__card} key={uuid()}>{genre.genre}</p>
          ))}
        </div>
      )}
    </>
  )
}

type TMoviePoster = {
  movie: TMovie;
}

const MoviePoster: FC<TMoviePoster> = ({ movie }) => {
  const getTime = (time: number): string => {
    const hours = Math.floor(time / 60)
    const min = time % 60;
    return `${hours}Ч ${min}МИН`;
  }

  return (
    <div className={styles.poster__container}>
      <img
        className={styles.poster__image}
        src={movie.posterUrlPreview}
        alt="movie-poster" 
      />

      <div className={styles.poster__bio}>
        <h2 className={styles.poster__text}>{movie.year}</h2>
        {movie.filmLength && <h2 className={styles.poster__text}>{getTime(movie.filmLength)}</h2>}
        {movie.countries && <h2 className={styles.poster__text}>{movie.countries[0].country}</h2>}
      </div>
    </div>
  )
}

const MovieInfo = () => {
  const movieInfo = useAppSelector((store) => store.selectedMovie.movieInfo);

  return (
    (movieInfo.movie 
      ? 
      (
        <section className={styles.moviePage}>

            <MoviePoster movie={movieInfo.movie} />

            <div className={styles.description__container}>
              <div>
                <h1 className={styles.description__title}>{movieInfo.movie.nameRu}</h1>

                <MovieGenres genresArray={movieInfo.movie.genres} />
                <DescriptionButtons />

                <div className={styles.storyline__container}>
                  <div className={styles.storyline__description}>
                    <h2 className={styles.storyline__title}>Описание</h2>
                    <p className={styles.storyline__text}>
                      {movieInfo.movie.description}
                    </p>
                  </div>

                  <div className={styles.storyline__cast}>
                    <h2 className={styles.storyline__title}>Актеры</h2>
                    <MovieCast />
                  </div>

                </div>
              </div>
            </div>
          </section>
        )
        : 
        (
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
      )
  )
}

export default MovieInfo