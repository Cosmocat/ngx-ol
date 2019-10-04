import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as NgxOlActions from './ngx-ol.actions';
import { NgxOlEntity } from './ngx-ol.models';

export const NGXOL_FEATURE_KEY = 'ngxOl';

export interface NgxOlState extends EntityState<NgxOlEntity> {
  selectedId?: string | number; // which NgxOl record has been selected
  loaded: boolean; // has the NgxOl list been loaded
  error?: string | null; // last none error (if any)
}

export interface NgxOlPartialState {
  readonly [NGXOL_FEATURE_KEY]: NgxOlState;
}

export const ngxOlAdapter: EntityAdapter<NgxOlEntity> = createEntityAdapter<
  NgxOlEntity
>();

export const initialState: NgxOlState = ngxOlAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const ngxOlReducer = createReducer(
  initialState,
  on(NgxOlActions.loadNgxOl, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(NgxOlActions.loadNgxOlSuccess, (state, { ngxOl }) =>
    ngxOlAdapter.addAll(ngxOl, { ...state, loaded: true })
  ),
  on(NgxOlActions.loadNgxOlFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: NgxOlState | undefined, action: Action) {
  return ngxOlReducer(state, action);
}
