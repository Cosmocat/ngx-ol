import { Component, OnInit, Input } from '@angular/core';
import * as fromStore from '@myworkspace/ngx-ol/store';
import * as SidebarActions from '@myworkspace/ngx-ol/store';
import * as LayersActions from '@myworkspace/ngx-ol/store';
import { Sidebar, Layer } from '@myworkspace/ngx-ol/store';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import TileWMS from 'ol/source/TileWMS';


@Component({
  selector: 'ngx-ol',
  templateUrl: './ngx-ol.component.html',
  styleUrls: ['./ngx-ol.component.scss']
})
export class NgxOlComponent implements OnInit {

  @Input() config: any;

  sidebar$: Observable<Sidebar>;
  layerNames$: Observable<Layer[]>;

  constructor(private store: Store<fromStore.NgxOlState>) {
    this.sidebar$ = this.store.pipe(select(fromStore.getSidebar));
    this.layerNames$ = this.store.pipe(select(fromStore.getAllLayers));
  }

  ngOnInit() {

  }

  sidebarClose() {
    this.store.dispatch(SidebarActions.closeSidebar())
  }

  toggleLayer(layer: Layer) {
    this.store.dispatch(LayersActions.toggleLayerVisibility({
      layer: {
        id: layer.id,
        changes: {
          layerVisibility: !layer.layerVisibility
        }
      }
    }))
  }
}
