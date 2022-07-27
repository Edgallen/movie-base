import { TMovie } from "../../types";
import { checkResponse, kinopoiskUrl } from "../../utils/fetchData";
import { privatData } from "../../utils/privatData";
import {
  GET_ACTORS_FAILED,
  GET_ACTORS_REQUEST,
  GET_ACTORS_SUCCESS,
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
  readonly payload: TMovie;
};

export interface IGetMovieFailed {
  readonly type: typeof GET_MOVIE_FAILED;
};

export interface IGetActorsRequest {
  readonly type: typeof GET_ACTORS_REQUEST;
};

export interface IGetActorsSuccess {
  readonly type: typeof GET_ACTORS_SUCCESS;
  readonly payload: Array<TMovie>;
};

export interface IGetActorsFailed {
  readonly type: typeof GET_ACTORS_FAILED;
};

export type TSelectedMovieActions = 
  | ISetMovieId
  | IResetMovieId
  | IGetMovieRequest
  | IGetMovieSuccess
  | IGetMovieFailed
  | IGetActorsRequest
  | IGetActorsSuccess
  | IGetActorsFailed;

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

export const getMovieSuccess = (movie: TMovie): IGetMovieSuccess => {
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

export const getActorsRequest = (): IGetActorsRequest => {
  return {
    type: GET_ACTORS_REQUEST
  }
}

export const getActorsSuccess = (actors: Array<TMovie>): IGetActorsSuccess => {
  return {
    type: GET_ACTORS_SUCCESS,
    payload: actors
  }
}

export const getActorsFailed = (): IGetActorsFailed => {
  return {
    type: GET_ACTORS_FAILED
  }
}

export const getMovie: AppThunk = (id: string) => (dispatch) => {
  dispatch(getMovieRequest());

  fetch(`${kinopoiskUrl}/v2.2/films/${id}`, {
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

export const getActors: AppThunk = (id: string) => (dispatch) => {
  dispatch(getActorsRequest());

  fetch(`${kinopoiskUrl}/v1/staff?filmId=${id}`, {
      method: 'GET',
      headers: {
        'x-api-key': privatData.apiKey
      }
    })
    .then(checkResponse)
    .then((data) => {
        dispatch(getActorsSuccess(data))
    })
    .catch(e => {
        dispatch(getActorsFailed())
        console.log(`Что-то пошло не так ${e}`);
    })
}