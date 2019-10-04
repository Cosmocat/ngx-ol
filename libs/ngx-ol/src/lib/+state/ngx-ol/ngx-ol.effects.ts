import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';

// import { NgxOlPartialState } from './ngx-ol.reducer';
import * as NgxOlActions from './ngx-ol.actions';

@Injectable()
export class NgxOlEffects {
  // loadNgxOl$ = createEffect(() =>
  //   this.dataPersistence.fetch(NgxOlActions.loadNgxOl, {
  //     run: (
  //       action: ReturnType<typeof NgxOlActions.loadNgxOl>,
  //       state: NgxOlPartialState
  //     ) => {
  //       // Your custom service 'load' logic goes here. For now just return a success action...
  //       return NgxOlActions.loadNgxOlSuccess({ ngxOl: [] });
  //     },

  //     onError: (action: ReturnType<typeof NgxOlActions.loadNgxOl>, error) => {
  //       console.error('Error', error);
  //       return NgxOlActions.loadNgxOlFailure({ error });
  //     }
  //   })
  // );

  constructor(
    private actions$: Actions
  ) {}
}
