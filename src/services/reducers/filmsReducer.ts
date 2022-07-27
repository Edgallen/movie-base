import { TPopularFilm } from "../../types";
import { 
  GET_POPULAR_FILMS_FAILED,
  GET_POPULAR_FILMS_REQUEST,
  GET_POPULAR_FILMS_SUCCESS,
  GET_PREMIERS_FAILED,
  GET_PREMIERS_REQUEST,
  GET_PREMIERS_SUCCESS,
} from "../constants/filmsTypes";
import { TApplicationActions } from "../types";

type TFilmsReducer = {
  popular: {
    films: any;
    isLoading: boolean;
    isFailed: boolean;
  };

  premiers: {
    films: any;
    isLoading: boolean;
    isFailed: boolean;
  };
}

const initialState: TFilmsReducer = {
  popular: {
    films: [],
    isLoading: true,
    isFailed: false,
  },

  premiers: {
    films: [],
    isLoading: false,
    isFailed: false,
  },
}

export const filmsReducer = (state = initialState, action: TApplicationActions): TFilmsReducer => {
  switch (action.type) {
    case GET_POPULAR_FILMS_REQUEST: {
      return {
        ...state,
        popular: {
          ...state.popular,
          isLoading: true,
          isFailed: false
        }
      }
    }
    case GET_POPULAR_FILMS_SUCCESS: {
      return {
        ...state,
        popular: {
          ...state.popular,
          films: action.payload,
          isLoading: false,
        }
      }
    }
    case GET_POPULAR_FILMS_FAILED: {
      return {
        ...state,
        popular: {
          ...state.popular,
          isLoading: false,
          isFailed: true
        }
      }
    }
    case GET_PREMIERS_REQUEST: {
      return {
        ...state,
        premiers: {
          ...state.premiers,
          isLoading: true,
          isFailed: false
        }
      }
    }
    case GET_PREMIERS_SUCCESS: {
      return {
        ...state,
        premiers: {
          ...state.premiers,
          films: action.payload,
          isLoading: false,
        }
      }
    }
    case GET_PREMIERS_FAILED: {
      return {
        ...state,
        premiers: {
          ...state.premiers,
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