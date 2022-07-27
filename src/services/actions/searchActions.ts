import { checkResponse, kinopoiskUrl } from "../../utils/fetchData";
import { privatData } from "../../utils/privatData";
import { 
  KEYWORD__SEARCH__FAILED,
  KEYWORD__SEARCH__REQUEST,
  KEYWORD__SEARCH__SUCCESS,
  RESET__SEARCH,
  SET__SEARCH,
} from "../constants/searchTypes";
import { AppThunk } from "../types";

export interface ISetSearch {
  readonly type: typeof SET__SEARCH;
  readonly payload: any
};

export interface IResetSearch {
  readonly type: typeof RESET__SEARCH;
};

export interface IKeywordSearchRequest {
  readonly type: typeof KEYWORD__SEARCH__REQUEST;
};

export interface IKeywordSearchSuccess {
  readonly type: typeof KEYWORD__SEARCH__SUCCESS;
  readonly payload: any;
};

export interface IKeywordSearchFailed {
  readonly type: typeof KEYWORD__SEARCH__FAILED;
};

export type TSearchActions = 
| ISetSearch
| IResetSearch
| IKeywordSearchRequest
| IKeywordSearchSuccess
| IKeywordSearchFailed;

export const setSearch = (searchData: any): ISetSearch => {
  return {
    type: SET__SEARCH,
    payload: searchData
  }
}

export const resetSearch = (): IResetSearch => {
  return {
    type: RESET__SEARCH
  }
}

export const keywordSearchRequest = (): IKeywordSearchRequest => {
  return {
    type: KEYWORD__SEARCH__REQUEST
  }
}

export const keywordSearchSuccess = (movies: any): IKeywordSearchSuccess => {
  return {
    type: KEYWORD__SEARCH__SUCCESS,
    payload: movies
  }
}

export const keywordSearchFailed = (): IKeywordSearchFailed => {
  return {
    type: KEYWORD__SEARCH__FAILED
  }
}

export const keyWordSearch: AppThunk = (keyword: string) => (dispatch) => {
  dispatch(keywordSearchRequest());

  fetch(`${kinopoiskUrl}/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`, {
      method: 'GET',
      headers: {
        'x-api-key': privatData.apiKey
      }
    })
    .then(checkResponse)
    .then((data) => {
        dispatch(keywordSearchSuccess(data))
    })
    .catch(e => {
        dispatch(keywordSearchFailed())
        console.log(`Что-то пошло не так ${e}`);
    })
}