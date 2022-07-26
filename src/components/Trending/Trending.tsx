import React, { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getPopularFilms } from '../../services/actions/filmsActions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import styles from './Trending.module.css';
import { v4 as uuid } from 'uuid';
import { TPopularFilm } from '../../types';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router';

interface IPopularFilm {
  film: TPopularFilm;
}

const PopularFilm: FC<IPopularFilm> = ({ film }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log(film)
    navigate(`movie/${film.filmId}`)
  }

  return (
    <div className={styles.trending__card} onClick={handleCardClick}>
        <div className={styles.trending__button}>
          <i className={`ri-bookmark-line ${styles.trending__bookmark}`}></i>
        </div>

        <img 
          className={styles.trending__poster}
          src={film.posterUrl} 
          alt="film-poster" 
        />

        <div className={styles.trending__poster__cover}></div>

        <div className={styles.trending__description}>
          <div className={styles.trending__info}>
            <p className={styles.info__title}>{film.year}</p>

            {/* <div className={styles.info__type}>
              <i className="ri-film-fill"></i>
              <p>Фильм</p>
            </div> */}

            {/* <p className={styles.info__pg}>PG</p> */}
          </div>

          <h2 className={styles.naming}>{film.nameRu}</h2>
          
        </div>
    </div>
  )
}

const Trending = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.films.popular);

  useEffect(() => {
    dispatch(getPopularFilms());
  }, [])


  return (
    <section className={styles.trending}>
      <h1 className={styles.trending__title}>Сейчас популярно</h1>

      {data.films.films
        ? (
          <div className={styles.trending__container}>
            {data.films.films.map((film: TPopularFilm) => (
                <PopularFilm film={film} key={uuid()} />
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

export default Trending