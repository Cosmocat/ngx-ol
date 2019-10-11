import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '@myworkspace/ngx-ol/store';
import * as SidebarActions from '@myworkspace/ngx-ol/store';
import { MapService } from '../../service/map.service';


interface FsDocument extends HTMLDocument {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
}

interface FsDocumentElement extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
}

@Component({
  selector: 'ngx-ol-controllers',
  templateUrl: './ngx-ol-controllers.component.html',
  styleUrls: ['./ngx-ol-controllers.component.scss']
})
export class NgxOlControllersComponent implements OnInit {

  constructor(private store: Store<fromStore.NgxOlState>, private mapService: MapService) {

  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.store.dispatch(SidebarActions.toggleSidebar());
  }

  zoomIn() {
    this.mapService.zoomIn();
  }

  zoomOut() {
    this.mapService.zoomOut();
  }

  toggleFullScreen(): void {
    const fsDoc = document as FsDocument;
    if (!this.isFullScreen()) {
        const fsDocElem = document.documentElement.getElementsByTagName(
            'ngx-ol'
        )[0] as FsDocumentElement;
        if (fsDocElem.requestFullscreen) {
            fsDocElem.requestFullscreen();
        } else if (fsDocElem.msRequestFullscreen) {
            fsDocElem.msRequestFullscreen();
        } else if (fsDocElem.mozRequestFullScreen) {
            fsDocElem.mozRequestFullScreen();
        } else if (fsDocElem['webkitRequestFullscreen']) {
            (fsDocElem as any).webkitRequestFullscreen();
        }
    } else if (fsDoc.exitFullscreen) {
        fsDoc.exitFullscreen();
    } else if (fsDoc.msExitFullscreen) {
        fsDoc.msExitFullscreen();
    } else if (fsDoc.mozCancelFullScreen) {
        fsDoc.mozCancelFullScreen();
    } else if (fsDoc['webkitRequestFullscreen']) {
        (fsDoc as any).webkitExitFullscreen();
    }
  }

  isFullScreen(): boolean {
      const fsDoc = document as FsDocument;
      return !!(
          fsDoc.fullscreenElement ||
          fsDoc.mozFullScreenElement ||
          fsDoc['webkitFullscreenElement'] ||
          fsDoc.msFullscreenElement
      );
  }

}
