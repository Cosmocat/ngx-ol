import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  NGXOL_FEATURE_KEY,
  NgxOlState
} from './ngx-ol.reducer';

// Lookup the 'NgxOl' feature state managed by NgRx
// export const getNgxOlState = createFeatureSelector<
//   NgxOlPartialState,
//   NgxOlState
// >(NGXOL_FEATURE_KEY);

// const { selectAll, selectEntities } = ngxOlAdapter.getSelectors();

// export const getNgxOlLoaded = createSelector(
//   getNgxOlState,
//   (state: NgxOlState) => state.loaded
// );

// export const getNgxOlError = createSelector(
//   getNgxOlState,
//   (state: NgxOlState) => state.error
// );

// export const getAllNgxOl = createSelector(
//   getNgxOlState,
//   (state: NgxOlState) => selectAll(state)
// );

// export const getNgxOlEntities = createSelector(
//   getNgxOlState,
//   (state: NgxOlState) => selectEntities(state)
// );

// export const getSelectedId = createSelector(
//   getNgxOlState,
//   (state: NgxOlState) => state.selectedId
// );

// export const getSelected = createSelector(
//   getNgxOlEntities,
//   getSelectedId,
//   (entities, selectedId) => selectedId && entities[selectedId]
// );
