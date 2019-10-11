import { createAction, props } from '@ngrx/store';
import { Layer } from '@myworkspace/ngx-ol/store';
import { Update } from '@ngrx/entity';

export const addLayer = createAction(
  '[Layers] Add Layer',
  props<{name: string}>()
);

export const removeLayer = createAction(
  '[Layers] Remove Layer',
  props<{name: string}>()
);

export const toggleLayerVisibility = createAction(
  '[Layers] Toggle Layer Visibility',
  props<{layer: Update<Layer>}>()
);
