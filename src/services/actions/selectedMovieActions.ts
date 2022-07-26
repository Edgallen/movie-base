import {
  RESET__MOVIE__ID,
  SET__MOVIE__ID,
} from "../constants/selectedMovieTypes";

export interface ISetMovieId {
  readonly type: typeof SET__MOVIE__ID;
  readonly payload: string;
};

export interface IResetMovieId {
  readonly type: typeof RESET__MOVIE__ID;
};

export type TSelectedMovieActions = 
  | ISetMovieId
  | IResetMovieId

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