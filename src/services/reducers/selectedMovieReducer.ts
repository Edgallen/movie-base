import { TSelectedMovieActions } from "../actions/selectedMovieActions";
import {
  GET_MOVIE_FAILED,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  RESET__MOVIE__ID,
  SET__MOVIE__ID
} from "../constants/selectedMovieTypes";

type TSelectedMovieReducer = {
  movieId: string | undefined;

  movieInfo: {
    isLoading: boolean;
    isFailed: boolean;
    movie: any;
  }
}

const initialState: TSelectedMovieReducer = {
  movieId: undefined,

  movieInfo: {
    isLoading: true,
    isFailed: false,
    movie: {}
  }
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
        movieId: undefined,

        movieInfo: {
          isLoading: true,
          isFailed: false,
          movie: {}
        }
      }
    }
    case GET_MOVIE_REQUEST: {
      return {
        ...state,
        movieInfo: {
          ...state.movieInfo,
          isLoading: true,
          isFailed: false
        }
      }
    }
    case GET_MOVIE_SUCCESS: {
      return {
        ...state,
        movieInfo: {
          ...state.movieInfo,
          isLoading: false,
          movie: action.payload
        }
      }
    }
    case GET_MOVIE_FAILED: {
      return {
        ...state,
        movieInfo: {
          ...state.movieInfo,
          isLoading: false,
          isFailed: true
        }
      }
    }
    default: {
      return state;
    }
  }
}