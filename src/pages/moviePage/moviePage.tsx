import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import { getMovie, resetMovieId, setMovieId } from '../../services/actions/selectedMovieActions';
import { useAppDispatch } from '../../utils/hooks';
import styles from './moviePage.module.css';

export const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movieId) {
      dispatch(setMovieId(movieId));
    }
    return () => {
      dispatch(resetMovieId());
    }
  }, [])

  useEffect(() => {
    if (movieId) {
      dispatch(getMovie(movieId))
    }
  }, [movieId]);

  return (
    <main className={styles.main}>
      <MovieInfo />
    </main>
  )
}