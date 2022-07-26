import { TPopularFilm } from '../../types';
import { checkResponse, kinopoiskUrl } from '../../utils/fetchData';
import {
  GET_POPULAR_FILMS_FAILED,
  GET_POPULAR_FILMS_REQUEST,
  GET_POPULAR_FILMS_SUCCESS,
  GET_PREMIERS_FAILED,
  GET_PREMIERS_REQUEST,
  GET_PREMIERS_SUCCESS,
} from '../constants/filmsTypes';
import { AppThunk } from '../types';
import { privatData } from '../../utils/privatData';
 
export interface IGetPopularFilmsRequest {
  readonly type: typeof GET_POPULAR_FILMS_REQUEST;
};

export interface IGetPopularFilmsSuccess {
  readonly type: typeof GET_POPULAR_FILMS_SUCCESS;
  readonly payload: TPopularFilm;
};

export interface IGetPopularFilmsFailed {
  readonly type: typeof GET_POPULAR_FILMS_FAILED;
};

export interface IGetPremiersRequest {
  readonly type: typeof GET_PREMIERS_REQUEST;
};

export interface IGetPremiersSuccess {
  readonly type: typeof GET_PREMIERS_SUCCESS;
  readonly payload: TPopularFilm;
};

export interface IGetPremiersFailed {
  readonly type: typeof GET_PREMIERS_FAILED;
};

export type TFilmsActions = 
  | IGetPopularFilmsRequest
  | IGetPopularFilmsSuccess
  | IGetPopularFilmsFailed
  | IGetPremiersRequest
  | IGetPremiersSuccess
  | IGetPremiersFailed;

export const getPopularFilmsRequest = (): IGetPopularFilmsRequest => {
  return {
    type: GET_POPULAR_FILMS_REQUEST
  }
}

export const getPopularFilmsSuccess = (data: TPopularFilm): IGetPopularFilmsSuccess => {
  return {
    type: GET_POPULAR_FILMS_SUCCESS,
    payload: data
  }
}

export const getPopularFilmsFailed = (): IGetPopularFilmsFailed => {
  return {
    type: GET_POPULAR_FILMS_FAILED
  }
}

export const getPremiersRequest = (): IGetPremiersRequest => {
  return {
    type: GET_PREMIERS_REQUEST
  }
}

export const getPremiersSuccess = (data: any): IGetPremiersSuccess => {
  return {
    type: GET_PREMIERS_SUCCESS,
    payload: data
  }
}

export const getPremiersFailed = (): IGetPremiersFailed => {
  return {
    type: GET_PREMIERS_FAILED
  }
}

export const getPopularFilms: AppThunk = () => (dispatch) => {
  dispatch(getPopularFilmsRequest());

  fetch(`${kinopoiskUrl}/films/top?type=TOP_100_POPULAR_FILMS&page=1`, {
      method: 'GET',
      headers: {
        'x-api-key': privatData.apiKey
      }
    })
    .then(checkResponse)
    .then((data) => {
        dispatch(getPopularFilmsSuccess(data))
    })
    .catch(e => {
        dispatch(getPopularFilmsFailed())
        console.log(`Что-то пошло не так ${e}`);
    })
}

export const getPremiers: AppThunk = () => (dispatch) => {
  dispatch(getPremiersRequest());

  fetch(`${kinopoiskUrl}/films/premieres?year=2022&month=JANUARY`, {
      method: 'GET',
      headers: {
        'x-api-key': privatData.apiKey
      }
    })
    .then(checkResponse)
    .then((data) => {
        dispatch(getPremiersSuccess(data))
    })
    .catch(e => {
        dispatch(getPremiersFailed())
        console.log(`Что-то пошло не так ${e}`);
    })
}