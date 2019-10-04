import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOlComponent } from './ngx-ol.component';

describe('NgxOlComponent', () => {
  let component: NgxOlComponent;
  let fixture: ComponentFixture<NgxOlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
