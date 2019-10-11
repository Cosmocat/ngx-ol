import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Layer } from '@myworkspace/ngx-ol/store';


@Component({
  selector: 'ngx-layers',
  templateUrl: './ngx-layers.component.html',
  styleUrls: ['./ngx-layers.component.scss']
})
export class NgxLayersComponent implements OnInit {

  @Input() layers: Layer[]
  @Output() toggleLayer = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleLayerVisibility(layer: Layer) {
    this.toggleLayer.emit(layer);
  }

}
