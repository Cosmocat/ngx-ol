import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '@myworkspace/ngx-ol/store';
import * as SidebarActions from '@myworkspace/ngx-ol/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-ol-controllers',
  templateUrl: './ngx-ol-controllers.component.html',
  styleUrls: ['./ngx-ol-controllers.component.scss']
})
export class NgxOlControllersComponent implements OnInit {

  sidebarOpened$: Observable<boolean>;

  constructor(private store: Store<fromStore.NgxOlState>) {
    this.sidebarOpened$ = this.store.select(state => state.sidebar.opened);
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.store.dispatch(SidebarActions.toggleSidebar());
  }

}
