import { async, TestBed } from '@angular/core/testing';
import { NgxOlModule } from './ngx-ol.module';

describe('NgxOlModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxOlModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxOlModule).toBeDefined();
  });
});
