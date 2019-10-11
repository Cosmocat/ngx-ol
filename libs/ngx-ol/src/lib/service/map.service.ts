import { Map, View } from 'ol';

import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import { fromLonLat } from 'ol/proj';
import { Injectable } from '@angular/core';

import * as fromStore from '@myworkspace/ngx-ol/store';
import * as LayersActions from '@myworkspace/ngx-ol/store';
import { Store } from '@ngrx/store';

@Injectable()

export class MapService {

  constructor(private store: Store<fromStore.NgxOlState>) {

  }

  mapInstance: Map;
  viewInstance: View;
  defaultConfig = {
    target: "ngxOlMap",
    layers: [ new TileLayer({ name: "OpenStreet Map", source: new OSM() }) ],
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  }

  public createMapInstance(config: any) {
    this.mapInstance = new Map(config)
    this.viewInstance = this.mapInstance.getView()
    this.addLayersFromConfig(config)
  }

  public createDefaulrMapInstance() {
    this.mapInstance = new Map(this.defaultConfig)
    this.viewInstance = this.mapInstance.getView()
    this.addLayersFromConfig(this.defaultConfig)

  }

  private addLayersFromConfig(config) {
    config.layers.map(l => {
      const lname = l.get('name')
      this.store.dispatch(LayersActions.addLayer({name: lname}))
    })
  }

  public addTileLayerOnMap(layer: TileLayer) {
    this.mapInstance.addLayer(layer)
    this.store.dispatch(LayersActions.addLayer({name: layer.get('name')}))
  }

  public removeTileLayerFromMap(layer: string) {
    this.mapInstance.getLayers().getArray().map(l => {
      const lname = l.get('name')
      lname === layer ? this.mapInstance.removeLayer(l) : null
    })
    this.store.dispatch(LayersActions.removeLayer({name: layer}))
  }


  /**
   * zoomIn
   */
  public zoomIn() {
    const zoom = this.viewInstance.getZoom()
    this.viewInstance.animate({
      zoom: zoom + 0.5
    })
  }

  /**
   * zoomOut
   */
  public zoomOut() {
    const zoom = this.viewInstance.getZoom()
    this.viewInstance.animate({
      zoom: zoom - 0.5
    })
  }

  /**
   * toggleLayerVisbility by name
   */
  public toggleLayerVisibility(layerName: string, setVisible: boolean) {
    this.mapInstance.getLayers().forEach(l => {
      if(l.get('name') === layerName) {
        l.setVisible(setVisible);
      }
    })
  }

}
