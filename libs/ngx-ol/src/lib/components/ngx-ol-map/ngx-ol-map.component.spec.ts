import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOlMapComponent } from './ngx-ol-map.component';

describe('NgxOlMapComponent', () => {
  let component: NgxOlMapComponent;
  let fixture: ComponentFixture<NgxOlMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOlMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOlMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
