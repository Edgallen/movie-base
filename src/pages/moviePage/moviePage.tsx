import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { resetMovieId, setMovieId } from '../../services/actions/selectedMovieActions';
import { useAppDispatch } from '../../utils/hooks';
import styles from './moviePage.module.css';

export const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movieId) {
      dispatch(setMovieId(movieId))
    }
    return () => {
      dispatch(resetMovieId());
    }
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.moviePage}>

        <div className={styles.poster__container}>
          <img
            className={styles.poster__image}
            src="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/venom_hardy_style_teaser_EB05938_B-893199_1024x1024@2x.jpg?v=1611688561"
            alt="movie-poster" 
          />

          <div className={styles.poster__bio}>
            <h2 className={styles.poster__text}>2021</h2>
            <h2 className={styles.poster__text}>1Ч 37МИН</h2>
            <h2 className={styles.poster__text}>PG13</h2>
          </div>
        </div>

        <div className={styles.description__container}>
          <div>
            <h1 className={styles.description__title}>Веном 2</h1>

            <div className={styles.genre__container}>
              <p className={styles.genre__card}>Боевик</p>
              <p className={styles.genre__card}>Приключения</p>
              <p className={styles.genre__card}>SCI-FI</p>
            </div>

            <div className={styles.description__buttons}>
              <button className={styles.trailer__button}>
                <i className={`ri-play-fill ${styles.trailer__icon}`}></i>
                <p className={styles.trailer__text}>Трейлер</p>
              </button>

              <button className={styles.bookmark__button}>
                <i className={`ri-bookmark-line ${styles.bookmark__icon}`}></i>
              </button>
            </div>

            <div className={styles.storyline__container}>
              <div className={styles.storyline__description}>
                <h2 className={styles.storyline__title}>Описание</h2>
                <p className={styles.storyline__text}>
                  Более чем через год после того как в него вселился инопланетный симбиот Веном,
                  журналист Эдди Брок пытается приспособиться к новой жизни с суперспособностями и
                  постоянным желанием Венома откусывать людям головы. Брок пытается возродить свою
                  карьеру и берет интервью у серийного убийцы Клетуса Кэседи, а тот случайно становится
                  хозяином симбиота Карнажа и сбегает из тюрьмы прямо во время собственной казни.
                </p>
              </div>

              <div className={styles.storyline__cast}>
                <h2 className={styles.storyline__title}>Актеры</h2>

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
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}