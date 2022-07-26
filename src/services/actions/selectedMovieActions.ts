import { checkResponse, kinopoiskUrl } from "../../utils/fetchData";
import { privatData } from "../../utils/privatData";
import {
  GET_MOVIE_FAILED,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  RESET__MOVIE__ID,
  SET__MOVIE__ID,
} from "../constants/selectedMovieTypes";
import { AppThunk } from "../types";

export interface ISetMovieId {
  readonly type: typeof SET__MOVIE__ID;
  readonly payload: string;
};

export interface IResetMovieId {
  readonly type: typeof RESET__MOVIE__ID;
};

export interface IGetMovieRequest {
  readonly type: typeof GET_MOVIE_REQUEST;
};

export interface IGetMovieSuccess {
  readonly type: typeof GET_MOVIE_SUCCESS;
  readonly payload: any;
};

export interface IGetMovieFailed {
  readonly type: typeof GET_MOVIE_FAILED;
};

export type TSelectedMovieActions = 
  | ISetMovieId
  | IResetMovieId
  | IGetMovieRequest
  | IGetMovieSuccess
  | IGetMovieFailed;

export const setMovieId = (id: string): ISetMovieId => {
  return {
    type: SET__MOVIE__ID,
    payload: id
  }
}

export const resetMovieId = (): IResetMovieId => {
  return {
    type: RESET__MOVIE__ID
  }
}

export const getMovieRequest = (): IGetMovieRequest => {
  return {
    type: GET_MOVIE_REQUEST
  }
}

export const getMovieSuccess = (movie: any): IGetMovieSuccess => {
  return {
    type: GET_MOVIE_SUCCESS,
    payload: movie
  }
}

export const getMovieFailed = (): IGetMovieFailed => {
  return {
    type: GET_MOVIE_FAILED
  }
}

export const getMovie: AppThunk = (id: string) => (dispatch) => {
  dispatch(getMovieRequest());

  fetch(`${kinopoiskUrl}/films/${id}`, {
      method: 'GET',
      headers: {
        'x-api-key': privatData.apiKey
      }
    })
    .then(checkResponse)
    .then((data) => {
        dispatch(getMovieSuccess(data))
    })
    .catch(e => {
        dispatch(getMovieFailed())
        console.log(`Что-то пошло не так ${e}`);
    })
}