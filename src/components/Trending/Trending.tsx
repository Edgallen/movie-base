import React from 'react';
import styles from './Trending.module.css';

const Trending = () => {
  return (
    <section className={styles.trending}>
      <h1 className={styles.trending__title}>Сейчас популярно</h1>

      <div className={styles.trending__container}>

        <div className={styles.trending__card}>
          <div className={styles.trending__button}>
            <i className={`ri-bookmark-line ${styles.trending__bookmark}`}></i>
          </div>

          <div className={styles.trending__description}>
            <div className={styles.trending__info}>
              <p className={styles.info__title}>2019</p>

              <div className={styles.info__type}>
                <i className="ri-film-fill"></i>
                <p>Фильм</p>
              </div>

              <p className={styles.info__pg}>PG</p>
            </div>

            <h2 className={styles.naming}>Название фильма</h2>
          </div>
        </div>
        
        <div className={styles.trending__card}>
          <div className={styles.trending__button}>
            <i className={`ri-bookmark-line ${styles.trending__bookmark}`}></i>
          </div>

          <div className={styles.trending__description}>
            <div className={styles.trending__info}>
              <p className={styles.info__title}>2019</p>

              <div className={styles.info__type}>
                <i className="ri-film-fill"></i>
                <p>Фильм</p>
              </div>

              <p className={styles.info__pg}>PG</p>
            </div>

            <h2 className={styles.naming}>Название фильма</h2>
          </div>
        </div>

        <div className={styles.trending__card}>
          <div className={styles.trending__button}>
            <i className={`ri-bookmark-line ${styles.trending__bookmark}`}></i>
          </div>

          <div className={styles.trending__description}>
            <div className={styles.trending__info}>
              <p className={styles.info__title}>2019</p>

              <div className={styles.info__type}>
                <i className="ri-film-fill"></i>
                <p>Фильм</p>
              </div>

              <p className={styles.info__pg}>PG</p>
            </div>

            <h2 className={styles.naming}>Название фильма</h2>
          </div>
        </div>

        <div className={styles.trending__card}>
          <div className={styles.trending__button}>
            <i className={`ri-bookmark-line ${styles.trending__bookmark}`}></i>
          </div>

          <div className={styles.trending__description}>
            <div className={styles.trending__info}>
              <p className={styles.info__title}>2019</p>

              <div className={styles.info__type}>
                <i className="ri-film-fill"></i>
                <p>Фильм</p>
              </div>

              <p className={styles.info__pg}>PG</p>
            </div>

            <h2 className={styles.naming}>Название фильма</h2>
          </div>
        </div>

        <div className={styles.trending__card}>
          <div className={styles.trending__button}>
            <i className={`ri-bookmark-line ${styles.trending__bookmark}`}></i>
          </div>

          <div className={styles.trending__description}>
            <div className={styles.trending__info}>
              <p className={styles.info__title}>2019</p>

              <div className={styles.info__type}>
                <i className="ri-film-fill"></i>
                <p>Фильм</p>
              </div>

              <p className={styles.info__pg}>PG</p>
            </div>

            <h2 className={styles.naming}>Название фильма</h2>
          </div>
        </div>

        <div className={styles.trending__card}>
          <div className={styles.trending__button}>
            <i className={`ri-bookmark-line ${styles.trending__bookmark}`}></i>
          </div>

          <div className={styles.trending__description}>
            <div className={styles.trending__info}>
              <p className={styles.info__title}>2019</p>

              <div className={styles.info__type}>
                <i className="ri-film-fill"></i>
                <p>Фильм</p>
              </div>

              <p className={styles.info__pg}>PG</p>
            </div>

            <h2 className={styles.naming}>Название фильма</h2>
          </div>
        </div>

        <div className={styles.trending__card}>
          <div className={styles.trending__button}>
            <i className={`ri-bookmark-line ${styles.trending__bookmark}`}></i>
          </div>

          <div className={styles.trending__description}>
            <div className={styles.trending__info}>
              <p className={styles.info__title}>2019</p>

              <div className={styles.info__type}>
                <i className="ri-film-fill"></i>
                <p>Фильм</p>
              </div>

              <p className={styles.info__pg}>PG</p>
            </div>

            <h2 className={styles.naming}>Название фильма</h2>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Trending