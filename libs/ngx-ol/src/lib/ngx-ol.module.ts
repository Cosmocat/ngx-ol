import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNgxOl from './+state/ngx-ol/ngx-ol.reducer';
import { NgxOlEffects } from './+state/ngx-ol/ngx-ol.effects';
import { NgxOlComponent } from './components/ngx-ol/ngx-ol.component';
import { NgxOlMapComponent } from './components/ngx-ol-map/ngx-ol-map.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(fromNgxOl.NGXOL_FEATURE_KEY, fromNgxOl.reducer),
    EffectsModule.forFeature([NgxOlEffects])
  ],
  declarations: [NgxOlComponent, NgxOlMapComponent],
  exports: [NgxOlComponent]
})
export class NgxOlModule {}
