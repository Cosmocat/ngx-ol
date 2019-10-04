import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOlControllersComponent } from './ngx-ol-controllers.component';

describe('NgxOlControllersComponent', () => {
  let component: NgxOlControllersComponent;
  let fixture: ComponentFixture<NgxOlControllersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOlControllersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOlControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
