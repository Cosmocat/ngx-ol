import * as LayersActions from './layers.actions';
import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Layer } from '@myworkspace/ngx-ol/store';


export interface State extends EntityState<Layer> {
  // additional entity state properties

}

export const adapter: EntityAdapter<Layer> = createEntityAdapter<Layer>();

export const initialState: State = adapter.getInitialState({
});


export const layersReducer = createReducer(
  initialState,
  on(LayersActions.addLayer, (state, { name }) => {
    return adapter.addOne({ id: name, layerVisibility: true}, state)
  }

  ),
  on(LayersActions.removeLayer, (state, { name }) => {
      return adapter.removeOne(name, state);
    }
  ),
  on(LayersActions.toggleLayerVisibility, (state, { layer }) => {
    return adapter.updateOne(layer, state);
  }
)
);
