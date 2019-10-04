import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ol',
  templateUrl: './ngx-ol.component.html',
  styleUrls: ['./ngx-ol.component.scss']
})
export class NgxOlComponent implements OnInit {

  constructor() { }

  config: any;

  ngOnInit() {
    this.config = {};
  }

}
