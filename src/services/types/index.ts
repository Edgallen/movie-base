import { store } from "../store";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { TFilmsActions } from '../actions/filmActions';

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TFilmsActions;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
export type AppDispatch = Dispatch<TApplicationActions> | AppThunk;

export type AppDispatchActions = Dispatch<TApplicationActions>;