import { ActionReducerMap, Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSidebar from './sidebar/sidebar.reducer';
import * as fromLayers from './layers/layers.reducer';

export const NGXOL_FEATURE_KEY = 'ngxOl';

export interface NgxOlState {
  sidebar: fromSidebar.State;
  layers: fromLayers.State;
}

export const mangolReducers: ActionReducerMap<NgxOlState> = {
  sidebar: fromSidebar.sidebarReducer,
  layers: fromLayers.layersReducer
};


export function reducers(state: NgxOlState | undefined, action: Action) {
  return combineReducers({
    sidebar: fromSidebar.sidebarReducer,
    layers: fromLayers.layersReducer
  })(state, action);
}

export const ngxOlState = createFeatureSelector<NgxOlState>(
  NGXOL_FEATURE_KEY
);

export const getSidebar = createSelector(
  ngxOlState,
  (state: NgxOlState) => state.sidebar
);

export const getLayersState = createSelector(
  ngxOlState,
  (state: NgxOlState) => state.layers
);

export const {
  selectIds: getLayersIds,
  selectEntities: getLayersEntities,
  selectAll: getAllLayers,
  selectTotal: getTotalLayers,
} = fromLayers.adapter.getSelectors(getLayersState);

