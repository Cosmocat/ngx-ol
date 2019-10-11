import { Component, OnInit, Input } from '@angular/core';
import { MapService } from '../../service/map.service';


@Component({
  selector: 'ngx-ol-map',
  templateUrl: './ngx-ol-map.component.html',
  styleUrls: ['./ngx-ol-map.component.scss']
})
export class NgxOlMapComponent implements OnInit {

  @Input() config: any;

  constructor(private mapService: MapService) { }


  ngOnInit() {
    if (this.config) {
      this.mapService.createMapInstance(this.config)
    } else {
      this.mapService.createDefaulrMapInstance()
    }
  }

}
