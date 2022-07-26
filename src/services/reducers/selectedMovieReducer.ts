import { TSelectedMovieActions } from "../actions/selectedMovieActions";
import {
  RESET__MOVIE__ID,
  SET__MOVIE__ID
} from "../constants/selectedMovieTypes";

type TSelectedMovieReducer = {
  movieId: string | undefined;
}

const initialState: TSelectedMovieReducer = {
  movieId: undefined,
}

export const selectedMovieReducer = (state = initialState, action: TSelectedMovieActions): TSelectedMovieReducer => {
  switch (action.type) {
    case SET__MOVIE__ID: {
      return {
        ...state,
        movieId: action.payload
      }
    }
    case RESET__MOVIE__ID: {
      return {
        ...state,
        movieId: undefined
      }
    }
    default: {
      return state;
    }
  }
}