import { combineReducers } from "redux";
import { filmsReducer } from "./filmsReducer";
import { selectedMovieReducer } from "./selectedMovieReducer";

export const rootReducer = combineReducers({
  films: filmsReducer,
  selectedMovie: selectedMovieReducer
})