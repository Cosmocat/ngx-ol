import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNgxOl from './+state/ngx-ol/ngx-ol.reducer';
import { NgxOlEffects } from './+state/ngx-ol/ngx-ol.effects';
import { LayersEffects } from './+state/ngx-ol/layers/layers.effects';
import { NgxOlComponent } from './components/ngx-ol/ngx-ol.component';
import { NgxOlMapComponent } from './components/ngx-ol-map/ngx-ol-map.component';
import { NgxOlControllersComponent } from './components/ngx-ol-controllers/ngx-ol-controllers.component';
import { MapService } from './service/map.service';
import { NgxLayersComponent } from './components/ngx-layers/ngx-layers.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(fromNgxOl.NGXOL_FEATURE_KEY, fromNgxOl.reducers),
    EffectsModule.forFeature([NgxOlEffects, LayersEffects])
  ],
  declarations: [NgxOlComponent, NgxOlMapComponent, NgxOlControllersComponent, NgxLayersComponent],
  exports: [NgxOlComponent],
  providers: [MapService]
})
export class NgxOlModule {}
