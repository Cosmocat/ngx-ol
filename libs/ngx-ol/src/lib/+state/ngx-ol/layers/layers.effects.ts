import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, mergeMap } from 'rxjs/operators';
import * as LayersActions from  './layers.actions';
import { MapService } from '../../../service/map.service';

@Injectable()
export class LayersEffects {
  toggleLayerVisibility$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LayersActions.toggleLayerVisibility),
        tap((action) => {
          this.mapService.toggleLayerVisibility(action.layer.id as string, action.layer.changes.layerVisibility);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private mapService: MapService
  ) {}
}
