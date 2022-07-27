import { store } from "../store";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { TFilmsActions } from '../actions/filmsActions';
import { TSelectedMovieActions } from "../actions/selectedMovieActions";
import { TSearchActions } from "../actions/searchActions";

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TFilmsActions
| TSelectedMovieActions
| TSearchActions;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
export type AppDispatch = Dispatch<TApplicationActions> | AppThunk;

export type AppDispatchActions = Dispatch<TApplicationActions>;