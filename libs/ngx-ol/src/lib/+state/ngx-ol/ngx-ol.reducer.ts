import { createReducer, on, ActionReducerMap, Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSidebar from './sidebar/sidebar.reducer';

export const NGXOL_FEATURE_KEY = 'ngxOl';

export interface NgxOlState {
  sidebar: fromSidebar.State;
}

export const mangolReducers: ActionReducerMap<NgxOlState> = {
  sidebar: fromSidebar.sidebarReducer
};


export function reducers(state: NgxOlState | undefined, action: Action) {
  return combineReducers({
    sidebar: fromSidebar.sidebarReducer
  })(state, action);
}

export const ngxOlState = createFeatureSelector<NgxOlState>(
  NGXOL_FEATURE_KEY
);

export const getSidebar = createSelector(
  ngxOlState,
  (state: NgxOlState) => state.sidebar
);
