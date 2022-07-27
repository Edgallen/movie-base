import { combineReducers } from "redux";
import { filmsReducer } from "./filmsReducer";
import { searchReducer } from "./searchReducer";
import { selectedMovieReducer } from "./selectedMovieReducer";

export const rootReducer = combineReducers({
  films: filmsReducer,
  selectedMovie: selectedMovieReducer,
  search: searchReducer
})