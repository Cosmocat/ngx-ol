import { Component, OnInit } from '@angular/core';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import XYZ from 'ol/source/XYZ';
import { MapService } from 'libs/ngx-ol/src/lib/service/map.service';

@Component({
  selector: 'myworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private mapService: MapService) {

  }

  title = 'ngx-ol-demo';
  config = {
    target: "ngxOlMap",
    layers: [
      new TileLayer({
        name: 'Giovanni Grid layer' ,
        source: new TileWMS({
          url: 'https://disc1.gesdisc.eosdis.nasa.gov/daac-bin/wms_ogc',
          params: { LAYERS: 'grid45', VERSION: '1.1.1' },
          projection: 'EPSG:4326',
        }),
      }),
      new TileLayer({
        name: 'Giovanni Countries layer',
        source: new TileWMS({
          url: 'https://disc1.gesdisc.eosdis.nasa.gov/daac-bin/wms_ogc',
          params: { LAYERS: 'countries', VERSION: '1.1.1' },
          projection: 'EPSG:4326',
        })
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.mapService.addTileLayerOnMap(
    //     new TileLayer({
    //       name: 'Giovanni Countries layer',
    //       source: new TileWMS({
    //         url: 'https://disc1.gesdisc.eosdis.nasa.gov/daac-bin/wms_ogc',
    //         params: { LAYERS: 'countries', VERSION: '1.1.1' },
    //         projection: 'EPSG:4326',
    //       })
    //     }),
    //   )
    // }, 3000);

    // setTimeout(() => {
    //   this.mapService.removeTileLayerFromMap('Giovanni Countries layer')
    // }, 5000);
  }

}
