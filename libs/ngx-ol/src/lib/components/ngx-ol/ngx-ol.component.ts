import { Component, OnInit } from '@angular/core';
import * as fromStore from '@myworkspace/ngx-ol/store';
import * as SidebarActions from '@myworkspace/ngx-ol/store';
import { Sidebar } from '@myworkspace/ngx-ol/store';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'ngx-ol',
  templateUrl: './ngx-ol.component.html',
  styleUrls: ['./ngx-ol.component.scss']
})
export class NgxOlComponent implements OnInit {

  sidebar$: Observable<Sidebar>;

  constructor(private store: Store<fromStore.NgxOlState>) {
    this.sidebar$ = this.store.pipe(select(fromStore.getSidebar));
  }

  config: any;

  ngOnInit() {
  }

  sidebarClose() {
    this.store.dispatch(SidebarActions.closeSidebar());
  }

}
