import { createAction, props } from '@ngrx/store';
import { NgxOlEntity } from './ngx-ol.models';

export const loadNgxOl = createAction('[NgxOl] Load NgxOl');

export const loadNgxOlSuccess = createAction(
  '[NgxOl] Load NgxOl Success',
  props<{ ngxOl: NgxOlEntity[] }>()
);

export const loadNgxOlFailure = createAction(
  '[NgxOl] Load NgxOl Failure',
  props<{ error: any }>()
);
