import { Component, OnInit, Input } from '@angular/core';
import { Map, View } from 'ol';

import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'ngx-ol-map',
  templateUrl: './ngx-ol-map.component.html',
  styleUrls: ['./ngx-ol-map.component.scss']
})
export class NgxOlMapComponent implements OnInit {

  @Input() config: any;

  constructor() { }

  private mapInstance: any;


  ngOnInit() {
    this.mapInstance = new Map({
      target: "ngxOlMap",
      layers: [ new TileLayer({ source: new OSM() }) ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    console.log(this.mapInstance);
  }

}
