import { TSearchActions } from "../actions/searchActions";
import { KEYWORD__SEARCH__FAILED, KEYWORD__SEARCH__REQUEST, KEYWORD__SEARCH__SUCCESS, RESET__SEARCH, SET__SEARCH } from "../constants/searchTypes";

type TSearchReducer = {
  searchParams: {
    text: string;
  },

  keywordSearch: {
    isLoading: boolean,
    isFailed: boolean,
    response: any
  }
}

const initialState: TSearchReducer = {
  searchParams: {
    text: ''
  },

  keywordSearch: {
    isLoading: true,
    isFailed: false,
    response: {}
  }
}

export const searchReducer = (state = initialState, action: TSearchActions): TSearchReducer => {
  switch (action.type) {
    case SET__SEARCH: {
      return {
        ...state,
        searchParams:
        {
          ...state.searchParams,
          text: action.payload
        }
      }
    }
    case RESET__SEARCH: {
      return {
        searchParams: {
          text: ''
        },
      
        keywordSearch: {
          isLoading: true,
          isFailed: false,
          response: {}
        }
      }
    }
    case KEYWORD__SEARCH__REQUEST: {
      return {
        ...state,
        keywordSearch: {
          ...state.keywordSearch,
          isLoading: true,
          isFailed: false
        }
      }
    }
    case KEYWORD__SEARCH__SUCCESS: {
      return {
        ...state,
        keywordSearch: {
          ...state.keywordSearch,
          isLoading: false,
          response: action.payload
        }
      }
    }
    case KEYWORD__SEARCH__FAILED: {
      return {
        ...state,
        keywordSearch: {
          ...state.keywordSearch,
          isLoading: false,
          isFailed: true
        }
      }
    }
    default: {
      return initialState;
    }
  }
}