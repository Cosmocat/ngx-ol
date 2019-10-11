import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLayersComponent } from './ngx-layers.component';

describe('NgxLayersComponent', () => {
  let component: NgxLayersComponent;
  let fixture: ComponentFixture<NgxLayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
